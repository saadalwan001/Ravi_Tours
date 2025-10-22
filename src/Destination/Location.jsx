import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "@/utlis/axios.js";
import Nav from "@/Components/Client/C_Navbar.jsx";
import AttractionDetailCard from "@/Components/Client/Attraction/AttractionDetailCard.jsx";
import DownSlider from "@/Components/Client/Attraction/AttractionSlider.jsx";
import Footer from "@/Components/Client/Footer.jsx";
import AttractionTourPackages from "@/Components/Client/Attraction/AttractionTourPackages.jsx";

function Location() {
  const { id } = useParams();
  const [attraction, setAttraction] = useState(null);

  useEffect(() => {
    api.get(`/attractions/${id}`)
      .then((res) => setAttraction(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!attraction) return <p className="text-center py-16">Loading...</p>;

  return (

    <div>
        <Nav />
      <AttractionDetailCard
        title={attraction.title}
        description={attraction.description}
        back_img={attraction.back_img}
      />
      <AttractionTourPackages attractionId={id}/>
      <DownSlider/>
      <Footer/>
    </div>
  );
}

export default Location;
