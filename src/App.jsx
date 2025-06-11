import React, { useState, useEffect } from 'react';


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



      <Sidebar />
      <Profile />
      <Target />

      <Title scrollY={scrollY} />

    </>
  )
}

export default App
