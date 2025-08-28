import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import { Element } from 'react-scroll';
import { useRef, useEffect, useState } from 'react';

export default function Projects() {

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

        <Element name="projects">
            <section ref={ref} className={`projects ${visible ? 'visible' : ''}`}>

                <div className="projects-container">
                    <div className="project">
                        <img className="img-proyect" src="/img/fundacion.jpg" alt="project fundation mgas" />
                        <a className="link-project" href="https://fundacionmgas.org.mx/">FUNDACIÓN MGAS <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                    </div>
                </div>

                <div className="projects-container">
                    <div className="project">
                        <img className="img-proyect" src="/img/fundacion.jpg" alt="project fundation mgas" />
                        <a className="link-project" href="https://fundacionmgas.org.mx/">FUNDACIÓN MGAS <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                    </div>
                </div>


            </section>

        </Element>


    )
}