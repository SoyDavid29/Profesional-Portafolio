import { Element } from 'react-scroll';
import { useRef, useEffect, useState } from 'react';

export default function Target() {
  const ref = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 20); // Change 50 to whatever threshold you want
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Element name="about">
      <div ref={ref} className={`target ${scrolled ? 'visible' : ''}`}>
        <h1 className="tittle">Hey there! I'm David.</h1>
        <p className="about">
          I'm a Computer Systems Engineering student with a big passion for UX/UI Design. 
          I love turning ideas into stunning websites that are fun, functional, and leave a great first impression. 
          For me, design is all about blending creativity and user experience 
          to make people fall in love with a website one click at a time.
        </p>
      </div>
    </Element>
  );
}
