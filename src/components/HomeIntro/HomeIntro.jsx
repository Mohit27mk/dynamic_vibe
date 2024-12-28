import React from 'react'
import './homeIntro.css';
import {useNavigate} from 'react-router-dom';
const HomeIntro = () => {
    const navigate = useNavigate();
    return (
        <section id='Home' className='pt-6 mb-16 overflow-x-hidden flex flex-col items-center justify-center' >
            <div className="w-full h-1/5 text-white  flex flex-col justify-center items-center gap-2 mb-16">
                <div className='logo text-6xl font-lobster'>Logo</div>
                <div className='tagline text-lg font-light'>Space for tagline</div>

            </div>
            <div className="w-full text-center lg:text-6xl text-4xl text-white m-4 mb-12 ">
                <p className='m-2'>Arrive in <span className="text-gradient">Style</span></p>
                <p>Make Memories That Last</p>
            </div>
            <div className="flex justify-center m-auto lg:gap-8 gap-4 md:flex-row flex-col">
                <button className="btn bg-button-bg" onClick={()=> navigate("/carrentals")}><span className="lg:text-2xl text-xl">Car Rentals</span></button>
                <button className="btn bg-button-bg" onClick={()=> navigate("/partyrentals")}><span className="lg:text-2xl text-xl">Party Rentals</span></button>
            </div>

        </section>
    )
}

export default HomeIntro;