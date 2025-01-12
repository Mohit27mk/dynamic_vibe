import React from 'react'
import Navbar from '../../../components/PartyRentalsPage/Navbar';
import Footer from '../../../components/Footer/Footer';

const BackdropsAndDraping = () => {
  const backdropOptions = [
    {
      name: "Pole Covers",
      description: "",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
    {
      name: "Custom Leg Draping",
      description: "",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
     {
      name: "Custom Wall Draping",
      description: "",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
    {
      name: "Hedge Wall",
      description: "",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
    {
      name: "Custom Backdrops",
      description: "",
       images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
     {
      name: "Standard Backdrops",
      description: "",
       images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
    {
      name: "Custom Flower Arch",
      description: "",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
     {
      name: "Standard Flower Arch",
      description: "",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
    {
      name: "Custom White Flower Wall",
      description: "",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
     {
      name: "Gold Ornate Backdrop",
      description: "",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
     {
      name: "Champagne Wall",
      description: "",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
     {
      name: "Rustic Wall",
      description: "",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
     {
      name: "Twinkle Lights",
      description: "",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
     {
      name: "LED Photo Booth",
      description: "",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
     {
      name: "Cabanas",
      description: "",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
  ];
  return (
    <>
      <div className="bg-custom-gradient-2 min-h-screen overflow-x-hidden">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
              <h1 className="text-4xl font-bold text-center text-white mb-8">Backdrops and Draping</h1>
              <section className="mb-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                  {backdropOptions.map((backdrop, index) => (
                    <div key={index} className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
                      <h3 className="text-xl font-semibold text-white text-center mb-2">{backdrop.name}</h3>
                      {backdrop.images.map((image, imgIndex) => (
                        <img key={imgIndex} src={image} alt={backdrop.name} className="mb-2 w-24 h-24 object-cover" />
                      ))}
                      <p className="text-gray-300 text-center">{backdrop.description.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}</p>
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

export default BackdropsAndDraping
