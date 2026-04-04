export type CalendarProvider = "google" | "outlook";
export type CalendarStatus = "connected" | "disconnected" | "error";
export type MeetingStatus = "scheduled" | "completed" | "manual_follow_up" | "cancelled";
export type RouteOutcome = "book_meeting" | "share_file" | "request_follow_up";
export type RouteState = "draft" | "active" | "expired";

export interface FounderProfile {
  id: string;
  name: string;
  role: string;
  company: string;
  email: string;
  initials: string;
}

export interface CalendarConnection {
  provider: CalendarProvider;
  status: CalendarStatus;
  accountEmail: string;
  permissionGranted: boolean;
  lastSyncAt: string | null;
  connectedAt: string | null;
  errorMessage: string | null;
  disconnectedWarning: boolean;
}

export interface AvailabilityRule {
  dayOfWeek: number;
  enabled: boolean;
  startTime: string;
  endTime: string;
}

export interface AvailabilityConfig {
  timezone: string;
  durationOptions: number[];
  bufferEnabled: boolean;
  bufferMinutes: number;
  rules: AvailabilityRule[];
}

export interface MeetingType {
  id: string;
  name: string;
  durationMinutes: number;
  description: string;
  routeIds: string[];
}

export interface BookingExperience {
  title: string;
  description: string;
  confirmationMessage: string;
}

export interface RouteOptionalField {
  id: string;
  label: string;
  required: boolean;
  placeholder: string;
}

export interface RouteDefinition {
  id: string;
  slug: string;
  name: string;
  founderName: string;
  founderRole: string;
  founderCompany: string;
  meetingTypeId: string | null;
  outcome: RouteOutcome;
  state: RouteState;
  bookButtonText: string;
  successMessage: string;
  optionalField: RouteOptionalField | null;
  completedCount: number;
  expiresAt: string | null;
}

export interface MeetingRecord {
  id: string;
  routeId: string;
  routeName: string;
  meetingTypeId: string;
  meetingTypeName: string;
  visitorName: string;
  visitorEmail: string;
  optionalResponse: string | null;
  startsAt: string;
  endsAt: string;
  timezone: string;
  status: MeetingStatus;
  idempotencyKey: string;
  calendarEventId: string | null;
  calendarJoinUrl: string | null;
  emailDeliveryStatus: "sent" | "queued" | "failed";
  createdAt: string;
  completedAt: string | null;
}

export interface CalendarEventRecord {
  id: string;
  provider: CalendarProvider;
  meetingId: string;
  externalEventId: string;
  startsAt: string;
  endsAt: string;
}

export interface EmailQueueItem {
  id: string;
  meetingId: string;
  to: string;
  subject: string;
  attempts: number;
  lastError: string | null;
  status: "queued" | "sent" | "failed";
  createdAt: string;
}

export interface ActivityLog {
  id: string;
  type:
    | "meeting_booked"
    | "route_completed"
    | "calendar_retry"
    | "email_retry"
    | "setup_warning"
    | "meeting_completed";
  routeId: string | null;
  meetingId: string | null;
  message: string;
  createdAt: string;
}

export interface SystemStore {
  founder: FounderProfile;
  setup: {
    calendar: CalendarConnection;
    availability: AvailabilityConfig;
    meetingTypes: MeetingType[];
    bookingExperience: BookingExperience;
  };
  routes: RouteDefinition[];
  meetings: MeetingRecord[];
  calendarEvents: CalendarEventRecord[];
  activities: ActivityLog[];
  emailQueue: EmailQueueItem[];
}

export interface ValidationIssue {
  code:
    | "calendar_disconnected"
    | "calendar_permission_denied"
    | "availability_missing"
    | "availability_invalid"
    | "meeting_type_missing"
    | "meeting_type_deleted"
    | "route_expired"
    | "route_invalid_state";
  message: string;
  blocking: boolean;
}

export interface RouteActivationStatus {
  ready: boolean;
  issues: ValidationIssue[];
}

export interface BookingSlot {
  startAt: string;
  endAt: string;
  label: string;
  available: boolean;
  reason: string | null;
}

export interface BookingPageData {
  route: RouteDefinition;
  founder: FounderProfile;
  bookingExperience: BookingExperience;
  meetingType: MeetingType;
  activation: RouteActivationStatus;
  availability: AvailabilityConfig;
}

export interface BookingRequest {
  routeSlug: string;
  name: string;
  email: string;
  optionalResponse?: string;
  startAt: string;
  idempotencyKey: string;
}

export interface BookingConfirmationResult {
  meeting: MeetingRecord;
  addToCalendarUrl: string;
  confirmationMessage: string;
}
