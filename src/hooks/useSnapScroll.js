import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

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
  
  // Debug log
  console.log('Snap scroll check:', {
    path,
    isHomePage,
    snapScrollActive,
    globalIsScrolling,
    sectionsLength: globalSections.length
  });
  
  if (!snapScrollActive || !isHomePage || globalIsScrolling || globalSections.length === 0) {
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
      globalIsScrolling = false;
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
    }, 1000);
  }
};

const useSnapScroll = () => {
  const location = useLocation();
  const isScrolling = useRef(false);
  const currentSection = useRef(0);

  useEffect(() => {
    // Only initialize on home page
    const isHomePage = location.pathname === '/' || 
                      location.pathname === '/home' || 
                      location.pathname === '/SethsarutK-Portfolio' || 
                      location.pathname === '/SethsarutK-Portfolio/' ||
                      location.pathname === '/SethsarutK-Portfolio/home';
    
    // Set global flag
    snapScrollActive = isHomePage;
    
    if (!isHomePage) {
      // Clean up any existing listeners when leaving home page
      window.removeEventListener('wheel', globalWheelHandler);
      return;
    }
    
    // Wait for DOM to be ready
    const initSnapScroll = () => {
      // Find sections
      globalSections = [
        document.querySelector('.hero'),
        document.querySelector('.highlights'),
        document.querySelector('.portfolio-showcase'),
        document.querySelector('.footer')
      ].filter(Boolean);

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
    const timer = setTimeout(initSnapScroll, 100);
    
    return () => {
      clearTimeout(timer);
      // Disable snap scroll when component unmounts or location changes
      snapScrollActive = false;
      if (!isHomePage) {
        window.removeEventListener('wheel', globalWheelHandler);
        globalSections = [];
      }
    };
  }, [location.pathname]); // Re-run when location changes

  return null;
};

export default useSnapScroll;