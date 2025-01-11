import React from 'react';
import Navbar from '../../components/PartyRentalsPage/Navbar';
import Footer from '../../components/Footer/Footer';

const Bars = () => {
  const barOptions = [
    {
      name: "Stainless Steel Portable Bar",
      description: "63″ L x 20″ W x 28″H\n24” Ice Bin Includes Cover. Heavy Duty Casters. Lockable Cabinet Latches.\n304 Stainless Steel Work Surface. Holds 95 lbs. of Ice.\nAccessories Not Included.",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
    {
      name: "Wine Barrel Bar With Shelving",
      description: "50″ L x 18″ W\n\nCustom made wine barrels with shelving underneath and a hardwood table top.",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
    {
      name: "2 Barrel or 3 Barrel Wine Bar",
      description: "80″ L x 30″ W\n\nSingle Barrel also available.\nFull size wine barrels with hardwood table top.",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
    {
      name: "2 Barrel or 3 Barrel Whiskey Bar",
      description: "Single Barrel also available.\nFull size whiskey barrels with hardwood table top.",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
    {
      name: "Rustic Portable Bar",
      description: "65″ L x 35.5″ W x 48.5″ H\nComes with 2 ice bins, 2 cutting boards, 1 speed rail (fits 1-liter bottles), and a durable steel shelf below for storage.\n\nAlso available in white, dark maple, and blue.",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
    {
      name: "Wooden Rustic Bar",
      description: "",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
    {
      name: "LED Bar",
      description: "62.75″ L x 34.75″ W x 50″ H\nRolls on 6 industrial strength casters and features 2 ice bins, 2 cutting boards, a speed well and a folding shelf below.\nInterchangeable acrylic panels conceal the casters and give the bar a stylish appearance.",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
    {
      name: "White Back Bar",
      description: "",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
    {
      name: "Chill Station",
      description: "73″ L x 31″ W x 6 1/2″ H\nHolds 75 – 100lbs of Ice – Not Included",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
    {
      name: "Coolers",
      description: "Rustic / White (165 quart capacity)",
      images: ["https://placehold.co/100x100/png", "https://placehold.co/100x100/png", "https://placehold.co/100x100/png"],
    },
  ];

  return (
    <div className="bg-custom-gradient-2 min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Bars</h1>
        <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {barOptions.map((bar, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
                <h3 className="text-xl font-semibold text-white text-center mb-2">{bar.name}</h3>
                {bar.images.map((image, imgIndex) => (
                  <img key={imgIndex} src={image} alt={bar.name} className="mb-2 w-24 h-24 object-cover" />
                ))}
                <p className="text-gray-300 text-center">{bar.description.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Bars;
