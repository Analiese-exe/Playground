import type {
  AvailabilityConfig,
  CalendarConnection,
  MeetingType,
  RouteActivationStatus,
  RouteDefinition,
  ValidationIssue
} from "@/src/domain/meetings/types";
import { validateAvailability } from "@/src/domain/meetings/availability";

export function validateRouteActivation(params: {
  route: RouteDefinition;
  calendar: CalendarConnection;
  availability: AvailabilityConfig;
  meetingTypes: MeetingType[];
}): RouteActivationStatus {
  const issues: ValidationIssue[] = [];
  const { route, calendar, availability, meetingTypes } = params;
  const availabilityState = validateAvailability(availability);
  const meetingType = route.meetingTypeId
    ? meetingTypes.find((entry) => entry.id === route.meetingTypeId)
    : null;

  if (calendar.status !== "connected") {
    issues.push({
      code: "calendar_disconnected",
      message: "Connect a calendar before you activate Book Meeting routes.",
      blocking: true
    });
  }

  if (!calendar.permissionGranted) {
    issues.push({
      code: "calendar_permission_denied",
      message: "Calendar permissions were denied. Reconnect to restore booking.",
      blocking: true
    });
  }

  if (!availabilityState.hasWindow) {
    issues.push({
      code: "availability_missing",
      message: "Add at least one availability window to enable booking.",
      blocking: true
    });
  }

  if (availabilityState.invalid) {
    issues.push({
      code: "availability_invalid",
      message: "Availability has an invalid time range. End time must be after start time.",
      blocking: true
    });
  }

  if (!route.meetingTypeId) {
    issues.push({
      code: "meeting_type_missing",
      message: "Select a meeting type before activating this route.",
      blocking: true
    });
  } else if (!meetingType) {
    issues.push({
      code: "meeting_type_deleted",
      message: "This route references a meeting type that no longer exists.",
      blocking: true
    });
  }

  if (route.expiresAt && new Date(route.expiresAt).getTime() <= Date.now()) {
    issues.push({
      code: "route_expired",
      message: "This route has expired and can no longer accept bookings.",
      blocking: true
    });
  }

  if (route.state === "expired") {
    issues.push({
      code: "route_invalid_state",
      message: "This route is no longer active.",
      blocking: true
    });
  }

  return {
    ready: issues.every((issue) => !issue.blocking),
    issues
  };
}
