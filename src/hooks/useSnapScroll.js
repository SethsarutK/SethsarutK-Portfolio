import { useEffect, useRef } from 'react';import { useEffect, useRef } from 'react';



const useSnapScroll = () => {const useSnapScroll = () => {

  const isScrolling = useRef(false);  const isScrolling = useRef(false);

  const currentSection = useRef(0);  const currentSection = useRef(0);



  useEffect(() => {  useEffect(() => {

    // Wait for DOM to be ready    // Wait for DOM to be ready

    const initSnapScroll = () => {    const initSnapScroll = () => {

      const sections = [      const sections = [

        document.querySelector('.hero'),        document.querySelector('.hero'),

        document.querySelector('.highlights'),        document.querySelector('.highlights'),

        document.querySelector('.portfolio-showcase'),        document.querySelector('.portfolio-showcase'),

        document.querySelector('.footer')        document.querySelector('.footer')

      ].filter(Boolean);      ].filter(Boolean);



      if (sections.length === 0) {      if (sections.length === 0) {

        return;        return;

      }      }



      const scrollToSection = (index) => {      const scrollToSection = (index) => {

        if (sections[index] && !isScrolling.current) {        if (sections[index] && !isScrolling.current) {

          isScrolling.current = true;          isScrolling.current = true;

                    

          sections[index].scrollIntoView({          sections[index].scrollIntoView({

            behavior: 'smooth',            behavior: 'smooth',

            block: 'center'            block: 'center'

          });          });

                    

          // Reset scrolling flag after animation          // Reset scrolling flag after animation

          setTimeout(() => {          setTimeout(() => {

            isScrolling.current = false;            isScrolling.current = false;

          }, 1000);          }, 1000);

        }        }

      };      };



      const handleWheel = (e) => {      const handleWheel = (e) => {

        // Only work on home page - check for both local and deployed paths        // Only work on home page - check for both local and deployed paths

        const path = window.location.pathname;        const path = window.location.pathname;

        const isHomePage = path === '/' || path === '/SethsarutK-Portfolio' || path === '/SethsarutK-Portfolio/';        const isHomePage = path === '/' || path === '/SethsarutK-Portfolio' || path === '/SethsarutK-Portfolio/';

                

        if (!isHomePage) {        if (!isHomePage) {

          return;          return;

        }        }



        if (isScrolling.current) {        if (isScrolling.current) {

          return;          return;

        }        }



        e.preventDefault();        e.preventDefault();

                

        if (e.deltaY > 0) {        if (e.deltaY > 0) {

          // Scrolling down          // Scrolling down

          if (currentSection.current < sections.length - 1) {          if (currentSection.current < sections.length - 1) {

            currentSection.current++;            currentSection.current++;

            scrollToSection(currentSection.current);            scrollToSection(currentSection.current);

          }          }

        } else {        } else {

          // Scrolling up            // Scrolling up  

          if (currentSection.current > 0) {          if (currentSection.current > 0) {

            currentSection.current--;            currentSection.current--;

            scrollToSection(currentSection.current);            scrollToSection(currentSection.current);

          }          }

        }        }

      };      };



      // Add wheel event listener      // Add wheel event listener

      window.addEventListener('wheel', handleWheel, { passive: false });      window.addEventListener('wheel', handleWheel, { passive: false });



      return () => {      return () => {

        window.removeEventListener('wheel', handleWheel);        window.removeEventListener('wheel', handleWheel);

      };      };

    };    };



    // Initialize after a short delay to ensure DOM is ready    // Initialize after a short delay to ensure DOM is ready

    const timer = setTimeout(initSnapScroll, 100);    const timer = setTimeout(initSnapScroll, 100);

        

    return () => {    return () => {

      clearTimeout(timer);      clearTimeout(timer);

    };    };

  }, []);  }, []);



  return null;  return null;

};};



export default useSnapScroll;export default useSnapScroll;