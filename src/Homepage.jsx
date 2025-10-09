import React from 'react'
import Navbar from "./Components/Client/C_Navbar.jsx"
import VideoSlider from './Components/Client/VideoSlider'
import AboutUs from './Components/Client/About.jsx'
import WhyChooseUs from './Components/Client/WhyChooseUs.jsx'
import Destination from './Components/Client/Destination.jsx'


export default function Homepage() {
  return (
    <>
<Navbar/>
<VideoSlider/>
<AboutUs/>
<WhyChooseUs/>
<Destination/>
    
    </>
  )
}
