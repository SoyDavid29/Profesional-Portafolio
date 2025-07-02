import { Element } from 'react-scroll';
import { useRef, useEffect, useState } from 'react';

export default function Target() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

 useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setVisible(entry.isIntersecting);
    },
    { threshold: 0.3 }
  );

  if (ref.current) observer.observe(ref.current);

  return () => {
    if (ref.current) observer.unobserve(ref.current);
  };
}, []);

  return (
    <Element name="about" > 
      <div ref={ref} className={`target ${visible ? 'visible' : ''}`}>
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
