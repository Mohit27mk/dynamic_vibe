import React, {useState} from 'react';
import FleetSlider from "../../../helpers/FleetSlider/FleetSlider";

const Fleets = () => {
  const [filter, setFilter] = useState('All');
  return (
    <section id="Fleets" className={`FleetContainer p-6 h-full w-11/12 m-auto my-6 bg-[#000d2a] rounded-xl relative`}>
      <div className="FleetHeading text-gradient font-lora lg:text-6xl text-4xl text-center">Our Fleet</div>
      {/* Div aligned to the top-right */}
      <div className='text-white text-justify w-full py-6 p-2'>
      We understand that every event is unique, and we strive to accommodate your individual needs.
      </div>
      <div className="inline-block relative top-5 m-auto space-x-4 text-white">
        <span className={`hover:bg-gradient-to-b from-[#01C5FD] to-[#0144E4] p-2 rounded-md cursor-pointer ${filter === 'All' ? 'bg-gradient-to-b from-[#01C5FD] to-[#0144E4]' : ''}`}
          onClick={() => setFilter('All')}>
          <span>All</span>
        </span>
        <span className={`hover:bg-gradient-to-b from-[#01C5FD] to-[#0144E4] p-2 rounded-md cursor-pointer ${filter === 'Party' ? 'bg-gradient-to-b from-[#01C5FD] to-[#0144E4]' : ''}`}
          onClick={() => setFilter('Party')}>
          <span>Party</span>
        </span>
        <span className={`hover:bg-gradient-to-b from-[#01C5FD] to-[#0144E4] p-2 rounded-md cursor-pointer ${filter === 'Wedding' ? 'bg-gradient-to-b from-[#01C5FD] to-[#0144E4]' : ''}`}
          onClick={() => setFilter('Wedding')}>
          <span>Wedding</span>
        </span>
      </div>
      <div className="FleetSlider w-full mt-8">
        <FleetSlider filter={filter} />
      </div>
    </section>
  );
};

export default Fleets;
