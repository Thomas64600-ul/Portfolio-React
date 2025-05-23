import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import About from '../components/about/About'
import Skills from '../components/skills/Skills'
import Experience from '../components/experience/Experience'
import Projet from '../components/projet/Projet'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <About/>
    <Skills/>
    <Experience/>
    <Projet/>
    <Contact/>
    <Footer/>
    
    </>
  )
}

export default Home