import '../styles/Resume.css'
import ResumePDF from '../assets/documents/Resume_Ian.pdf'
export default function Resume() {

  return (
    <section id="resume">
      <div class="container">
        <div class="section-title">
          <h2>
            Resume
          </h2>
        </div>

        <div class="row">

          <div class="col-6">
            <h3><u>
            Summary
            </u>
            </h3>
            <div>

              <p><i>
                Bachelors in East Asian Studies background, looking to become a Junior WebDev
              </i></p>
              <ul>
                <li>Tucson, AZ</li>
                <li>Fast-paced learner</li>
                <li>Detail orientated</li>
                <li>Background in all different types of jobs</li>
              </ul>
            </div>

            <h3><u>
              Education
            </u></h3>
            <h4>
              University of Arizona Bootcamp
            </h4>
            <p><i>
              Full Stack Web Developer from UofA Bootcamp
              <br />
              Graduating March, 2023
            </i></p>
            <ul>
              <li>HTML, CSS, JavaScript, MySQL, Express.js, React.js and MongoDB </li>

            </ul>
          </div>

          <div class="col-6">
            <h3><u>
              Work Experience
            </u></h3>

            <div>
              <p>
                2021-2022
              </p>
              <p><i>
                <b>Walgreens</b>
                <br />
                Retail Worker - Tucson, AZ
              </i></p>
              <ul>
                <li>Multitasking</li>
                <li>Fast-Paced Environment</li>
                <li>Dealing with difficult customers</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <a download href={ResumePDF}>
            <button class="btn" id="downloadButton"><i class="fa fa-download"></i><b>Download Resume</b> </button>
          </a>
        </div>

      </div>
    </section>
  )
}