import React, { useState, useEffect } from 'react';

import Mainbar from './Components/Mainbar';
import Profile from "./Components/Profile"
import Sidebar from "./Components/Sidebar"
import Target from "./Components/Target"
import Title from "./Components/Tittle"



function App() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      <Mainbar/>
      
      <Profile />
      <Target />

      <Title scrollY={scrollY} />

      <div className='technologies-container'>
        <img  className="log" src="/Profesional-Portafolio/logos/html.svg" alt="logo"/>
        <img  className="log" src="/Profesional-Portafolio/logos/csswizardry.svg" alt="logo"/>
        <img  className="log" src="/Profesional-Portafolio/logos/javascript.svg" alt="logo"/>
        <img  className="log" src="/Profesional-Portafolio/logos/figma.svg" alt="logo"/>
        <img  className="log" src="/Profesional-Portafolio/logos/react.svg" alt="logo"/>
        <img  className="log" src="/Profesional-Portafolio/logos/photoshop.svg" alt="logo"/>
        <img  className="log" src="/Profesional-Portafolio/logos/git.svg" alt="logo"/>
        <img  className="log" src="/Profesional-Portafolio/logos/github.svg" alt="logo"/>

      </div>

      <Sidebar />

    </>
  )
}

export default App
