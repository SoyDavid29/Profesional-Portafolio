import { useState, useEffect } from "react";
import { animateScroll as scroll } from 'react-scroll';

export default function Sidebar() {
  const [visible, setVisible] = useState(true);         // Show/hide bar on scroll
  const [menuOpen, setMenuOpen] = useState(false);      // Mobile menu toggle
  const [opacity, setOpacity] = useState(false)         //links visibles or invisibles

  // Handle scroll visibility effect
 useEffect(() => {
  let lastScrollY = window.scrollY;
  let timeoutId;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // User is scrolling down – hide bar
      setVisible(false);
    } else {
      // User is scrolling up – show bar
      setVisible(true);
    }

    lastScrollY = currentScrollY;

    // Also, auto-show bar after short delay of inactivity
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setVisible(true);
    }, 500);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    clearTimeout(timeoutId);
  };
}, []);


  // Scroll to top to make click on the logo
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: "easeInOutQuart"
    });
  };

  // JSX output
  return (
    <div className={`bar ${visible ? "visible" : "hidden"}`}>

      <ul className={`links ${opacity ? "uno" : "cero"}`}>
        <a className="link" href="">START</a>
        <a className="link" href="">ABOUT-ME</a>
        <a className="link" href="">TECHNOLOGIES</a>
        <a className="link" href="">PROYECTS</a>
        <a className="link" href="">CONTACT</a>
      </ul>
      
       {/* Burger menu */}
      <button
        className={`btn-menu ${menuOpen ? "open" : "" }`}
        onClick={() => {
        setMenuOpen(!menuOpen);
        setOpacity(prev => !prev); // 👈 this toggles opacity state!
        }}

      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>

      </button>

      <h1 className="menu">MENU</h1>

    </div>
  );
}
