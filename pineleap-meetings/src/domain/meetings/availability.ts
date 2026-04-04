import type {
  AvailabilityConfig,
  BookingSlot,
  MeetingRecord,
  MeetingType,
  RouteDefinition
} from "@/src/domain/meetings/types";
import {
  addMinutes,
  founderDateString,
  founderWeekday,
  formatDisplayDate,
  incrementDateString,
  zonedDateTimeToUtc
} from "@/src/domain/meetings/time";

function overlaps(startA: Date, endA: Date, startB: Date, endB: Date) {
  return startA < endB && startB < endA;
}

export function validateAvailability(config: AvailabilityConfig) {
  const hasWindow = config.rules.some((rule) => rule.enabled);
  const invalid = config.rules.some(
    (rule) => rule.enabled && rule.startTime >= rule.endTime
  );

  return {
    hasWindow,
    invalid
  };
}

export function buildBookingSlots(params: {
  availability: AvailabilityConfig;
  meetingType: MeetingType;
  meetings: MeetingRecord[];
  route: RouteDefinition;
  from?: Date;
  days?: number;
}) {
  const {
    availability,
    meetingType,
    meetings,
    route,
    from = new Date(),
    days = 6
  } = params;

  const output = new Map<string, BookingSlot[]>();
  const timezone = availability.timezone;
  const stepMinutes = 15;
  const startDate = founderDateString(from, timezone);

  for (let dayOffset = 0; dayOffset < days; dayOffset += 1) {
    const dateString = incrementDateString(startDate, dayOffset);
    const rule = availability.rules.find(
      (entry) => entry.dayOfWeek === founderWeekday(dateString)
    );

    if (!rule || !rule.enabled) {
      output.set(dateString, []);
      continue;
    }

    const [startHour, startMinute] = rule.startTime.split(":").map(Number);
    const [endHour, endMinute] = rule.endTime.split(":").map(Number);
    const startLimit = startHour * 60 + startMinute;
    const endLimit = endHour * 60 + endMinute;
    const slots: BookingSlot[] = [];

    for (
      let minuteCursor = startLimit;
      minuteCursor + meetingType.durationMinutes <= endLimit;
      minuteCursor += stepMinutes
    ) {
      const slotStart = zonedDateTimeToUtc(
        dateString,
        `${String(Math.floor(minuteCursor / 60)).padStart(2, "0")}:${String(
          minuteCursor % 60
        ).padStart(2, "0")}`,
        timezone
      );
      const slotEnd = addMinutes(slotStart, meetingType.durationMinutes);

      if (slotStart.getTime() < Date.now() + 5 * 60_000) {
        continue;
      }

      const conflicted = meetings.some((meeting) => {
        if (meeting.status === "cancelled") {
          return false;
        }

        const existingStart = new Date(meeting.startsAt);
        const existingEnd = new Date(meeting.endsAt);
        const buffer = availability.bufferEnabled ? availability.bufferMinutes : 0;
        const bufferedStart = addMinutes(existingStart, -buffer);
        const bufferedEnd = addMinutes(existingEnd, buffer);

        return overlaps(slotStart, slotEnd, bufferedStart, bufferedEnd);
      });

      slots.push({
        startAt: slotStart.toISOString(),
        endAt: slotEnd.toISOString(),
        label: formatDisplayDate(slotStart.toISOString(), timezone),
        available: !conflicted,
        reason: conflicted ? "Already booked" : null
      });
    }

    output.set(dateString, slots);
  }

  return output;
}

export function slotIsStillAvailable(slots: Map<string, BookingSlot[]>, startAt: string) {
  for (const entry of slots.values()) {
    const matching = entry.find((slot) => slot.startAt === startAt);

    if (matching) {
      return matching.available;
    }
  }

  return false;
}
