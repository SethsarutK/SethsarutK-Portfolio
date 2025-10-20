import { useEffect, useRef } from 'react';

const useSnapScroll = () => {
  const isScrolling = useRef(false);
  const currentSection = useRef(0);

  useEffect(() => {
    // Wait for DOM to be ready
    const initSnapScroll = () => {
      const sections = [
        document.querySelector('.hero'),
        document.querySelector('.highlights'),
        document.querySelector('.portfolio-showcase'),
        document.querySelector('.footer')
      ].filter(Boolean);

      if (sections.length === 0) {
        return;
      }

      const scrollToSection = (index) => {
        if (sections[index] && !isScrolling.current) {
          isScrolling.current = true;
          
          sections[index].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
          
          // Reset scrolling flag after animation
          setTimeout(() => {
            isScrolling.current = false;
          }, 1000);
        }
      };

      const handleWheel = (e) => {
        // Only work on home page - check for both local and deployed paths
        const path = window.location.pathname;
        const isHomePage = path === '/' || path === '/SethsarutK-Portfolio' || path === '/SethsarutK-Portfolio/';
        
        if (!isHomePage) {
          return;
        }

        if (isScrolling.current) {
          return;
        }

        e.preventDefault();
        
        if (e.deltaY > 0) {
          // Scrolling down
          if (currentSection.current < sections.length - 1) {
            currentSection.current++;
            scrollToSection(currentSection.current);
          }
        } else {
          // Scrolling up  
          if (currentSection.current > 0) {
            currentSection.current--;
            scrollToSection(currentSection.current);
          }
        }
      };

      // Add wheel event listener
      window.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        window.removeEventListener('wheel', handleWheel);
      };
    };

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(initSnapScroll, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return null;
};

export default useSnapScroll;