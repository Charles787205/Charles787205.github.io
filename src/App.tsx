import './App.css'
import Navigation from './components/Navigation'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  )
}

export default App
