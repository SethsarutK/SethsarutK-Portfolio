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

      console.log('Available sections:', sections.map(s => s ? s.className : 'null'));

      if (sections.length === 0) {
        console.log('No sections found for snap scroll');
        return;
      }

      console.log('Snap scroll initialized with', sections.length, 'sections');

      const scrollToSection = (index) => {
        if (sections[index] && !isScrolling.current) {
          console.log('Scrolling to section:', index, sections[index].className);
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
        console.log('Wheel event detected:', e.deltaY);
        
        // Only work on home page - check for both local and deployed paths
        const path = window.location.pathname;
        const isHomePage = path === '/' || path === '/SethsarutK-Portfolio' || path === '/SethsarutK-Portfolio/';
        
        if (!isHomePage) {
          console.log('Not on home page:', path);
          return;
        }

        if (isScrolling.current) {
          console.log('Already scrolling, ignoring');
          return;
        }

        e.preventDefault();
        console.log('Prevented default scroll');
        
        if (e.deltaY > 0) {
          // Scrolling down
          if (currentSection.current < sections.length - 1) {
            currentSection.current++;
            console.log('Moving to next section:', currentSection.current);
            scrollToSection(currentSection.current);
          } else {
            console.log('Already at last section');
          }
        } else {
          // Scrolling up  
          if (currentSection.current > 0) {
            currentSection.current--;
            console.log('Moving to previous section:', currentSection.current);
            scrollToSection(currentSection.current);
          } else {
            console.log('Already at first section');
          }
        }
      };

      // Add wheel event listener
      console.log('Adding wheel event listener');
      window.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        console.log('Removing wheel event listener');
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