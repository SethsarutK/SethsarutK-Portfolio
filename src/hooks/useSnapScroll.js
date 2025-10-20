import { useEffect, useRef } from 'react';

const useSnapScroll = () => {
  const isScrolling = useRef(false);
  const currentSection = useRef(0);

  useEffect(() => {
    let sections = [];
    let timeoutId = null;

    const updateSections = () => {
      sections = [
        document.querySelector('.hero'),
        document.querySelector('.highlights'),
        document.querySelector('.portfolio-showcase'),
        document.querySelector('.footer')
      ].filter(Boolean);
    };

    const scrollToSection = (index) => {
      if (sections[index]) {
        isScrolling.current = true;
        sections[index].scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        });
        
        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      }
    };

    const handleWheel = (e) => {
      // Only work on home page - more strict checking
      const currentPath = window.location.pathname + window.location.hash;
      const isHomePage = currentPath === '/' || 
                        currentPath === '' || 
                        currentPath === '/#/' || 
                        currentPath === '#/' ||
                        currentPath.endsWith('/');
      
      if (isHomePage && sections.length > 0) {
        if (isScrolling.current) return;

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
      }
    };

    const handleKeyDown = (e) => {
      // Only work on home page - more strict checking
      const currentPath = window.location.pathname + window.location.hash;
      const isHomePage = currentPath === '/' || 
                        currentPath === '' || 
                        currentPath === '/#/' || 
                        currentPath === '#/' ||
                        currentPath.endsWith('/');
      
      if (isHomePage && sections.length > 0) {
        if (isScrolling.current) return;

        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
          e.preventDefault();
          if (currentSection.current < sections.length - 1) {
            currentSection.current++;
            scrollToSection(currentSection.current);
          }
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
          e.preventDefault();
          if (currentSection.current > 0) {
            currentSection.current--;
            scrollToSection(currentSection.current);
          }
        } else if (e.key === 'Home') {
          e.preventDefault();
          currentSection.current = 0;
          scrollToSection(0);
        } else if (e.key === 'End') {
          e.preventDefault();
          currentSection.current = sections.length - 1;
          scrollToSection(sections.length - 1);
        }
      }
    };

    // Initialize after component mount
    timeoutId = setTimeout(() => {
      updateSections();
      if (sections.length > 0) {
        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('keydown', handleKeyDown);
      }
    }, 100);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
};

export default useSnapScroll;