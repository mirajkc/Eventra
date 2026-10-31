import posthog from "posthog-js";

export const POSTHOG_EVENTS = {
  EVENT_VIEWED: "event_viewed",
  EVENT_REGISTRATION_COMPLETED: "event_registration_completed",
  EVENT_CREATED: "event_created",
  SEARCH_SUBMITTED: "search_submitted",
} as const;

type EventIdentifiers = {
  eventId: string;
  organizationId: string;
};

export function trackEventViewed({ eventId, organizationId }: EventIdentifiers) {
  posthog.capture(POSTHOG_EVENTS.EVENT_VIEWED, {
    event_id: eventId,
    organization_id: organizationId,
  });
}

export function trackEventRegistrationCompleted({
  eventId,
  organizationId,
}: EventIdentifiers) {
  posthog.capture(POSTHOG_EVENTS.EVENT_REGISTRATION_COMPLETED, {
    event_id: eventId,
    organization_id: organizationId,
  });
}

export function trackEventCreated({
  eventId,
  organizationId,
  category,
}: EventIdentifiers & { category: string }) {
  posthog.capture(POSTHOG_EVENTS.EVENT_CREATED, {
    event_id: eventId,
    organization_id: organizationId,
    category,
  });
}

type SearchSubmittedProperties = {
  queryLength: number;
  category?: string;
  capacity?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
};

export function trackSearchSubmitted({
  queryLength,
  category,
  capacity,
  status,
  createdAt,
  updatedAt,
}: SearchSubmittedProperties) {
  posthog.capture(POSTHOG_EVENTS.SEARCH_SUBMITTED, {
    query_length: queryLength,
    category,
    capacity,
    status,
    created_at_sort: createdAt,
    updated_at_sort: updatedAt,
    source: "events_page",
  });
}
