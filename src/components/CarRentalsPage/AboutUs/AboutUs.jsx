import React from 'react';
import './aboutUs.css';
import Car1 from '../../../assets/images/Car1.jpg';

const AboutUs = () => {
    return (
        <section 
            id="Aboutus" 
            className="AboutContainer overflow-x-hidden h-full w-screen glass flex flex-col xl:flex-row items-center justify-between box-border p-12"
        >
            <div className="textContent p-4 flex-1">
                <div className="abHeading text-gradient text-2xl md:text-3xl">About Us</div>
                <div className="text-white">
                    <div className="abSubHeading text-4xl md:text-6xl mb-4">
                        More than <span className="text-gradient">100+</span> luxury collection cars
                    </div>
                    <div className="abContent text-justify">
                        At [Your Brand Name], we believe in making your special moments unforgettable. Specializing in luxury car rentals for weddings and parties, we take pride in offering an exquisite fleet of premium vehicles that blend elegance, style, and comfort. From classic vintage rides to sleek modern luxury cars, our collection is curated to suit every occasion and taste.
                    </div>
                </div>
            </div>
            <div className="imageContent flex-1 flex justify-center items-center relative">
                <div className="imageWrapper relative">
                    <img src={Car1} alt="Luxury Car" className="imageWithGradient" />
                    <div className="textOverlayContainer flex flex-col justify-center items-center text-sm">
                        <div className="textOverlay upper">+20k</div>
                        <div className="textOverlay lower">served customer</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
