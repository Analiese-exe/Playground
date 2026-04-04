const shortDateFormatterCache = new Map<string, Intl.DateTimeFormat>();

function getParts(date: Date, timeZone: string) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23"
  });

  const parts = formatter.formatToParts(date);
  const bag = Object.fromEntries(parts.map((part) => [part.type, part.value]));

  return {
    year: Number(bag.year),
    month: Number(bag.month),
    day: Number(bag.day),
    hour: Number(bag.hour),
    minute: Number(bag.minute),
    second: Number(bag.second)
  };
}

function getOffsetMs(date: Date, timeZone: string) {
  const parts = getParts(date, timeZone);
  const asUtc = Date.UTC(
    parts.year,
    parts.month - 1,
    parts.day,
    parts.hour,
    parts.minute,
    parts.second
  );

  return asUtc - date.getTime();
}

export function zonedDateTimeToUtc(dateString: string, timeString: string, timeZone: string) {
  const [year, month, day] = dateString.split("-").map(Number);
  const [hour, minute] = timeString.split(":").map(Number);

  let timestamp = Date.UTC(year, month - 1, day, hour, minute, 0, 0);

  for (let index = 0; index < 3; index += 1) {
    const offset = getOffsetMs(new Date(timestamp), timeZone);
    const next = Date.UTC(year, month - 1, day, hour, minute, 0, 0) - offset;

    if (next === timestamp) {
      break;
    }

    timestamp = next;
  }

  return new Date(timestamp);
}

export function addMinutes(date: Date, minutes: number) {
  return new Date(date.getTime() + minutes * 60_000);
}

export function founderDateString(date: Date, timeZone: string) {
  const parts = getParts(date, timeZone);
  return `${parts.year}-${String(parts.month).padStart(2, "0")}-${String(parts.day).padStart(2, "0")}`;
}

export function founderWeekday(dateString: string) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).getUTCDay();
}

export function incrementDateString(dateString: string, days: number) {
  const [year, month, day] = dateString.split("-").map(Number);
  const next = new Date(Date.UTC(year, month - 1, day + days));
  return next.toISOString().slice(0, 10);
}

export function formatDisplayDate(dateIso: string, timeZone?: string) {
  const key = timeZone ?? "local";
  const cached = shortDateFormatterCache.get(key);

  if (cached) {
    return cached.format(new Date(dateIso));
  }

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });

  shortDateFormatterCache.set(key, formatter);
  return formatter.format(new Date(dateIso));
}

export function formatTimeRange(startIso: string, endIso: string, timeZone?: string) {
  const start = new Date(startIso);
  const end = new Date(endIso);
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit"
  });

  return `${formatter.format(start)} - ${formatter.format(end)}`;
}

export function isPast(dateIso: string) {
  return new Date(dateIso).getTime() < Date.now();
}
