import React from 'react';
import Navbar from '../../../components/PartyRentalsPage/Navbar';
import Footer from '../../../components/Footer/Footer';

const TablesAndChairs = () => {
  const tableData = [
    { name: "60” round table*", image: "https://placehold.co/100x100/png", },
    { name: "72” round table*", image: "https://placehold.co/100x100/png", },
    { name: "48” round table*", image: "https://placehold.co/100x100/png", },
    { name: "36” Round Table", image: "https://placehold.co/100x100/png", },
    { name: "36” Round Cocktail Table", image: "https://placehold.co/100x100/png", },
    { name: "30” Round Rustic Cocktail Table", image: "https://placehold.co/100x100/png", },
    { name: "30” Square Rustic Cocktail table", image: "https://placehold.co/100x100/png", },
    { name: "Wine Barrel Cocktail Table", image: "https://placehold.co/100x100/png", },
    { name: "72” banquet*", image: "https://placehold.co/100x100/png", },
    { name: "Kids Banquet Table Available", image: "https://placehold.co/100x100/png", },
    { name: "96” banquet*", image: "https://placehold.co/100x100/png", },
    { name: "72” l x 30” w fruitwood banquet", image: "https://placehold.co/100x100/png", },
    { name: "Serpentine Table", image: "https://placehold.co/100x100/png", },
    { name: "96” L x 40” w farm table", image: "https://placehold.co/100x100/png", },
    { name: "96” L x 40” w white farm table", image: "https://placehold.co/100x100/png", },
    { name: "72” l x 36” w farm table", image: "https://placehold.co/100x100/png", },
    { name: "60″L x 28″W sweetheart table", image: "https://placehold.co/100x100/png", },
    { name: "LED Spandex Cocktail Table", image: "https://placehold.co/100x100/png", },
    { name: "White Acrylic Cocktail tables", image: "https://placehold.co/100x100/png", },
    { name: "Acrylic Coffee Tables", image: "https://placehold.co/100x100/png", },
    { name: "LED Cube", image: "https://placehold.co/100x100/png", },
    { name: "Colored Farm Tables", description: "Available in 6ft – 72” L x 36” W, and 8ft – 96” L x 40” W", image: "https://placehold.co/100x100/png", },
  ];

  const foldingChairData = [
    { name: "Deluxe Folding", image: "https://placehold.co/100x100/png", },
    { name: "Garden Chair", image: "https://placehold.co/100x100/png", },
    { name: "Fruitwood Ivory Seat", image: "https://placehold.co/100x100/png", },
    { name: "Kids Chair", image: "https://placehold.co/100x100/png", },
  ];

  const chiavariChairData = [
    { name: "gold chiavari chair", image: "https://placehold.co/100x100/png", },
    { name: "white chiavari chair", image: "https://placehold.co/100x100/png", },
    { name: "clear chiavari chair", image: "https://placehold.co/100x100/png", },
    { name: "black chiavari chair", image: "https://placehold.co/100x100/png", },
    { name: "silver chiavari chair", image: "https://placehold.co/100x100/png", },
    { name: "Distressed White Chiavari Chair", image: "https://placehold.co/100x100/png", },
  ];

  const crossbackChairData = [
    { name: "driftwood cross back chair", image: "https://placehold.co/100x100/png", },
    { name: "chestnut cross back chair", image: "https://placehold.co/100x100/png", },
    { name: "white cross back chair", image: "https://placehold.co/100x100/png", },
  ];

  const barstoolData = [
    { name: "Black Barstool", image: "https://placehold.co/100x100/png", },
    { name: "Ghost Stool", image: "https://placehold.co/100x100/png", },
    { name: "Gold Stool", image: "https://placehold.co/100x100/png", },
    { name: "white chiavari barstool", image: "https://placehold.co/100x100/png", },
    { name: "clear chiavari barstool", image: "https://placehold.co/100x100/png", },
    { name: "White swivel Barstool", image: "https://placehold.co/100x100/png", },
  ];

  const cushionData = [
    { name: "White", image: "https://placehold.co/50x50/white/000000?text=White" },
    { name: "Ivory", image: "https://placehold.co/50x50/ivory/000000?text=Ivory" },
    { name: "Black", image: "https://placehold.co/50x50/black/ffffff?text=Black" },
    { name: "Burlap", image: "https://placehold.co/50x50/a68a63/ffffff?text=Burlap" },
  ];

  return (
    <div className="bg-custom-gradient-2 min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Tables & Chairs</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-4">Tables</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tableData.map((table, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
                <img src={table.image} alt={table.name} className="mb-2 w-24 h-24 object-cover" />
                <h3 className="text-lg font-medium text-white text-center">{table.name}</h3>
                {table.description && <p className="text-gray-400 text-center">{table.description}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-4">Folding Chairs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {foldingChairData.map((chair, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
                <img src={chair.image} alt={chair.name} className="mb-2 w-24 h-24 object-cover" />
                <h3 className="text-lg font-medium text-white text-center">{chair.name}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-4">Chiavari Chairs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {chiavariChairData.map((chair, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
                <img src={chair.image} alt={chair.name} className="mb-2 w-24 h-24 object-cover" />
                <h3 className="text-lg font-medium text-white text-center">{chair.name}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-4">Crossback Chairs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {crossbackChairData.map((chair, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
                <img src={chair.image} alt={chair.name} className="mb-2 w-24 h-24 object-cover" />
                <h3 className="text-lg font-medium text-white text-center">{chair.name}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-4">Barstools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {barstoolData.map((barstool, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
                <img src={barstool.image} alt={barstool.name} className="mb-2 w-24 h-24 object-cover" />
                <h3 className="text-lg font-medium text-white text-center">{barstool.name}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-4">Cushions</h2>
          <div className="flex flex-wrap gap-4">
            {cushionData.map((cushion, index) => (
              <div key={index} className="bg-gray-900 p-2 rounded-md text-white flex items-center">
                <img src={cushion.image} alt={cushion.name} className="mr-2 w-8 h-8 object-cover" />
                <span>{cushion.name}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 mt-4">Cushions for the Chiavari chairs are available in white, black and ivory.</p>
          <p className="text-gray-400">Cushions for the Crossback chairs are available in burlap also.</p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TablesAndChairs;
