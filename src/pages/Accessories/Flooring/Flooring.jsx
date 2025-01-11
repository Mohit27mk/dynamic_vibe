import React from 'react';
import Navbar from '../../components/PartyRentalsPage/Navbar';
import Footer from '../../components/Footer/Footer';
import Features from '../../components/PartyRentalsPage/Features';

const Flooring = () => {
  const flooringOptions = [
    { name: "Oak Parquet Dance Floor", image: "https://placehold.co/100x100/png" },
    { name: "White Dance Floor", image: "https://placehold.co/100x100/png" },
    { name: "White oak Dance Floor", image: "https://placehold.co/100x100/png" },
    { name: "Light Maple Dance Floor", image: "https://placehold.co/100x100/png" },
    { name: "Dark Maple Dance Floor", image: "https://placehold.co/100x100/png" },
    { name: "Sandalwood Dance Floor", image: "https://placehold.co/100x100/png" },
    { name: "Smoked Oak Dance Floor", image: "https://placehold.co/100x100/png" },
    { name: "black Dance Floor", image: "https://placehold.co/100x100/png" },
    { name: "Light & Dark Maple Checker Dance Floor", image: "https://placehold.co/100x100/png" },
    { name: "Black & White Checker Dance Floor", image: "https://placehold.co/100x100/png" },
    { name: "FastDeck Portable Flooring", image: "https://placehold.co/100x100/png" },
    { name: "Astroturf Floor", image: "https://placehold.co/100x100/png" },
  ];

  const floorSizes = [
    { dancers: 16, size: "10x10", sqft: 100 },
    { dancers: 20, size: "10x12", sqft: 120 },
    { dancers: 22, size: "10x14", sqft: 140 },
    { dancers: 24, size: "12x12", sqft: 144 },
    { dancers: 26, size: "10x16", sqft: 160 },
    { dancers: 28, size: "12x14", sqft: 168 },
    { dancers: 30, size: "10x18", sqft: 180 },
    { dancers: 32, size: "10x20", sqft: 200 },
    { dancers: 32, size: "12x16", sqft: 192 },
    { dancers: 32, size: "14x14", sqft: 196 },
    { dancers: 36, size: "12x18", sqft: 216 },
    { dancers: 36, size: "14x16", sqft: 224 },
    { dancers: 40, size: "12x20", sqft: 240 },
    { dancers: 42, size: "14x18", sqft: 252 },
    { dancers: 42, size: "16x16", sqft: 256 },
    { dancers: 46, size: "14x20", sqft: 280 },
    { dancers: 48, size: "16x18", sqft: 288 },
    { dancers: 52, size: "16x20", sqft: 320 },
    { dancers: 64, size: "16x24", sqft: 384 },
    { dancers: 66, size: "20x20", sqft: 400 },
    { dancers: 74, size: "16x28", sqft: 448 },
    { dancers: 80, size: "20x24", sqft: 480 },
    { dancers: 92, size: "20x28", sqft: 560 },
    { dancers: 96, size: "24x24", sqft: 576 },
    { dancers: 106, size: "20x32", sqft: 640 },
    { dancers: 112, size: "24x28", sqft: 672 },
    { dancers: 128, size: "24x32", sqft: 768 },
    { dancers: 148, size: "28x32", sqft: 896 },
    { dancers: 150, size: "30x30", sqft: 900 },
    { dancers: 170, size: "30x34", sqft: 1020 },
    { dancers: 216, size: "36x36", sqft: 1296 },
    { dancers: 240, size: "36x40", sqft: 1440 },
     { dancers: 266, size: "40x40", sqft: 1600 },
  ];
  return (
    <>
      <div className="bg-custom-gradient-2 min-h-screen overflow-x-hidden">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-white mb-8">Flooring</h1>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-white mb-4">Flooring Options</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {flooringOptions.map((floor, index) => (
                <div key={index} className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
                  <img src={floor.image} alt={floor.name} className="mb-2 w-24 h-24 object-cover" />
                  <h3 className="text-lg font-medium text-white text-center">{floor.name}</h3>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-white mb-4">Floor Sizes</h2>
            <div className="py-16 bg-gray-900">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-gray-800 border border-gray-700">
                    <thead className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
                      <tr>
                        <th className="py-3 px-4 text-center border-r border-gray-700">Number of Dancers</th>
                        <th className="py-3 px-4 text-center border-r border-gray-700">Floor Size</th>
                        <th className="py-3 px-4 text-center">Square Footage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {floorSizes.map((size, index) => (
                        <tr key={index} className="hover:bg-gray-700 text-gray-300">
                          <td className="py-3 px-4 text-center border-r border-gray-700">{size.dancers}</td>
                          <td className="py-3 px-4 text-center border-r border-gray-700">{size.size}</td>
                          <td className="py-3 px-4 text-center">{size.sqft}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-center mt-4 text-gray-400">* Additional sizes and configurations available upon request</p>
              </div>
            </div>
          </section>
          <Features />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Flooring
