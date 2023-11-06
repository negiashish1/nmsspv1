import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsChatDots, BsYoutube} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
//import emailjs from '@emailjs-com';
import {useRef} from 'react';
// import { EmailJSResponseStatus } from '@emailjs/browser'

const Contact = () => {

  const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     EmailJSResponseStatus.sendForm('service_i3oy3p3', 'template_5wdxtma', form.current, 'Xn1s3kSgKNpf4XjfZ')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//       e.target.reset()
//   };

  return (
    <section class = "message" id = 'getintouch'>
      <h2>संपर्क करें</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nmss.professional@gmail.com</h5>
            <a href="mailto: shivanimadwal.professional@gmail.com" target="__blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsChatDots className='contact__option-icon'/>
            <h4>Facebook</h4>
            <h5>NMSS</h5>
            <a href="https://www.facebook.com/profile.php?id=100008698113338" target="__blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 **********</h5>
            <a href="https://api.whatsapp.com/send?phone=+919643935426" target ="__blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsYoutube className='contact__option-icon'/>
            <h4>Youtube</h4>
            <h5>@NarayaniShakti</h5>
            <a href="https://www.youtube.com/@narayanishakti" target ="__blank">Send a message</a>
          </article>

        </div>

        {/* <form ref= {form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form> */}

      </div>
    </section>
  )
}

export default Contact;