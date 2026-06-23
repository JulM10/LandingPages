// 📊 Analytics Hook - Google Analytics 4 Tracking

export function useAnalytics() {
    const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', eventName, eventData);
            console.log(`📊 Event tracked: ${eventName}`, eventData);
        }
    };
    return { trackEvent };
}

// Declarar gtag en tipos globales para TypeScript
declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}
