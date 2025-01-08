import React from 'react';
import { Mail, Phone, MapPin, Calendar, Users, Package, Tent,Table, Armchair, Lightbulb, Music, Wine } from 'lucide-react';
import './quoteRequest.css'
import Navbar from '../../components/PartyRentalsPage/Navbar';

const QuoteRequest = () => {

    return (
      <>
        <div className='HomeContainer bg-custom-gradient-2 w-screen min-h-screen overflow-x-hidden'>
            <div>
              <Navbar />
            </div>
            <div className="min-h-screen bg-custom-gradient-2 py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
                    <div className="text-center space-y-2">
                     <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                        Contact Us
                     </h1>
                     <p className="text-gray-600">Fill out this short form and we will contact you the same business day.</p>
                    </div>

                    <form className="space-y-6">
                        {/* Name Field */}
                        <div className="relative">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            required
                            className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        />
                        </div>

                        {/* Email and Phone Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            <span className="flex items-center gap-2">
                                <Mail className="w-4 h-4" /> Email
                            </span>
                            </label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            <span className="flex items-center gap-2">
                                <Phone className="w-4 h-4" /> Phone Number
                            </span>
                            </label>
                            <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter your phone number"
                            required
                            className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                            />
                        </div>
                        </div>

                        {/* Location and Event Date Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                            <span className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" /> Location (Town)
                            </span>
                            </label>
                            <input
                            type="text"
                            id="location"
                            name="location"
                            placeholder="Enter your location"
                            required
                            className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" /> Event Date
                            </span>
                            </label>
                            <input
                            type="date"
                            id="eventDate"
                            name="eventDate"
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                            />
                        </div>
                        </div>

                        {/* Guests and Event Type Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                            <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                            <span className="flex items-center gap-2">
                                <Users className="w-4 h-4" /> Number of Guests
                            </span>
                            </label>
                            <input
                            type="number"
                            id="guests"
                            name="guests"
                            placeholder="Enter number of guests"
                            required
                            className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                            <select
                            id="eventType"
                            name="eventType"
                            required
                            className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all appearance-none bg-white"
                            >
                            <option value="">Select An Event</option>
                            <option value="graduation">Graduation</option>
                            <option value="bridalShower">Bridal Shower</option>
                            <option value="babyShower">Baby Shower</option>
                            <option value="communion">Communion</option>
                            <option value="engagement">Engagement Party</option>
                            <option value="quinceanera">Quinceanera</option>
                            <option value="backyard">Backyard Party</option>
                            <option value="holiday">Holiday Party</option>
                            <option value="birthday">Birthday Party</option>
                            <option value="wedding">Wedding</option>
                            <option value="sweet16">Sweet 16</option>
                            <option value="barMitzvah">Bar/Bat Mitzvah</option>
                            <option value="corporate">Corporate</option>
                            <option value="other">Others</option>
                            </select>
                        </div>
                        </div>

                        {/* Package Selection */}
                        <div className="relative">
                        <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-1">
                            <span className="flex items-center gap-2">
                            <Package className="w-4 h-4" /> Select a Package
                            </span>
                        </label>
                        <select
                            id="package"
                            name="package"
                            className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all appearance-none bg-white"
                        >
                            <option value="">Select A Package</option>
                            <option value="tent">Tent Package</option>
                            <option value="tentLiner">Tent & Liner Package</option>
                            <option value="clearTop">Clear Top Package</option>
                            <option value="sailcloth">Sailcloth Package</option>
                            <option value="rustic">Rustic Package</option>
                            <option value="lounge">Lounge Package</option>
                            <option value="decor">Décor</option>
                            <option value="other">Others</option>
                            <option value="no">No Package Needed</option>
                        </select>
                        </div>

                        {/* Tent Type Selection */}
                        <div className="space-y-4">
                        <label className="block text-sm font-medium text-gray-700">
                            <span className="flex items-center gap-2 mb-3">
                            <Tent className="w-4 h-4" /> What type of tent are you looking for?
                            </span>
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                            { id: 'tentOnly', label: 'Tent Only' },
                            { id: 'tentPackage', label: 'Tent Package with Tables, Chairs and Lights' },
                            { id: 'weddingTentPackage', label: 'Wedding Tent Package' },
                            { id: 'customTentPackage', label: 'Custom Tent Package and Accessories' },
                            { id: 'tablesChairsOnly', label: 'Tables and/Or Chairs Only' },
                            { id: 'noTent', label: 'No Tent' }
                            ].map(option => (
                            <label key={option.id} className="relative flex items-start p-4 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                                <input
                                type="radio"
                                name="tentType"
                                value={option.id}
                                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 mt-1"
                                />
                                <span className="ml-3 text-sm text-gray-700">{option.label}</span>
                            </label>
                            ))}
                        </div>
                        </div>

                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-gray-700">
                            <span className="flex items-center gap-2 mb-3">
                                <Table className="w-4 h-4" /> What tables are you interested in?
                            </span>
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { id: 'roundTables', label: 'Round Tables' },
                                { id: 'farmTables', label: 'Farm Tables' },
                                { id: 'banquetTables', label: 'Banquet Tables' },
                                { id: 'cocktailTables', label: 'Cocktail Tables (High or Low)' },
                                { id: 'noTables', label: 'No Tables' }
                            ].map(option => (
                                <label key={option.id} className="relative flex items-start p-4 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                                <input
                                    type="checkbox"
                                    name="tables"
                                    value={option.id}
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mt-1"
                                />
                                <span className="ml-3 text-sm text-gray-700">{option.label}</span>
                                </label>
                            ))}
                            </div>
                        </div>

                        {/* Chairs Section */}
                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-gray-700">
                            <span className="flex items-center gap-2 mb-3">
                                <Armchair className="w-4 h-4" /> What chairs are you interested in?
                            </span>
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { id: 'standardFolding', label: 'Standard Folding' },
                                { id: 'gardenFolding', label: 'Garden Folding' },
                                { id: 'fruitwoodFolding', label: 'Fruitwood Folding' },
                                { id: 'crossback', label: 'Crossback' },
                                { id: 'chiavari', label: 'Chiavari' },
                                { id: 'barstools', label: 'Barstools' },
                                { id: 'noChairs', label: 'No Chairs' }
                            ].map(option => (
                                <label key={option.id} className="relative flex items-start p-4 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                                <input
                                    type="checkbox"
                                    name="chairs"
                                    value={option.id}
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mt-1"
                                />
                                <span className="ml-3 text-sm text-gray-700">{option.label}</span>
                                </label>
                            ))}
                            </div>
                        </div>

                        {/* Lighting Section */}
                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-gray-700">
                            <span className="flex items-center gap-2 mb-3">
                                <Lightbulb className="w-4 h-4" /> What type of lighting are you interested in?
                            </span>
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { id: 'basicGlobeLights', label: 'Basic Globe Lights' },
                                { id: 'bistroLightingPackage', label: 'Bistro Lighting Package' },
                                { id: 'bistroLightingPerimeter', label: 'Bistro Lighting Perimeter' },
                                { id: 'rusticChandeliers', label: 'Rustic Chandeliers' },
                                { id: 'crystalChandeliers', label: 'Crystal Chandeliers' },
                                { id: 'highBayLight', label: 'High Bay Light' },
                                { id: 'ledRingChandelier', label: 'LED Ring Chandelier' },
                                { id: 'ledParCan', label: 'LED Par Can' },
                                { id: 'noLighting', label: 'No Lighting' }
                            ].map(option => (
                                <label key={option.id} className="relative flex items-start p-4 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                                <input
                                    type="checkbox"
                                    name="lighting"
                                    value={option.id}
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mt-1"
                                />
                                <span className="ml-3 text-sm text-gray-700">{option.label}</span>
                                </label>
                            ))}
                            </div>
                        </div>

                        {/* Dance Floor Section */}
                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-gray-700">
                            <span className="flex items-center gap-2 mb-3">
                                <Music className="w-4 h-4" /> What type of dance floor are you interested in?
                            </span>
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { id: 'parquet', label: 'Parquet' },
                                { id: 'premium', label: 'Premium (Light Maple, Dark Maple, Smoked Oak, Black Oak, White Oak, Sandalwood)' },
                                { id: 'fastDeck', label: 'Fast Deck Portable Flooring' },
                                { id: 'astroturf', label: 'Astroturf (Green)' },
                                { id: 'noDanceFloor', label: 'No Dance Floor' }
                            ].map(option => (
                                <label key={option.id} className="relative flex items-start p-4 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                                <input
                                    type="checkbox"
                                    name="danceFloor"
                                    value={option.id}
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mt-1"
                                />
                                <span className="ml-3 text-sm text-gray-700">{option.label}</span>
                                </label>
                            ))}
                            </div>
                        </div>

                        {/* Bar Section */}
                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-gray-700">
                            <span className="flex items-center gap-2 mb-3">
                                <Wine className="w-4 h-4" /> What type of bar are you interested in?
                            </span>
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { id: 'stainlessSteelBar', label: 'Stainless Steel Bar' },
                                { id: 'wineBarrel2', label: 'Wine Barrel Bar – 2 Barrels' },
                                { id: 'wineBarrel3', label: 'Wine Barrel Bar – 3 Barrels' },
                                { id: 'rusticBar', label: 'Rustic Bar' },
                                { id: 'whiteBackBar', label: 'White Back Bar' },
                                { id: 'beverageCart', label: 'Beverage Cart' },
                                { id: 'ledBar', label: 'LED Bar' },
                                { id: 'chillStation', label: 'Chill Station' },
                                { id: 'noBar', label: 'No Bar' }
                            ].map(option => (
                                <label key={option.id} className="relative flex items-start p-4 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                                <input
                                    type="checkbox"
                                    name="bar"
                                    value={option.id}
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mt-1"
                                />
                                <span className="ml-3 text-sm text-gray-700">{option.label}</span>
                                </label>
                            ))}
                            </div>
                        </div>

                        {/* Accessories Section */}
                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-gray-700">
                            <span className="flex items-center gap-2 mb-3">
                                <Package className="w-4 h-4" /> What accessories are you interested in?
                            </span>
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { id: 'loungeFurniture', label: 'Lounge Furniture' },
                                { id: 'linens', label: 'Linens' },
                                { id: 'heaters', label: 'Heaters' },
                                { id: 'fans', label: 'Fans' },
                                { id: 'staging', label: 'Staging' },
                                { id: 'backdrops', label: 'Backdrops' },
                                { id: 'pipeAndDrape', label: 'Pipe and Drape' },
                                { id: 'noAccessories', label: 'No Accessories' }
                            ].map(option => (
                                <label key={option.id} className="relative flex items-start p-4 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                                <input
                                    type="checkbox"
                                    name="accessories"
                                    value={option.id}
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mt-1"
                                />
                                <span className="ml-3 text-sm text-gray-700">{option.label}</span>
                                </label>
                            ))}
                            </div>
                        </div>

                        {/* Message Field */}
                        <div className="relative">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">More Info</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Tell us more about your event..."
                            className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none"
                        ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all transform hover:scale-[1.02]">
                        Submit Request
                        </button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
}


export default QuoteRequest;
