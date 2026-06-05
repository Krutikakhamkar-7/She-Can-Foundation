import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Impact from './components/Impact'
import Volunteer from './components/Volunteer'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Hero />
      <main>
        <About />
        <Impact />
        <Volunteer />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
