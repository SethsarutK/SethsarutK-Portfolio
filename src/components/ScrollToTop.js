import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Temporarily disable smooth scrolling for instant scroll to top
    const root = document.documentElement;
    const originalScrollBehavior = root.style.scrollBehavior;
    
    root.style.scrollBehavior = 'auto';
    
    // Force scroll to top when the location changes
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      
      // Reset any scroll position on root element
      const rootElement = document.getElementById('root');
      if (rootElement) {
        rootElement.scrollTop = 0;
      }
    };
    
    // Multiple attempts to ensure scroll works
    scrollToTop();
    requestAnimationFrame(() => {
      scrollToTop();
      setTimeout(() => {
        scrollToTop();
        // Restore original scroll behavior after scrolling
        root.style.scrollBehavior = originalScrollBehavior;
      }, 100);
    });
    
  }, [pathname]);

  return null;
}

export default ScrollToTop;