'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initAnalytics, trackPageView } from '../lib/analytics';

export default function AnalyticsProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize analytics on first load
    initAnalytics();
  }, []);

  useEffect(() => {
    // Track page views on route changes
    if (pathname) {
      trackPageView(pathname);
    }
  }, [pathname]);

  return <>{children}</>;
}
