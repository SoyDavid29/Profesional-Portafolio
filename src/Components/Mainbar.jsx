import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

export default function Mainbar() {

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
        <div className={`main-bar ${scrolled ? 'scrolled' : ''}`} onClick={scrollToTop}>
            <h1 className='main-logo'>DR.</h1>
            <a className='main-contact' href="https://api.whatsapp.com/send?phone=6181099912&text=Hola, te contacto desde tu página web. :)">Contact</a>
        </div>
    )
}