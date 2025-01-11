import React from 'react';
import Navbar from '../../components/PartyRentalsPage/Navbar';
import Footer from '../../components/Footer/Footer';

const Linens = () => {
  const linenColors = [
    { name: "White", color: "white", textColor: "black" },
    { name: "Ivory", color: "ivory", textColor: "black" },
    { name: "Camel", color: "tan", textColor: "black" },
    { name: "Yellow", color: "yellow", textColor: "black" },
    { name: "Orange", color: "orange", textColor: "black" },
    { name: "Red", color: "red", textColor: "white" },
    { name: "Burgundy", color: "maroon", textColor: "white" },
    { name: "Pink", color: "pink", textColor: "black" },
    { name: "Fuscia", color: "fuchsia", textColor: "white" },
    { name: "Lilac", color: "lavender", textColor: "black" },
    { name: "Purple", color: "purple", textColor: "white" },
    { name: "Light Blue", color: "lightblue", textColor: "black" },
    { name: "Turquoise", color: "turquoise", textColor: "black" },
    { name: "Royal Blue", color: "royalblue", textColor: "white" },
    { name: "Navy Blue", color: "navy", textColor: "white" },
    { name: "Mint", color: "mediumaquamarine", textColor: "black" },
    { name: "Moss Green", color: "olivedrab", textColor: "white" },
    { name: "Hunter", color: "darkgreen", textColor: "white" },
    { name: "Brown", color: "brown", textColor: "white" },
    { name: "Black", color: "black", textColor: "white" },
  ];
  return (
    <>
      <div className="bg-custom-gradient-2 min-h-screen overflow-x-hidden">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-white mb-8">Linen Colors</h1>
          <section className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {linenColors.map((linen, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-gray-900">
                  <div
                    className="w-10 h-10 rounded-md border border-gray-700"
                    style={{ backgroundColor: linen.color, color: linen.textColor }}
                  >
                  </div>
                  <span className="text-white">{linen.name}</span>
                </div>
              ))}
            </div>
          </section>
          <section className="text-gray-400">
            <h2 className="text-2xl font-semibold text-white mb-4">Disclaimer</h2>
            <p className="mb-2">
              We partner with third-party linen vendors. Keep the following in mind when selecting your linen color:
            </p>
            <ul className="list-disc list-inside">
              <li>Actual linen colors will vary based on your computer monitor and how you see colors.</li>
              <li>Sample swatches are available for a better representation. However, there still may be minor color variations from your actual order.</li>
              <li>Regardless of how gentle the laundering process is, linen color shading can be impacted. Our vendors do their best to provide appropriate shading for your event. Long Island Tent & Party Rentals will not assume responsibility for any off-color shading.</li>
              <li>Back up colors must be selected in the event 1st choice is unavailable.</li>
            </ul>
          </section>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Linens
