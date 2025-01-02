import React, { useState, useEffect } from 'react';
import './services.css';
import Car2 from '../../../assets/images/Car2.jpg';
import Car3 from '../../../assets/images/Car3.jpg';

const Services = () => {
    const [isFlexCol, setIsFlexCol] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            
            const isSmallScreen = window.innerWidth < 1280; 
            setIsFlexCol(isSmallScreen);
        };

        
        handleResize();
        window.addEventListener('resize', handleResize);

        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section
            id="Services"
            className="ServiceContainer overflow-hidden h-full w-screen flex flex-col xl:flex-row items-center justify-between gap-4 xl:gap-12 box-border p-12"
        >
            <div className={`imageContent ${isFlexCol ? 'hidden' : 'xl:w-1/2'}`}>
                <div className="imageWrapper relative">
                    <img src={Car2} alt="Luxury Car" className="imageWithGradient" />
                    <div className="textOverlayContainer-2 flex flex-col justify-center items-center text-sm xl:bottom-4 xl:left-3 -bottom-7 -left-3">
                        <div className="textOverlay md:text-3xl text-sm">Party Cars</div>
                    </div>
                </div>
            </div>
            <div className="textContent p-4 xl:w-1/2 w-full flex flex-col gap-6">
                <div className="seHeading text-gradient text-2xl md:text-3xl">Our Services</div>
                <div className="text-white">
                    <div className="seContent text-justify">
                        We understand that every event is unique, and we strive to accommodate your individual needs.
                    </div>
                </div>
                <div className="imageContent flex justify-center items-center relative">
                    <div className="imageWrapper relative">
                        <img src={Car3} alt="Luxury Car" className="imageWithGradient" />
                        <div className="textOverlayContainer-2 flex flex-col justify-center items-center text-sm xl:bottom-4 xl:left-3 -bottom-7 -left-3">
                            <div className="textOverlay md:text-3xl text-sm">Wedding Cars</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
