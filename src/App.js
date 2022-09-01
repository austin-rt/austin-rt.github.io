import { useEffect, useRef } from 'react'
import './index.css'

import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])

  const home = useRef(null)
  const about = useRef(null)
  const portfolio = useRef(null)
  const experience = useRef(null)
  const contact = useRef(null)

  const scrollTo = (section) => {
    window.scrollTo({
      top: section.current.offsetTop,
      behavior: 'smooth'
    })
  }
  return (
    <>
      <Header
        home={home}
        portfolio={portfolio}
        contact={contact}
        scrollTo={scrollTo}
      />
      <Nav
        home={home}
        about={about}
        portfolio={portfolio}
        experience={experience}
        contact={contact}
        scrollTo={scrollTo}
      />
      <About about={about} contact={contact} scrollTo={scrollTo} />
      <Portfolio portfolio={portfolio} />
      <Experience experience={experience} />
      <Contact contact={contact} />
      <Footer
        home={home}
        about={about}
        portfolio={portfolio}
        experience={experience}
        contact={contact}
        scrollTo={scrollTo}
      />
    </>
  )
}

export default App
