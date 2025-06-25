import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faLocationDot, faRocket } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    return (

        <section className="contact">

            <div className="text-container">
                <h3 className="contact-tittle">Contact</h3>
                <h1 className="tittle1">GET IN TOUCH WITH ME TODAY</h1>
                <p className="tittle-hi">“I’m here to listen. Whether you're ready to get started, have an idea you'd like to explore, or simply want to ask a question, feel free to reach out.”</p>
            </div>

            <div className="card-container">

                <div className="card">
                    <FontAwesomeIcon icon={faMessage} className='icon' />
                    <h3>Sent me an E-mail</h3>
                    <p>You can send me an email, and I will respond immediately.</p>
                    <a className='mail' href="mailto:daviswebdesigner@gmail.com?subject=Hello&body=Hi there!">
                       daviswebdesigner@gmail.com
                    </a>
                </div> 

                <div className="card">
                     <FontAwesomeIcon icon={faLocationDot} />
                     <h3>Location</h3>
                     <p>"I work remotely from Durango, Mex, offering services throughout Mexico."</p>
                     <p>"Durango, Mexico."</p>
                </div>
            </div>

            <div className='form-container'>
                <div className="card">
                     <FontAwesomeIcon icon={faRocket} />
                     <h3>Complete the form and I'll respond personally within 24 hours.</h3>
                     <p>"Let's talk about how can i help you!."</p>
                </div>
            </div>
            
        </section>
    )
}