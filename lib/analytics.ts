// 📊 Analytics - GA4/GTM + Meta Pixel tracking (centralized, typed)

type EventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, eventParams?: EventParams) => void;
    fbq?: (command: string, event: string, data?: EventParams) => void;
  }
}

/**
 * Track GA4/GTM event
 */
export const trackGAEvent = (eventName: string, eventParams?: EventParams): void => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {
      page_title: document.title,
      ...eventParams,
    });
  }
};

/**
 * Track Meta Pixel event
 */
export const trackPixelEvent = (eventName: string, eventData?: EventParams): void => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, eventData);
  }
};

/**
 * Track form submission (Hero form, etc)
 */
export const trackFormSubmit = (formType: "hero" | "contact", data: EventParams): void => {
  trackGAEvent(`motion_${formType}_form_submit`, data);
  trackPixelEvent("Lead", {
    content_name: "Diagnóstico Gratuito",
    content_category: "Consulta",
    value: 0,
    currency: "ARS",
  });
};

/**
 * Track CTA/button click
 */
export const trackCTAClick = (buttonText: string, section: string, href?: string): void => {
  trackGAEvent("cta_click", {
    button_text: buttonText,
    section: section,
    link: href || "",
  });
  trackPixelEvent("ViewContent", {
    content_name: `CTA - ${buttonText}`,
    content_category: "Engagement",
  });
};

/**
 * Track social link click (Instagram, WhatsApp, etc)
 */
export const trackSocialClick = (platform: string, handle: string, href: string): void => {
  trackGAEvent("social_click", {
    platform: platform,
    handle: handle,
    link: href,
  });
  trackPixelEvent("AddToCart", {
    content_name: `${platform} - ${handle}`,
    content_category: "Social",
  });
};

/**
 * Track section view
 */
export const trackSectionView = (sectionName: string): void => {
  trackGAEvent(`${sectionName}_view`, {
    section: sectionName,
  });
};

/**
 * Hook for React components (optional, for convenience)
 */
export function useAnalytics() {
  return { trackGAEvent, trackPixelEvent, trackFormSubmit, trackCTAClick, trackSocialClick, trackSectionView };
}
