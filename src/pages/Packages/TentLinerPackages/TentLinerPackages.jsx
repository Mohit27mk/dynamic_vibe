import React from 'react'
import { Phone, Mail, MapPin, Calendar, ArrowRight } from 'lucide-react';
import Navbar from '../../../components/PartyRentalsPage/Navbar';
import Footer from '../../../components/Footer/Footer';

const TentLinerPackages = () => {
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
                <h1 className="text-5xl font-bold mb-6">Tent & Liner Packages</h1>
                <p className="text-xl mb-8">Free Delivery • Free Setup • Free Takedown</p>
                <div className="inline-block bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg hover:bg-yellow-400 transition-colors">
                  Save $$$ On Our Tent Packages!
                </div>
              </div>
            </div>
            
            {/* Special Offer Banner */}
            <div className="bg-red-900 py-3">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <span className="font-bold">JANUARY SPECIAL:</span> $100 OFF ANY TENT PACKAGE + Free Delivery & Setup
              </div>
            </div>
          </div>
          {/* Tent Packages */}
          <div className="py-16 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">Tent Packages</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Up to 50 Guests – Standard",
                    details: [
                      "20 x 40 White Frame Tent",
                      "2 – Sets of 25ft Globe Lights",
                      "6 – 60″ Round Tables",
                      "1 – 72″ Banquet Table",
                      "50 – White Standard Deluxe Folding Chairs",
                      "12 x 12 Oak Parquet Dance Floor"
                    ]
                  },
                  {
                    title: "Up to 50 Guests – Premium",
                    details: [
                      "20 x 40 White Frame Tent",
                      "Tent Liner & Pole Covers",
                      "Bistro Lighting Package",
                      "2 Rustic Chandeliers",
                      "6 – 60″ Round Tables",
                      "1 – 72″ Banquet Table",
                      "50 – White Garden Chairs w/Padded Seat",
                      "12 x 12 Choice of Premium Dance Floor"
                    ]
                  },
                  {
                    title: "Up to 80 Guests – Standard",
                    details: [
                      "20 x 60 or 30 x 40 White Frame Tent",
                      "3 – Sets of 25ft Globe Lights",
                      "8 – 60″ Round Tables",
                      "2 – 72″ Banquet Tables",
                      "72 – White Standard Deluxe Folding Chairs",
                      "16 x 16 Oak Parquet Dance Floor"
                    ]
                  },
                  {
                    title: "Up to 80 Guests – Premium",
                    details: [
                      "20 x 60 or 30 x 40 White Frame Tent",
                      "Tent Liner & Pole Covers",
                      "Bistro Lighting Package",
                      "2 Rustic Chandeliers",
                      "8 – 60″ Round Tables",
                      "2 – 72″ Banquet Table",
                      "72 – White Garden Chairs w/Padded Seat",
                      "15 x 15 Choice of Premium Dance Floor"
                    ]
                  },
                  {
                    title: "Up to 100 Guests – Standard",
                    details: [
                      "30 x 60 or 40 x 40 White Frame Tent",
                      "4 – Sets of 25ft Globe Lights",
                      "12 – 60″ Round Tables",
                      "3 – 72″ Banquet Tables",
                      "100 – White Standard Deluxe Folding Chairs",
                      "18 x 18 Oak Parquet Dance Floor"
                    ]
                  },
                  {
                    title: "Up to 100 Guests – Premium",
                    details: [
                      "30 x 60 or 40 x 40 White Frame Tent",
                      "Tent Liner & Pole Covers",
                      "Bistro Lighting Package",
                      "Rustic Chandeliers (40 x 40 – 1) (30 x 60 – 2)",
                      "12 – 60″ Round Tables",
                      "3 – 72″ Banquet Tables",
                      "100 – White Garden Chairs w/Padded Seat",
                      "18 x 18 Choice of Premium Dance Floor"
                    ]
                  },
                  {
                    title: "Up to 125 People – Standard",
                    details: [
                      "30 x 70 or 40 x 50 White Frame Tent",
                      "5 – Sets of 25ft Globe Lights",
                      "15 – 60″ Round Tables",
                      "3 – 72″ Banquet Table",
                      "125 – Standard Deluxe Folding Chairs",
                      "20 x 20 Oak Parquet Dance Floor"
                    ]
                  },
                  {
                    title: "Up to 125 People – Premium",
                    details: [
                      "30 x 70 or 40 x 50 White Frame Tent",
                      "Tent Liner & Pole Covers",
                      "Bistro Lighting Package",
                      "2 Rustic Chandeliers",
                      "15 – 60″ Round Tables",
                      "3 – 72″ Banquet Table",
                      "125 – White Garden Chairs w/Padded Seat",
                      "21 x 21 Choice of Premium Dance Floor"
                    ]
                  },
                  {
                    title: "Up to 150 Guests – Standard",
                    details: [
                      "30 x 80 or 40 x 60 White Frame Tent",
                      "6 – Sets of 25ft Globe Lights",
                      "18 – 60″ Round Tables",
                      "4 – 72″ Banquet Tables",
                      "150 – White Standard Deluxe Folding Chairs",
                      "24 x 24 Oak Parquet Dance Floor"
                    ]
                  },
                  {
                    title: "Up to 150 Guests – Premium",
                    details: [
                      "30 x 80 or 40 x 60 White Frame Tent",
                      "Tent Liner & Pole Covers",
                      "Bistro Lighting Package",
                      "2 Rustic Chandeliers",
                      "18 – 60″ Round Tables",
                      "4 – 72″ Banquet Tables",
                      "150 – White Garden Chairs w/Padded Seat",
                      "24 x 24 Choice of Premium Dance Floor"
                    ]
                  },
                  {
                    title: "Up to 200 Guests – Standard",
                    details: [
                      "30 x 100 or 40 x 80 White Frame Tent",
                      "8 – Sets of 25ft Globe Lights",
                      "25 – 60″ Round Tables",
                      "4 – 72″ Banquet Tables",
                      "200 – White Standard Deluxe Folding Chairs",
                      "26 x 26 Oak Parquet Dance Floor"
                    ]
                  },
                  {
                    title: "Up to 200 Guests – Premium",
                    details: [
                      "30 x 100 or 40 x 80 White Frame Tent",
                      "Tent Liner & Pole Covers",
                      "Bistro Lighting Package",
                      "3 Rustic Chandeliers",
                      "25 – 60″ Round Tables",
                      "4 – 72″ Banquet Tables",
                      "200 – White Garden Chairs w/Padded Seat",
                      "27 x 27 Choice of Premium Dance Floor"
                    ]
                  },
                  {
                    title: "Up to 250 Guests – Standard",
                    details: [
                      "40 x 100 White Frame Tent",
                      "10 – Sets of 25ft Globe Lights",
                      "32 – 60″ Round Tables",
                      "4 – 72″ Banquet Tables",
                      "250 – White Standard Deluxe Folding Chairs",
                      "30 x 30 Oak Parquet Dance Floor"
                    ]
                  },
                  {
                    title: "Up to 250 Guests – Premium",
                    details: [
                      "40 x 100 White Frame Tent",
                      "Tent Liner & Pole Covers",
                      "Bistro Lighting Package",
                      "4 Rustic Chandeliers",
                      "32 – 60″ Round Tables",
                      "4 – 72″ Banquet Tables",
                      "250 – White Garden Chairs w/Padded Seat",
                      "30 x 30 Choice of Premium Dance Floor"
                    ]
                  }
                ].map((packageInfo, idx) => (
                  <div key={idx} className="bg-gray-900 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-white">{packageInfo.title}</h3>
                    <ul className="list-disc list-inside text-gray-300">
                      {packageInfo.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className=" text-center mt-4 text-gray-400">À la carte pricing is available upon request. All tent packages include free delivery, installation & breakdown. For an additional fee, tables & chairs can be set up.</p>
            </div>
          </div>
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-8">Get Your Rental Quote Today</h2>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <a href="#contact" className="inline-flex items-center bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
                  Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <div className="text-lg">
                  <Calendar className="inline-block mr-2 w-5 h-5" />
                  Book now for best availability
                </div>
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

export default TentLinerPackages
