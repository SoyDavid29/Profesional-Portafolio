import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faLocationDot, faRocket } from '@fortawesome/free-solid-svg-icons'

export default function ContactForm() {

  const [state, handleSubmit] = useForm("mldgqqoy");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form className='form' onSubmit={handleSubmit}>

      <div className='label-container'>
        <label htmlFor="name">Your name:</label>
        <input type="text" id="name" name="name" />
      </div>

      <div className='label-container'>
        <label htmlFor="email">
          Email Address:
        </label>
        <input
          id="email"
          type="email"
          name="email"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>



      <div className='label-container'>
        <label htmlFor="text">Messege:</label>
        <textarea
          id="message"
          name="message"
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

      </div>

      <button className='send-button' type="submit" disabled={state.submitting}>
        Send <FontAwesomeIcon icon={faRocket} />
      </button>

    </form>
  );

}