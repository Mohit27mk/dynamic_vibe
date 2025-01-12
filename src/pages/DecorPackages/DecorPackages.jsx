import React from 'react';
import Navbar from '../../components/PartyRentalsPage/Navbar';
import Footer from '../../components/Footer/Footer';
import { Star, Crown, Palette } from 'lucide-react';

const DecorPackages = () => {
  return (
    <div className="bg-custom-gradient-2 min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Décor Packages</h1>
        {/* Full-Service Event Design Section */}
        <div className="mb-16 bg-gray-900/50 rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-semibold text-amber-500 mb-4">Full-Service Event Design</h2>
              <p className="text-white leading-relaxed">
                From beginning to end, we will work with you to create and implement your event vision. 
                This includes managing a budget, being able to liaise and manage any additional vendors 
                associated with décor, and handling all aspects of delivery, setup and breakdown of all 
                décor inventory.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80" 
                alt="Event Design Service" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* Platinum Event Design Section */}
        <div className="mb-16 bg-gray-900/50 rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 p-8">
              <div className="flex items-center gap-2 mb-4">
                <Crown className="text-amber-500" size={28} />
                <h2 className="text-3xl font-semibold text-amber-500">Platinum Event Design</h2>
              </div>
              <ul className="text-white space-y-3">
                <li>• Finalize and confirm customized design plan</li>
                <li>• Unlimited phone and email support, budget planning and tracking</li>
                <li>• Preparation of setup and setup timeline</li>
                <li>• Researching, booking, schedule and attend décor vendors appointments</li>
                <li>• Execute site design, color scheme, theme, style</li>
                <li>• Site walk through and table preview</li>
                <li>• Verification of detailed event timeline and floor plan</li>
                <li>• On-site coordination of vendors</li>
                <li>• Oversee coordination of rehearsal</li>
                <li>• Supervision of venue set-up</li>
                <li>• Collection of personal items from reception</li>
                <li>• Handle all rental returns and site breakdown</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80" 
                alt="Platinum Event Design" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Personalized Design Creation Section */}
        <div className="mb-16 bg-gray-900/50 rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8">
              <div className="flex items-center gap-2 mb-4">
                <Palette className="text-amber-500" size={28} />
                <h2 className="text-3xl font-semibold text-amber-500">Personalized Design Creation</h2>
              </div>
              <ul className="text-white space-y-3 mb-6">
                <li>• Creating a design using selected rental items to create event package</li>
                <li>• Contact vendors to discuss requirements need to execute event design</li>
                <li>• Follow up consultation to review and revise customized design plan as needed</li>
              </ul>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="text-amber-400 text-sm mb-2">
                  All designs are exclusive to Long Island Tent Design & Décor. Design fee will be applied 
                  to your selected service package.
                </p>
                <p className="text-gray-400 text-sm">
                  Design Consultation fee is required to move forward with Long Island Tent Design & Décor.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80" 
                alt="Personalized Design Creation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Additional Packages Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Star className="text-amber-500" size={24} />
              <h3 className="text-2xl font-semibold text-amber-500">Gold Event Design</h3>
            </div>
            <ul className="text-white space-y-2">
              <li>• Finalize and confirm customized design plan</li>
              <li>• Unlimited phone, email support</li>
              <li>• Budget planning and tracking</li>
              <li>• Preparation of setup timeline</li>
              <li>• Vendor coordination and appointments</li>
              <li>• Site walk through and table preview</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Star className="text-gray-400" size={24} />
              <h3 className="text-2xl font-semibold text-gray-400">Silver Package</h3>
            </div>
            <ul className="text-white space-y-2">
              <li>• Finalize rentals and client design plan</li>
              <li>• Execute day of setup</li>
              <li>• Handle all rental returns the day after</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DecorPackages;
