import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';

import Mainbar from './Components/Mainbar';
import Profile from "./Components/Profile"
import Sidebar from "./Components/Sidebar"
import Target from "./Components/Target"
import Title from "./Components/Tittle"
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Social from './Components/Social';
import Sidebar2 from './Components/Sidebar2';


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

    <Element name="start">
      
      <>
        <Mainbar />

        <Sidebar2/>

        <Profile />
        <Target />

        <Title scrollY={scrollY} />

        <Element name="technologies" >
          <div className='technologies-container'>
            <img className="log" src="/Profesional-Portafolio/logos/html.svg" alt="logo" />
            <img className="log" src="/Profesional-Portafolio/logos/csswizardry.svg" alt="logo" />
            <img className="log" src="/Profesional-Portafolio/logos/javascript.svg" alt="logo" />
            <img className="log" src="/Profesional-Portafolio/logos/figma.svg" alt="logo" />
            <img className="log" src="/Profesional-Portafolio/logos/react.svg" alt="logo" />
            <img className="log" src="/Profesional-Portafolio/logos/photoshop.svg" alt="logo" />
            <img className="log" src="/Profesional-Portafolio/logos/git.svg" alt="logo" />

            <div className='github'>

              <img className="log-github" src="/Profesional-Portafolio/logos/github.svg" alt="logo" />

              <a className='git-button' href="https://github.com/SoyDavid29">Click Me!!</a>

            </div>

          </div>

        </Element>

        <div className='text-project'>
          <h1 className='project-tittle' >PROJECTS</h1>
          <p className='text-specialize' >I specialize in designing and building effective websites
            that combine visual design, strategic content,
            and intuitive interaction to attract and convert visitors into customers.</p>
        </div>


        <Projects />

        <Contact />

        <Sidebar />

        <Social />

        <section className="footer"></section>

      </>
    </Element>
  )
}

export default App
