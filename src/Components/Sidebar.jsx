import { useState, useEffect } from "react";
import { animateScroll as scroll } from 'react-scroll';

export default function Sidebar() {
  const [visible, setVisible] = useState(true);         // Show/hide bar on scroll
  const [menuOpen, setMenuOpen] = useState(false);      // Mobile menu toggle

  // Handle scroll visibility effect
  useEffect(() => {
    let timeOutId;

    const handleScroll = () => {
      setVisible(false);

      clearTimeout(timeOutId);
      timeOutId = setTimeout(() => {
        setVisible(true);
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: "easeInOutQuart"
    });
  };

  // JSX output
  return (
    <div className={`bar ${visible ? "visible" : "hidden"}`}>
      {/* DR logo scrolls to top */}
      <button onClick={scrollToTop} className="logo-button">
        DR
      </button>

      {/* Burger menu */}
      <button
        className={`btn-menu ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
    </div>
  );
}
