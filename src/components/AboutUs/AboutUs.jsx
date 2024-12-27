import React from 'react'
import './aboutUs.css'

const AboutUs = () => {
    return (
        // <div className='AboutContainer p-6 h-full w-full backdrop-blur-sm bg-white/25'>
        <section id='Aboutus' className='AboutContainer p-6 h-full w-full glass'>
            <div className="Heading w-full text-center text-white">
                <p className="text-gradient font-lora lg:text-6xl text-4xl mb-5">About Us</p>

                <div className='aboutContent '>
                    <p className='font-lora lg:text-6xl text-4xl mb-5'>More than <span className='text-gradient'>100+</span> luxury collection of cars</p>
                    <p className='font-serif text-l w-11/12 m-auto py-4'>At [Your Brand Name], we believe in making your special moments
                        unforgettable. Specializing in luxury car rentals for weddings and
                        parties, we take pride in offering an exquisite fleet of premium
                        vehicles that blend elegance, style, and comfort.

                        From classic vintage rides to sleek modern luxury cars, our collection
                        is curated to suit every occasion and taste.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs