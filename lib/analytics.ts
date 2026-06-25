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
  trackPixelEvent("ViewContent", {
    content_name: `Section - ${sectionName}`,
    content_category: "Engagement",
  });
};

/**
 * Track FAQ interaction
 */
export const trackFAQInteraction = (action: 'expand' | 'collapse', index: number, question: string): void => {
  trackGAEvent(`faq_${action}`, {
    question_index: index,
    question_text: question,
  });
  trackPixelEvent("ViewContent", {
    content_name: `FAQ - ${action}`,
    content_category: "Engagement",
  });
};

/**
 * Track feature/service interaction
 */
export const trackFeatureInteraction = (action: 'view' | 'expand', title: string, index?: number): void => {
  trackGAEvent(`feature_${action}`, {
    feature_title: title,
    feature_index: index || 0,
  });
  trackPixelEvent("ViewContent", {
    content_name: `Feature - ${title}`,
    content_category: "Engagement",
  });
};

/**
 * Track plan selection
 */
export const trackPlanSelection = (planName: string, planPrice?: string): void => {
  trackGAEvent("plan_selected", {
    plan_name: planName,
    plan_price: planPrice || "",
  });
  trackPixelEvent("ViewContent", {
    content_name: `Plan - ${planName}`,
    content_category: "Pricing",
  });
};

/**
 * Track testimonial interaction
 */
export const trackTestimonialInteraction = (index: number, author: string): void => {
  trackGAEvent("testimonial_expand", {
    testimonial_index: index,
    author_name: author,
  });
  trackPixelEvent("ViewContent", {
    content_name: `Testimonial - ${author}`,
    content_category: "Social Proof",
  });
};

/**
 * Track roadmap interaction
 */
export const trackRoadmapInteraction = (action: 'view' | 'hover' | 'click', stepNumber: string, stepName: string): void => {
  trackGAEvent(`roadmap_${action}`, {
    step_number: stepNumber,
    step_name: stepName,
  });
  if (action !== 'hover') {
    trackPixelEvent("ViewContent", {
      content_name: `Roadmap - ${stepName}`,
      content_category: "Engagement",
    });
  }
};

/**
 * Hook for React components (optional, for convenience)
 */
export function useAnalytics() {
  return {
    trackGAEvent,
    trackPixelEvent,
    trackFormSubmit,
    trackCTAClick,
    trackSocialClick,
    trackSectionView,
    trackFAQInteraction,
    trackFeatureInteraction,
    trackPlanSelection,
    trackTestimonialInteraction,
    trackRoadmapInteraction,
  };
}
