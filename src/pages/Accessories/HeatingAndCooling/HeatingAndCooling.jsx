import React from 'react'
import Navbar from '../../../components/PartyRentalsPage/Navbar';
import Footer from '../../../components/Footer/Footer';

const HeatingAndCooling = () => {
  const heatingCoolingOptions = [
    {
      name: "Commercial Heaters",
      description: "80,000 or 170,000 BTUs Propane Powered\nUses 40lb or 100lb Tank. (Tank Not Included)\n\nPropane is not supplied with ANY heater. Small commercial heaters require at least a 40lb propane tank & large commercial heaters require at least an 80-100lb propane tank. We recommend Clinton Welding Supply: 516-334-1377 for our Long Island customers & Air Weld Supply: 718-385-3517 for our Queens/Brooklyn customers.",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
    {
      name: "Air Cooler",
      description: "This 32 Gal. Air Cooler will provide cooling for up to 1,200 square feet! The 32 gallon tank lasts an average of 8-10 hours, and features an automatic shut-off sensor on the pump when the water is low. It cools the air using only water, no compressor or chemicals, for up to 10-25 degrees of relief!",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
    {
      name: "Fans",
      description: "Extension Cords Not Included.",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
    {
      name: "Portable Generator",
      description: "5,500 Watts. Gasoline Powered\nManual Start Portable Generator",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
     {
      name: "Extension Cords",
      description: "",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
  ];
  return (
    <>
      <div className="bg-custom-gradient-2 min-h-screen overflow-x-hidden">
        <Navbar />
        <div className="bg-custom-gradient-2 min-h-screen overflow-x-hidden">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center text-white mb-8">Heating & Cooling</h1>
            <section className="mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {heatingCoolingOptions.map((item, index) => (
                  <div key={index} className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
                    <h3 className="text-xl font-semibold text-white text-center mb-2">{item.name}</h3>
                    {item.images.map((image, imgIndex) => (
                      <img key={imgIndex} src={image} alt={item.name} className="mb-2 w-24 h-24 object-cover" />
                    ))}
                    <p className="text-gray-300 text-center">{item.description.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default HeatingAndCooling
