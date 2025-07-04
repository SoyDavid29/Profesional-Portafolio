import { useState, useEffect } from "react";
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faAddressCard, faCode, faLaptopCode, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll';

export default function Sidebar2() {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const openScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 50);
        };

        window.addEventListener('scroll', openScroll);
        return () => window.removeEventListener('scroll', openScroll);
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 800,
            smooth: "easeInOutQuart"
        });
    };
    return (
        <div className="sidebar2">

            <h1 className='main-logo'>DR.</h1>

            <ul className="links2">

                <Link className="link2" to="start" smooth={true} duration={500}>
                   START
                </Link>

                <Link className="link2" to="about" smooth={true} duration={500}>
                    ABOUT-ME
                </Link>

                <Link className="link2" to="technologies" smooth={true} duration={500}>
                    TECHNOLOGIES
                </Link>

                <Link className="link2" to="projects" smooth={true} duration={500}>
                    PROJECTS
                </Link>

                <Link className="link2" to="contact" smooth={true} duration={500}>
                    CONTACT
                </Link>
            </ul>
        </div>
    )
}