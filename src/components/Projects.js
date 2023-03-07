import '../styles/Project.css'
import ProjectContents from './ProjectContents'
import Project1 from '../assets/images/Project1.png'
import Project2 from '../assets/images/Project2.png'
import Project3 from '../assets/images/Project3.png'
import Project4 from '../assets/images/Project4.png'
import Project5 from '../assets/images/Project5.png'

const projects = [
  {
    name: "Couch Potato",
    description: "IMDB type app for searching movies",
    deployedLink: "https://christoph551.github.io/Couch-Potato-Assistant/",
    githubLink: "https://github.com/Christoph551/Couch-Potato-Assistant",
    image: Project1
  },
  {
    name: "Off-N-On",
    description: "A ticketing application that emulates users being able to submit questions and to be answered by a technician.",
    deployedLink: "https://limitless-castle-65696.herokuapp.com/login",
    githubLink: "https://github.com/rxtATX/OffNOn",
    image: Project2
  },
  {
    name: "Password Generator",
    description: "A simple random Password Generator",
    deployedLink: "https://igurgoze.github.io/Password-Generator/",
    githubLink: "https://github.com/igurgoze/Password-Generator",
    image: Project3
  },
  {
    name: "Trivia Game",
    description: "A Trivia game for beginner WebDev students",
    deployedLink: "https://github.com/igurgoze/Trivia-Game-IanGurgoze",
    githubLink: "https://igurgoze.github.io/Trivia-Game-IanGurgoze/",
    image: Project4
  },
  {
    name: "Weather Dashboard",
    description: "See the 5 day forecast for any city with this app",
    deployedLink: "https://igurgoze.github.io/Server-Side-APIs-Challenge-Weather-Dashboard/",
    githubLink: "https://github.com/igurgoze/Server-Side-APIs-Challenge-Weather-Dashboard",
    image: Project5
  }
];

export default function Projects() {

  return (
    <section id="my-projects" class="d-flex align-items-center justify-content-center">
      <div class="container">
        <div class="section-title">
          <h2>My Projects</h2>
        </div>
        <div class="container-fluid grid">
          <ProjectContents projects={projects} />
        </div>
      </div>
    </section>
  )
}