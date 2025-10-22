import React from "react";
import Navbar from "@/Components/Client/C_Navbar.jsx";
import Scroll from "@/Components/Client/A_Cover.jsx";
import ContactForm from "@/Components/Client/Contact/ContactForm.jsx";

import Image from "/Contact/CoverImg.jpg";

export default function Contact() {
  return (
    <>
      <Navbar />
      <Scroll
        backgroundImage={Image}
        title="Get In Touch With Us"
        subtitle="Let’s plan your dream Trip together!"
      />
      <ContactForm />
    </>
  );
}
