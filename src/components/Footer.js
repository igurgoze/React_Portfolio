import '../styles/Footer.css'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Footer() {
  const form = useRef();
  const clearForm= () => {
    alert("Thanks for the email")
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('formMessage').value = '';
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dkjivzo', 'contact_form', form.current, '')
      .then((result) => {
          console.log(result.text);
          clearForm();
      }, (error) => {
          console.log(error.text);
      }
      
      );    
  };

  return (
    <footer>
      <section id="contact-me" class="contact-me">
        <div class="container">
          <div class="section-title">
            <h2>Contact</h2>
          </div>
          <p>I am excited to get the chance to work with you, feel free to reach out and contact me!</p>

          <div class="row">

            <div class="col-lg-5 d-flex align-items-stretch">
              <div class="info">

                <div>
                  <h4 class="fa fa-github"> Github:</h4>
                  <a href="https://github.com/igurgoze" target="_blank" ><p>igurgoze</p></a>
                </div>

                <div>
                  <h4 class="fa fa-envelope"> Email:</h4>
                  <a href="mailto:kb8monkey@yahoo.com" target="_blank" ><p>kb8monkey@yahoo.com</p></a>
                </div>

                <div>
                  <h4 class="fa fa-linkedin"> LinkedIn:</h4>
                  <a href="https://www.linkedin.com/in/" target="_blank" ><p>Ian</p></a>
                </div>

              </div>

            </div>

            <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form ref={form} onSubmit={sendEmail} method="post" role="form" class="php-email-form">
                <div class="row">

                  <div class="form-group col-md-6">
                    <label for="name">Your Name: </label>
                    <input type="text" name="name" class="form-control" id="name" required />
                  </div>

                  <div class="form-group col-md-6">
                    <label for="name">Your Email: </label>
                    <input type="email" class="form-control" name="email" id="email" required />
                  </div>

                </div>

                <div class="form-group">
                  <label for="name">Subject: </label>
                  <input type="text" class="form-control" name="subject" id="subject" required />
                </div>

                <div class="form-group">
                  <label for="name">Message: </label>
                  <textarea class="form-control" name="message" rows="10" id="formMessage" required></textarea>
                </div>
                <div class="my-3 text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>

          </div>

        </div>
      </section>
    </footer>
  )
}