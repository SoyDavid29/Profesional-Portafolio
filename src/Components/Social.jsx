import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Social() {
    return (

        <div className="social-container">

            <div className="social">
                <h1 className='design-tittle'>DR DESIGN<span className='david-tittle'>David Rodriguez</span></h1>
                <p className='david-tittle1' >Custom web development, with a balance of design and functionality.</p>
            </div>

            <div className="logos-container">
                <p className='david-tittle1'>David Rodriguez</p>
                <FontAwesomeIcon className='likedin-logo' icon={faLinkedin} />
            </div>

        </div>
    )
}