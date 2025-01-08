import React from 'react';
import CarData from '../../assets/CarData/CarData'; // Assuming the path is correct
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FleetSlider = ({ filter }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 slides by default
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2, // Show 2 slides on medium screens
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1, // Show 1 slide on small screens
                },
            },
        ],
    };

    // Filter the car data based on the selected filter
    const filteredCars = CarData.filter(car => {
        if (filter === 'All') return true; // Show all cars
        if (filter === 'Party' && car.type === 'Party') return true; // Show only party cars
        if (filter === 'Wedding' && car.type === 'Wedding') return true; // Show only wedding cars
        return false; // Hide other cars
    });

    return (
        <div className='w-full max-w-screen-2xl mx-auto'>
            <div className="mt-6">
                <Slider {...settings}>
                    {filteredCars.map((d, index) => (
                        <div key={index} className="p-4 h-[400px] w-[400px] backdrop-blur-sm bg-gray-800/10 text-white rounded-lg shadow-lg">
                            <div className="imageWrapper relative bg-gradient-to-b from-[#01C5FD] to-[#0144E4] p-2 rounded-t-lg">
                                <img 
                                    src={d.img} 
                                    alt={d.name} 
                                    className="w-[395px] h-[243px] object-cover rounded-t-lg mx-auto" 
                                />
                            </div>
                            <div className="mt-4">
                                <h3 className="font-semibold">{d.name}</h3>
                                <div className="mt-1">
                                    <span>Seats {d.seats} | </span>
                                    <span>{d.AC} | </span>
                                    <span>{d.Chauffeur}</span>
                                </div>
                                <div className="mt-1 font-bold text-gradient">{d.price}</div>
                                {/* <div className='absolute right-6 bottom-9 px-4 py-2 border-2 border-[#0144E4] text-white rounded-lg hover:bg-white hover:text-black transition'>
                                    Rent Now
                                </div> */}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default FleetSlider;
