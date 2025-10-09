import React from 'react'
import Navbar from "./Components/Client/C_Navbar.jsx"
import VideoSlider from './Components/Client/VideoSlider'
import AboutUs from './Components/Client/About.jsx'
import WhyChooseUs from './Components/Client/WhyChooseUs.jsx'
import Destination from './Components/Client/Destination.jsx'
import Packages from './Components/Client/Packages.jsx'
import Gallery from './Components/Client/Gallery.jsx'
import GetInTouch from './Components/Client/GetInTouch.jsx'
import Footer from './Components/Client/Footer.jsx'


export default function Homepage() {
  return (
    <>
<Navbar/>
<VideoSlider/>
<AboutUs/>
<WhyChooseUs/>
<Destination/>
<Packages/>
<Gallery/>
<GetInTouch/>
<Footer/>

    
    </>
  )
}
