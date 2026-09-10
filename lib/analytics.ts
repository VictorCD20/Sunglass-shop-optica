declare global {
  interface Window {
    dataLayer?: Record<string, any>[];
  }
}

export type EventParams = {
  event: string;
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: any;
};

/**
 * Función reutilizable para enviar eventos a window.dataLayer de forma segura (SSR-friendly).
 */
export function trackEvent({ event, event_category, event_label, ...rest }: EventParams): void {
  if (typeof window === "undefined") return;
  
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    event_category,
    event_label,
    page_location: window.location.href,
    ...rest,
  });
}
