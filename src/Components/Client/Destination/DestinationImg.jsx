import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";


const destinations = [
 { id: 1, title: 'Anuradhapura', image: '/Destination/anuradapura.jpg', description: 'Ancient city with historic temples and ruins.' },
  { id: 2, title: 'Yala National Park', image: '/Destination/des_yala.jpg', description: 'Wildlife sanctuary home to leopards and elephants.' },
  { id: 3, title: 'Bentota', image: '/Destination/Bentota.jpg', description: 'Beautiful beach town with water sports and resorts.' },
  { id: 4, title: 'Sigiriya', image: '/Destination/Sigiriya.jpg', description: 'Historic rock fortress and UNESCO World Heritage site.' },
  { id: 5, title: 'Udawalawe National Park', image: '/Destination/udawalawe.jpg', description: 'Safari destination famous for elephants.' },
  { id: 6, title: 'Dambulla', image: '/Destination/Dambulla.jpg', description: 'Cave temple complex with ancient murals.' },
  { id: 7, title: 'Galle', image: '/Destination/galle.jpg', description: 'Colonial city with fort, lighthouse, and beaches.' },
  { id: 8, title: 'Elle', image: '/Destination/elle.jpg', description: 'Scenic town with tea plantations and hiking trails.' },
  { id: 9, title: 'Colombo', image: '/Destination/colombo.jpg', description: 'Vibrant capital city with culture and nightlife.' },
  { id: 10, title: 'Nuwara Eliya', image: '/Destination/nuwara_eliya.jpg', description: 'Hill country town surrounded by tea estates.' },
  { id: 11, title: 'Jaffna', image: '/Destination/jaffna.jpg', description: 'Northern city with rich Tamil culture and temples.' },
  { id: 12, title: 'Arugam Bay', image: '/Destination/arugambay.jpg', description: 'World-class surfing beach with laid-back vibes.' },
  { id: 13, title: 'Kandy', image: '/Destination/Kandy.jpeg', description: 'Historic city with the sacred Temple of the Tooth.' },
  { id: 14, title: 'Mirissa', image: '/Destination/mirrisa.jpeg', description: 'Beach town famous for whale watching and nightlife.' },
  { id: 15, title: 'Unawatuna', image: '/Destination/unawatuna.jpeg', description: 'Relaxing beach with golden sands and clear water.' },
  { id: 16, title: 'Tangalle', image: '/Destination/tangalle.jpeg', description: 'Secluded beaches and calm turquoise waters.' },
  { id: 17, title: 'Negombo', image: '/Destination/negombo.jpeg', description: 'Coastal town near airport, with canals and seafood.' },
  { id: 18, title: 'Kalpitiya', image: '/Destination/kalpitiya.jpeg', description: 'Kite surfing paradise with lagoons and dolphins.' },
  { id: 19, title: 'Beruwela', image: '/Destination/Beruwela.jpeg', description: 'Beach town with resorts, diving, and coral reefs.' },
  { id: 20, title: 'Hikkaduwa', image: '/Destination/hikkaduwa.jpeg', description: 'Popular surfing and snorkeling destination.' },
  { id: 21, title: 'Trincomalee', image: '/Destination/trincomalee.jpeg', description: 'Harbor city with beaches and historic temples.' },
  { id: 22, title: 'Batticaloa', image: '/Destination/Batticalo.jpeg', description: 'Eastern coast city with lagoons and colonial history.' },
  { id: 23, title: 'Pasikudah', image: '/Destination/pasikuda.jpeg', description: 'Shallow calm waters ideal for swimming.' },
  { id: 24, title: 'Nilavali', image: '/Destination/Nilavali.jpeg', description: 'Secluded hidden beach with natural beauty.' },
  { id: 25, title: 'Habarana', image: '/Destination/Habarana.jpeg', description: 'Gateway to cultural triangle and safari parks.' },
  { id: 26, title: 'Mannar', image: '/Destination/Mannar.jpeg', description: 'Island town with birdwatching and historical forts.' },
  { id: 27, title: 'Point Pedro', image: '/Destination/PointPedro.jpeg', description: 'Northern tip of Sri Lanka with coastal charm.' },
  { id: 28, title: 'Polonnaruwa', image: '/Destination/Polonnaruwa.jpeg', description: 'Ancient city with archaeological ruins.' },
  { id: 29, title: 'Rawana Falls', image: '/Destination/RavanaFalls.jpeg', description: 'Famous waterfall with lush surroundings.' },
  { id: 30, title: 'Mihintale', image: '/Destination/Mihinthala.jpeg', description: 'Sacred Buddhist site atop a hill.' },
  { id: 31, title: 'Ridigala', image: '/Destination/Ridigala.jpeg', description: 'Mountain range with ancient ruins and trails.' },
  { id: 32, title: 'Riverston', image: '/Destination/Riverstone.jpeg', description: 'Hiking and nature hotspot with panoramic views.' },
  { id: 33, title: 'Ravana Cave', image:'/Destination/RavanaCave.jpeg', description: 'Historical cave associated with the Ramayana epic.' },
  { id: 34, title: 'Seetha Amman Temple', image:'/Destination/SeethaTemple.jpeg', description: 'Temple dedicated to Seetha from the Ramayana.' },
  { id: 35, title: 'Hakgala Botanical Garden', image:'/Destination/BotanicalGarden.jpeg', description: 'Lush garden with exotic plants and scenic views.' },
  { id: 36, title: 'Divurumpola Temple', image:'/Destination/DivurumpolaTemple.jpeg', description: 'Ancient temple with cultural significance.' },
  { id: 37, title: 'Rumassala Hill', image:'/images/RumasalHill.jpeg', description: 'Scenic hill with mystical legends and panoramic views.' },
];


const DestinationSection = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleSeeMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + 4, destinations.length)
    );
  };

  return (
    <section className="py-16 mb-[80px] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className=" text-2xl md:text-7xl  font-extrabold text-gray-800 mb-20">
          Explore Sri Lanka
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {destinations.slice(0, visibleCount).map((dest) => (
  <Link
    key={dest.id}
    to={`/destination/${dest.id}`} // Change to your actual route
    className="relative w-full h-[400px] [perspective:1000px] group block"
  >
    <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:[transform:rotateY(180deg)]">

      {/* Front Side */}
      <div className="absolute inset-0 rounded-xl overflow-hidden shadow-md [backface-visibility:hidden]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${dest.image})` }}
        ></div>
        <div className="absolute inset-0 bg-black/25"></div>
        <h3 className="absolute bottom-5 left-5 text-white text-2xl font-semibold">
          {dest.title}
        </h3>
      </div>

      {/* Back Side - same image */}
      <div
        className="absolute inset-0 rounded-xl overflow-hidden shadow-md [backface-visibility:hidden] rotate-y-180 flex flex-col justify-center items-center text-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${dest.image})` }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4">
          <h3 className="text-2xl font-bold mb-3 text-white">{dest.title}</h3>
          <p className="text-gray-200 text-base mb-5">{dest.description}</p>
          <div className="flex items-center gap-3 font-medium text-[15px] text-white hover:underline">
            Discover More
            <span className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center">
              <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </div>

    </div>
  </Link>
))}
        </div>

        {/* "See More" Button */}
        {visibleCount < destinations.length && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleSeeMore}
              className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition"
            >
              SEE MORE
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DestinationSection;
