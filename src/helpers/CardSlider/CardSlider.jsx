import React from 'react';
import data from '../../assets/UserData/UserReviews';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className='w-3/4 m-auto'>
            <div className="mt-6">
                <Slider {...settings}>
                    {data.map((d, index) => (
                        <div key={index} 
                             className="h-auto flex flex-col text-black rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
                             style={{ background: 'linear-gradient(to bottom right, #0a2540, #2c3e50)' }}>
                            <div className="rounded-t-xl flex justify-center items-center h-56" 
                                 style={{ backgroundImage: 'linear-gradient(to top right, #1a2a5a, #0b345f)' }}>
                                <img src={d.img} className="h-44 w-44 rounded-full border-4 border-white" alt={d.name} />
                            </div>
                             <div className="flex flex-col  rounded-b-xl  items-center gap-6 p-4 h-1/2" style={{ background: 'linear-gradient(to bottom right, #0a2540, #2c3e50)' }}>
    <p className="text-2xl font-bold text-white shadow-lg">{d.name}</p>
    <p className=" text-base text-gray-300">{d.review}</p>
</div>  
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CardSlider;
