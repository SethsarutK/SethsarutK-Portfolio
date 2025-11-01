import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Constants
const SCROLL_ANIMATION_DURATION = 1000; // ms
const INIT_DELAY = 100; // ms

// Global flag to track if snap scroll is active
let snapScrollActive = false;
let globalSections = [];
let globalIsScrolling = false;
let globalCurrentSection = 0;

// Global wheel handler that checks if snap scroll is active
const globalWheelHandler = (e) => {
  // Double check current path
  const path = window.location.pathname;
  const isHomePage = path === '/' || 
                    path === '/home' || 
                    path === '/SethsarutK-Portfolio' || 
                    path === '/SethsarutK-Portfolio/' ||
                    path === '/SethsarutK-Portfolio/home';
  
  const isAboutPage = path === '/about' || 
                     path === '/SethsarutK-Portfolio/about';
  
  if (!snapScrollActive || (!isHomePage && !isAboutPage) || globalIsScrolling || globalSections.length === 0) {
    return;
  }

  e.preventDefault();
  
  globalIsScrolling = true;
  
  if (e.deltaY > 0) {
    // Scrolling down
    if (globalCurrentSection < globalSections.length - 1) {
      globalCurrentSection++;
      scrollToGlobalSection(globalCurrentSection);
    } else {
      // Reached last snap section, allow normal scrolling
      snapScrollActive = false;
      window.removeEventListener('wheel', globalWheelHandler);
      globalIsScrolling = false;
      // Allow this scroll event to proceed normally
      return;
    }
  } else {
    // Scrolling up  
    if (globalCurrentSection > 0) {
      globalCurrentSection--;
      scrollToGlobalSection(globalCurrentSection);
    } else {
      globalIsScrolling = false;
    }
  }
};

const scrollToGlobalSection = (index) => {
  if (globalSections[index]) {
    globalSections[index].scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
    
    // Reset scrolling flag after animation
    setTimeout(() => {
      globalIsScrolling = false;
    }, SCROLL_ANIMATION_DURATION);
  }
};

const useSnapScroll = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize on home page and about page
    const isHomePage = location.pathname === '/' || 
                      location.pathname === '/home' || 
                      location.pathname === '/SethsarutK-Portfolio' || 
                      location.pathname === '/SethsarutK-Portfolio/' ||
                      location.pathname === '/SethsarutK-Portfolio/home';
    
    const isAboutPage = location.pathname === '/about' || 
                       location.pathname === '/SethsarutK-Portfolio/about';
    
    // Set global flag
    snapScrollActive = isHomePage || isAboutPage;
    
    if (!isHomePage && !isAboutPage) {
      // Clean up any existing listeners when leaving supported pages
      window.removeEventListener('wheel', globalWheelHandler);
      globalSections = [];
      return;
    }
    
    // Wait for DOM to be ready
    const initSnapScroll = () => {
      // Find sections based on page type
      if (isHomePage) {
        globalSections = [
          document.querySelector('.hero'),
          document.querySelector('.portfolio-showcase'),
          document.querySelector('.inspiration-quote'),
          document.querySelector('.footer')
        ].filter(Boolean);
      } else if (isAboutPage) {
        globalSections = [
          document.querySelector('.about-intro.snap-section'),
          document.querySelector('.personal-info.snap-section'),
          document.querySelector('.computer-skills.snap-section')
        ].filter(Boolean);
      }

      if (globalSections.length === 0) {
        return;
      }

      // Reset global state
      globalCurrentSection = 0;
      globalIsScrolling = false;

      // Remove any existing listener first
      window.removeEventListener('wheel', globalWheelHandler);
      // Add new listener
      window.addEventListener('wheel', globalWheelHandler, { passive: false });
    };

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(initSnapScroll, INIT_DELAY);
    
    return () => {
      clearTimeout(timer);
      // Disable snap scroll when component unmounts or location changes
      snapScrollActive = false;
      window.removeEventListener('wheel', globalWheelHandler);
      globalSections = [];
    };
  }, [location.pathname]); // Re-run when location changes

  return null;
};

export default useSnapScroll;