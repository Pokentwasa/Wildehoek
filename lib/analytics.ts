'use client';

/**
 * Thin analytics layer. Pushes events to GA4 (gtag) and the dataLayer if present.
 * No-ops safely when no analytics is installed, so nothing breaks in dev.
 */
type EventName =
  | 'reservation_click'
  | 'menu_view'
  | 'directions_click'
  | 'phone_click'
  | 'email_click'
  | 'event_enquiry'
  | 'journal_view';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function track(event: EventName, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag === 'function') {
    window.gtag('event', event, params);
  }
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event, ...params });
  }
}
