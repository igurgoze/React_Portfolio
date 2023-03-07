export default function Navbar() {

  return (
    <div>

      <nav >
        <div id="topNav">
          <a class="nav-link" href="#">
          </a>
          <a class="nav-link" href="#">
            <h1> Ian Gurgoze</h1>
          </a>

        </div>


        <div id="midNav">
          <a class="btn nav-link" href="#about-me">About Me</a>  |
          <a class="btn nav-link" href="#my-projects">Projects</a> |
          <a class="btn nav-link" href="#resume">Resume</a> |
          <a class="btn nav-link" href="#contact-me">Contact Me</a> |
        </div>

        <div id="bottomNav">

        <div class="flex-row" id="socialMedia">
            <a href="https://github.com/igurgoze" target="_blank" class="fa fa-github"></a>

            <a href ="mailto:kb8monkey@yahoo.com" class="fa fa-envelope"></a>

            <a href="https://www.linkedin.com/in/" target="_blank" class="fa fa-linkedin"></a>

          </div>

        </div>
      </nav>

    </div>

  )
}