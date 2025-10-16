 import Navbar from "../Components/Client/C_Navbar";
 import Scroll from "@/Components/Client/A_Cover.jsx"
 import Destination_img from "@/Components/Client/Destination/DestinationImg.jsx"
 import Footer from "../Components/Client/Footer";


 //Images
 import Des_img from "/Destination/Main.jpg"

export default function Destination(){
    return(
        <>
        <Navbar/>
        <Scroll
        backgroundImage={Des_img}
        title="Destinations"
        subtitle="Explore, Relax, and Immerse Yourself in Our Top Destinations"


        
        />
        <Destination_img/>
        <Footer/>

        </>
    )
}