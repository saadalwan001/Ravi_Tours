import Navbar from "@/Components/Client/C_Navbar.jsx"
import Scroll from "@/Components/Client/A_Cover.jsx"
import AboutCover from "/About/Back.jpg"
import AboutMain from "../Components/Client/AboutUs/AboutMain"
import MissionVision from "@/Components/Client/AboutUs/MissionVision.jsx"
import GetInTouch from "../Components/Client/GetInTouch"
import Footer from "../Components/Client/Footer"



export default function AboutUs(){

    return(
    <>
    <Navbar/>
    <Scroll
    backgroundImage={AboutCover}
    title="About Us"
    subtitle= "Crafting Memorable Journeys Across Sri Lanka"
    />
    <AboutMain/>
    <MissionVision/>
    <GetInTouch/>
    <Footer/>
    </>

    )
}