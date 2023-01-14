import React from 'react'
import Header from './component/header/header'
import Testimonials from './component/testimonials/testimonials'
import Service from './component/service/service'
import Portfolio from './component/portfolio/portfolio'
import Footer from './component/footer/footer'
import Experience from './component/experience/experience'
import About from './component/about/about'
import Contact from './component/contact/contact'
import Nav from './component/nav/nav'



const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/> 
    <Service/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/> 
    </>

    
  )
}

export default App
