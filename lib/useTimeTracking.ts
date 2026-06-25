import { useEffect } from 'react';
import { trackGAEvent } from './analytics';

/**
 * Hook que dispara eventos GA4 cuando el usuario permanece X segundos en la página
 * Eventos: page_time_30s, page_time_120s (2min), page_time_300s (5min)
 */
export function useTimeTracking() {
  useEffect(() => {
    const timers = [
      { time: 30000, event: 'page_time_30s' },
      { time: 120000, event: 'page_time_120s' },
      { time: 300000, event: 'page_time_300s' },
    ];

    timers.forEach(({ time, event }) => {
      setTimeout(() => {
        trackGAEvent(event, { time_spent: time / 1000 });
      }, time);
    });
  }, []);
}
