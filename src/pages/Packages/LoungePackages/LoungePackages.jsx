import React from 'react';
import { Phone, Mail, MapPin, } from 'lucide-react';
import Navbar from '../../../components/PartyRentalsPage/Navbar';
import Footer from '../../../components/Footer/Footer';

const LoungePackages = () => {
  return (
    <>
      <div className='HomeContainer bg-custom-gradient-2 w-screen min-h-screen overflow-x-hidden'>
        <div>
          <Navbar />
        </div>
        <div className="min-h-screen bg-custom-gradient-2">
          {/* Hero Section */}
          <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <div className="text-center">
                <h1 className="text-5xl font-bold mb-6">Lounge Packages</h1>
                <p className="text-xl mb-8">Free Delivery • Free Setup • Free Takedown</p>
                <div className="inline-block bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg hover:bg-yellow-400 transition-colors">
                  Save $$$ On Our Lounge Packages!
                </div>
              </div>
            </div>
          </div>
          {/* Lounge Packages */}
          <div className="py-16 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">Lounge Packages</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Titanium Frame Couch",
                    details: [
                      "Titanium Frame Couch",
                      "Titanium Ottoman"
                    ]
                  },
                  {
                    title: "Starter Package",
                    details: [
                      "1 – 3 Piece Leather Couch",
                      "2 – Square Ottomans",
                      "1 – Straight Leather Bench",
                      "2 – LED Cubes",
                      "1 – Spandex Cocktail Table"
                    ]
                  },
                  {
                    title: "Titanium Starter Package",
                    details: [
                      "1 – Titanium 3 Piece Couch",
                      "2 – Titanium Ottomans",
                      "1 – LED Coffee Table",
                      "2 – LED Cubes",
                      "2 – LED Spandex Cocktail Tables"
                    ]
                  },
                  {
                    title: "Basic Light Up Package",
                    details: [
                      "1 – 3 Piece Leather Couch",
                      "2 – Square Ottomans",
                      "4 – LED Cubes",
                      "4 – LED Spandex Cocktail Tables",
                      "8 – Ghost Stools"
                    ]
                  },
                  {
                    title: "Basic Leather Package",
                    details: [
                      "2 – 3 Piece Leather Couches",
                      "3 – Square Ottomans",
                      "2 – Straight Leather Benches",
                      "2 – LED Spandex Cocktail Tables",
                      "4 – Ghost Stools"
                    ]
                  },
                  {
                    title: "High Back Package",
                    details: [
                      "1 – 3 Piece High Back Couch",
                      "2 – Round Ottomans",
                      "2 – Straight Leather Benches",
                      "4 – LED Cubes",
                      "2 – LED Spandex Cocktail Tables",
                      "4 – Ghost Stools"
                    ]
                  },
                  {
                    title: "Outdoor Poolside Package",
                    details: [
                      "1 – Cabana with White Wood Floor",
                      "2 – Square Ottomans",
                      "1 – Straight Leather Bench",
                      "1 – 7 Piece Wicker Couch Set"
                    ]
                  },
                  {
                    title: "Premium Light Up Package",
                    details: [
                      "2 – 3 Piece Leather Couch",
                      "4 – Square Ottomans",
                      "2 – Straight Leather Benches",
                      "8 – LED Cubes",
                      "2 – LED Coffee Tables",
                      "8 – LED Spandex Cocktail Tables",
                      "16 – Ghost Stools"
                    ]
                  },
                  {
                    title: "Premium Leather Package",
                    details: [
                      "2 – Titanium 3 Piece Couches",
                      "2 – Titanium Ottomans",
                      "2 – Round Ottomans",
                      "1 – 4 Piece Pie with Square Ottoman",
                      "6 – LED Cubes",
                      "6 – LED Spandex Cocktail Tables",
                      "12 – Ghost Stools"
                    ]
                  }
                ].map((packageInfo, idx) => (
                  <div key={ idx} className="bg-gray-900 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-white">{packageInfo.title}</h3>
                    <ul className="list-disc list-inside text-gray-300">
                      {packageInfo.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="text-center mt-4 text-gray-400">We are a dedicated team ready to serve you. Our quality of work and commitment, along with excellent pricing, has set us apart from the competition.</p>
              <div className="text-center mt-8">
                <a href="#contact" className="inline-flex items-center bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
                  Get A Rental Quote
                </a>
              </div>
            </div>
          </div>
          {/* Contact Section */}
          <div id="contact" className="py-16 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">Contact Us</h2>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <a href="tel:+1234567890" className="flex items-center gap-3 text-xl text-gray-300 hover:text-blue-400">
                  <Phone className="w-6 h-6" />
                  (123) 456-7890
                </a>
                <a href="mailto:info@partyrentals.com" className="flex items-center gap-3 text-xl text-gray-300 hover:text-blue-400">
                  <Mail className="w-6 h-6" />
                  info@partyrentals.com
                </a>
                <div className="flex items-center gap-3 text-xl text-gray-300">
                  <MapPin className="w-6 h-6" />
                  123 Event Street, City, ST 12345
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default LoungePackages;
