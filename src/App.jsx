import { useState,useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import Navbar from './Navbar'
import IntroCard from './IntroCard'
import Checkup from './Checkup'
import MostBookedCheckups from './MostBookedCheckups'
import Caro2 from './Caro2.jsx'
import OrgansCard from './OrgansCard.jsx'
import Whatsapp from './Whatsapp.jsx'
import NoTime from './NoTime.jsx'
import ContextCard from './ContextCard.jsx'
import TestAccordin from './TestAccordin.jsx'
import ContactCard from './ContactCard.jsx'
import WhyBlue from './WhyBlue.jsx'
import Rating from './Rating.jsx'
import TextCarousel from './TextCarousel.jsx'

function App() {
  useEffect(() =>{
    AOS.init({
      duration:800,
      offset:70,
      easing:'ease',
      once:true
    })
  },[])  

  return (
    <>
      <Navbar/>
      <IntroCard/>
      <Checkup/>
      <MostBookedCheckups/>
      <Caro2/>
      <TextCarousel/>
      <OrgansCard/>
      <Whatsapp/>
      <NoTime/>
      <WhyBlue/>
      <Rating/>
      <ContextCard/>
      <TestAccordin/>
      <ContactCard/>
    </>
  )
}

export default App
