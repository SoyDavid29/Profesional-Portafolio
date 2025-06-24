import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function Projects(){
    return(

        <section className="projects-container">
            <div className="project">
                <img className="img-proyect" src="/Profesional-Portafolio/img/fundacion.jpg" alt="project fundation mgas" />
                <a className="link-project" href="https://fundacionmgas.org.mx/">FUNDACIÓN MGAS <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
            </div>
        </section>
    )
}