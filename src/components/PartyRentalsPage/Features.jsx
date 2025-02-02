import React from 'react'
import { Package, Truck, Wrench } from 'lucide-react';

const Features = () => {
  return (
    <>
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
    </>
  )
}

export default Features
