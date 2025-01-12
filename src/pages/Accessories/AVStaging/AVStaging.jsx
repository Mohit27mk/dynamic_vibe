import React from 'react';
import Navbar from '../../../components/PartyRentalsPage/Navbar';
import Footer from '../../../components/Footer/Footer';
import Features from "../../../components/PartyRentalsPage/Features";

const AVStaging = () => {
  const avStagingOptions = [
    {
      name: "Free Delivery",
      description: "",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
    {
      name: "Free Setup",
      description: "",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
    {
      name: "Free Takedown",
      description: "",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
    {
      name: "Portable Staging",
      description: "",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
    {
      name: "Bluetooth Speaker",
      description: "Available in sets of 2 or 4",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
    {
      name: "DJ Boom Box Façade",
      description: "",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
     {
      name: "Podium",
      description: "",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
    {
      name: "Projector & Screen",
      description: "Compatible with wifi & Bluetooth, this projector and screen combination gives a 4K display for crisp images and presentations",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
  ];
  return (
    <>
      <div className="bg-custom-gradient-2 min-h-screen overflow-x-hidden">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-white mb-8">AV & Staging</h1>
          <section className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {avStagingOptions.map((item, index) => (
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
          <Features />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default AVStaging
