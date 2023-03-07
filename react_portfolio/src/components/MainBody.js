import '../styles/MainBody.css'
import Image from "../assets/images/pfp.png"


export default function MainBody() {

  return (
    <section id="about-me">
      <div class="container">
        <div class="section-title">
          <h2>About Myself</h2>
        </div>
        <p>Video Game lover gone Developer, I have always wanted to create cool things using computers and very excited to work in a team environment! </p>


        <div class="row col-md-12">
          <div class="col-lg-4 col-md-12">
            <img src={Image} class="img-fluid" id="about-me-img" alt=""></img>
          </div>
          <div class="col-lg-8 col-md-12 content" data-aos="fade-left">
            <h3><strong>Full Stack Web Developer</strong></h3>
            <p class="fst-italic">
                Stack: 
            </p>
            <ul>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>MongoDB</li>
              <li>ExpressJS</li>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>MySQL</li>
            </ul>

            <p>
              If you have any further questions about myself or my experience feel free to <a href="#contact-me">Contact Me</a> or look over my <a href="#resume"> Resume</a>
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}