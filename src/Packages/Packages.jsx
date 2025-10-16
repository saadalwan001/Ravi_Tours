
import Navbar from "@/Components/Client/C_Navbar.jsx"
import Cover from "@/Components/Client/A_Cover.jsx"
import Pac_list from "@/Components/Client/Packages/PackageCard.jsx"
import Footer from "@/Components/Client/Footer"


//Images
import Pack_img from "/public/Packages/Cover.jpg"


export default function Packages(){
return (
    <>
    <Navbar/>
    <Cover

    backgroundImage={Pack_img}
    title="Tour Packages"
    subtitle="Your Adventure Begins Here"

    
    />


    <Pac_list/>

    <Footer/>




    
    
    </>
)
}
