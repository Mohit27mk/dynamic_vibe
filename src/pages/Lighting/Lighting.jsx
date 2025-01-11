import React from 'react'
import Navbar from '../../components/PartyRentalsPage/Navbar';
import Footer from '../../components/Footer/Footer';

const Lighting = () => {
  const lightingOptions = [
    { name: "25′ Globe Lighting", image: "https://placehold.co/100x100/png" },
    { name: "High Bay Lighting", image: "https://placehold.co/100x100/png" },
    { name: "Bistro Lighting Perimeter", image: "https://placehold.co/100x100/png" },
    { name: "Bistro Lighting Package", image: "https://placehold.co/100x100/png" },
    { name: "Crystal Chandelier", image: "https://placehold.co/100x100/png" },
    { name: "Rustic Chandelier", image: "https://placehold.co/100x100/png" },
    { name: "Black Chandelier", image: "https://placehold.co/100x100/png" },
    { name: "LED Ring Chandelier", image: "https://placehold.co/100x100/png" },
     { name: "Decorative Lighting", image: "https://placehold.co/100x100/png" },
    { name: "Dance Floor Light", image: "https://placehold.co/100x100/png" },
    { name: "Par Can & Uplighting", image: "https://placehold.co/100x100/png" },
    { name: "LED Tube Lighting", image: "https://placehold.co/100x100/png" },
  ];
  return (
    <>
      <div className="bg-custom-gradient-2 min-h-screen overflow-x-hidden">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-white mb-8">Lighting</h1>
          <section className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {lightingOptions.map((light, index) => (
                <div key={index} className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
                  <img src={light.image} alt={light.name} className="mb-2 w-24 h-24 object-cover" />
                  <h3 className="text-lg font-medium text-white text-center">{light.name}</h3>
                </div>
              ))}
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Lighting
