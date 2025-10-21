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
  
  const isAboutPage = path === '/about' || 
                     path === '/SethsarutK-Portfolio/about';
  
  // Debug log
  console.log('Snap scroll check:', {
    path,
    isHomePage,
    isAboutPage,
    snapScrollActive,
    globalIsScrolling,
    sectionsLength: globalSections.length
  });
  
  if (!snapScrollActive || (!isHomePage && !isAboutPage) || globalIsScrolling || globalSections.length === 0) {
    console.log('Snap scroll blocked:', { snapScrollActive, isHomePage, isAboutPage, globalIsScrolling, sectionsLength: globalSections.length });
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
    }, 1000);
  }
};

const useSnapScroll = () => {
  const location = useLocation();
  const isScrolling = useRef(false);
  const currentSection = useRef(0);
  const scrollHandlerRef = useRef(null);

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

      console.log('Snap scroll sections found:', globalSections.length, globalSections.map(s => s.className));

      if (globalSections.length === 0) {
        console.log('No sections found for snap scroll');
        return;
      }

      // Reset global state
      globalCurrentSection = 0;
      globalIsScrolling = false;

      // Remove any existing listener first
      window.removeEventListener('wheel', globalWheelHandler);
      // Add new listener
      window.addEventListener('wheel', globalWheelHandler, { passive: false });
      
      // For About page, add scroll listener to re-enable snap scroll
      if (isAboutPage) {
        const handleScroll = () => {
          const computerSkillsSection = document.querySelector('.computer-skills.snap-section');
          if (!snapScrollActive && computerSkillsSection) {
            const rect = computerSkillsSection.getBoundingClientRect();
            // If computer skills section is visible and user scrolled back up
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
              snapScrollActive = true;
              globalCurrentSection = 2; // Computer skills is index 2
              console.log('Re-enabled snap scroll');
            }
          }
        };
        
        scrollHandlerRef.current = handleScroll;
        window.addEventListener('scroll', handleScroll, { passive: true });
      }
    };

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(initSnapScroll, 100);
    
    return () => {
      clearTimeout(timer);
      // Disable snap scroll when component unmounts or location changes
      snapScrollActive = false;
      window.removeEventListener('wheel', globalWheelHandler);
      if (scrollHandlerRef.current) {
        window.removeEventListener('scroll', scrollHandlerRef.current);
      }
      globalSections = [];
    };
  }, [location.pathname]); // Re-run when location changes

  return null;
};

export default useSnapScroll;