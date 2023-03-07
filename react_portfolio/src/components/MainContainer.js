import Navbar from "./Navbar"
import MainBody from "./MainBody"
import Footer from "./Footer"
import Projects from './Projects'
import Resume from './Resume'

export default function MainContainer() {
  return (
    <>
      <Navbar/>
      <MainBody/>
      <Projects/>
      <Resume/>
      <Footer/>
    </>
  )
}