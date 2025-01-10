import React from 'react'
import { Phone, Mail, MapPin, Calendar, Package, Truck, Wrench, ArrowRight } from 'lucide-react';
import Navbar from '../../components/PartyRentalsPage/Navbar';
import Footer from '../../components/Footer/Footer';

const TentPackages = () => {
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
                <h1 className="text-5xl font-bold mb-6">Premium Party Tent Rentals</h1>
                <p className="text-xl mb-8">Free Delivery • Free Setup • Free Takedown</p>
                <div className="inline-block bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg hover:bg-yellow-400 transition-colors">
                  Save $$$ On Our Party Packages!
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
          {/* Features */}
          <div className="py-16 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gray-900 rounded-lg">
                  <Truck className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                  <h3 className="text-xl font-bold mb-2 text-white">Free Delivery</h3>
                  <p className="text-gray-300">We handle all transportation needs</p>
                </div>
                <div className="text-center p-6 bg-gray-900 rounded-lg">
                  <Wrench className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                  <h3 className="text-xl font-bold mb-2 text-white">Free Setup</h3>
                  <p className="text-gray-300">Professional installation included</p>
                </div>
                <div className="text-center p-6 bg-gray-900 rounded-lg">
                  <Package className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                  <h3 className="text-xl font-bold mb-2 text-white">Complete Packages</h3>
                  <p className="text-gray-300">Everything you need for your event</p>
                </div>
              </div>
            </div>
          </div>
          {/* Pricing Table */}
          <div className="py-16 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">Party Packages</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-800 border border-gray-700">
                  <thead className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">Guests</th>
                      <th className="py-3 px-4 text-left">Frame Tent Size</th>
                      <th className="py-3 px-4 text-left">5' Round Tables</th>
                      <th className="py-3 px-4 text-left">6' Banquet Tables</th>
                      <th className="py-3 px-4 text-left">Standard Chairs</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {[
                      ['20-25', '15x15', '2', '1', '20'],
                      ['20-25', '10x20', '2', '1', '20'],
                      ['24-30', '10x30', '3', '1', '24'],
                      ['30-40', '15x25', '4', '1', '32'],
                      ['50-60', '20x30', '6', '1', '50'],
                      ['70-80', '20x40', '8', '2', '72'],
                      ['90-100', '20x50', '10', '2', '90'],
                      ['100-120', '20x60', '12', '2', '100'],
                      ['150-180', '30x60', '18', '3', '144'],
                      ['200-240', '40x60', '24', '3', '192'],
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-700 text-gray-300">
                        <td className="py-3 px-4">{row[0]}</td>
                        <td className="py-3 px-4">{row[1]}</td>
                        <td className="py-3 px-4">{row[2]}</td>
                        <td className="py-3 px-4">{row[3]}</td>
                        <td className="py-3 px-4">{row[4]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-center mt-4 text-gray-400">* Additional sizes and configurations available upon request</p>
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
         <Footer/>
       </div>
      </div>
    </>
  )
}

export default TentPackages
