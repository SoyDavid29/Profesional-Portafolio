import React, { useState, useEffect } from 'react';

export default function Title ({ scrollY })  {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Example: make it visible after scrolling 200px
    if (scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [scrollY]);

  return (
    <h2 className={`magic-text ${isVisible ? 'visible' : 'hidden'}`}>
      💫 MY SKILLS💫
    </h2>
  );
};

