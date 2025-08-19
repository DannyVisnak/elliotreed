// Smart Analytics Configuration
// Loads GA4 and Meta Pixel efficiently with performance optimizations

// GA4 Configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || 'XXXXXXXXXX';

// Initialize GA4
export const initGA = () => {
  if (typeof window === 'undefined') return;
  
  // Load GA4 script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  
  window.gtag('js', new Date());
  window.gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Initialize Meta Pixel
export const initMetaPixel = () => {
  if (typeof window === 'undefined') return;
  
  // Load Meta Pixel script
  const script = document.createElement('script');
  script.async = true;
  script.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${FB_PIXEL_ID}');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(script);
};

// Track page views
export const trackPageView = (url) => {
  if (typeof window === 'undefined') return;
  
  // GA4 page view
  if (window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
  
  // Meta Pixel page view
  if (window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// Track events
export const trackEvent = (action, category, label, value) => {
  if (typeof window === 'undefined') return;
  
  // GA4 event
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
  
  // Meta Pixel event
  if (window.fbq) {
    window.fbq('track', action, {
      content_category: category,
      content_name: label,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent('form_submit', 'engagement', formName);
};

// Track CTA clicks
export const trackCTAClick = (ctaName) => {
  trackEvent('cta_click', 'engagement', ctaName);
};

// Track downloads
export const trackDownload = (fileName) => {
  trackEvent('download', 'engagement', fileName);
};

// Initialize analytics on client side
export const initAnalytics = () => {
  if (typeof window === 'undefined') return;
  
  // Only initialize once
  if (typeof window.gtag !== 'undefined' && typeof window.fbq !== 'undefined') return;
  
  initGA();
  initMetaPixel();
  
  // Track initial page view
  trackPageView(window.location.pathname);
};
