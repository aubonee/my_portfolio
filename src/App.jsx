
import Nav from './components/shared/navbar/Nav'
import Footer from './components/shared/footer/Footer'
import Banner from './components/hero/banner/Banner'
import AboutMe from './components/aboutme/AboutMe'

import ContactMe from './components/contact/ContactMe'
import Progress from './components/progress/Progress'
import Education from './components/education/Education'
import Projects from './components/projects/Projects'

function App() {


  return (
    <>
       <Nav></Nav>
    <Banner></Banner>
    <AboutMe></AboutMe>
    <Education></Education>
    <Progress></Progress>
    <Projects></Projects>
    <ContactMe></ContactMe>
    <Footer></Footer>
    </>
  )
}

export default App
