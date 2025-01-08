import React from 'react';
import './ourstory.css'
import Navbar from '../../components/PartyRentalsPage/Navbar';

const OurStory = () => {
  return (
    <>
      <div className='HomeContainer bg-custom-gradient-2 w-screen min-h-screen overflow-x-hidden'>
        <Navbar />
        {/* About Us Section */}
        <section className="aboutUsSection text-white py-20 px-6 md:px-20">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Left Image */}
            <div className="w-full md:w-2/5">
              <img
                src="https://litentrentals.com/wp-content/uploads/2023/01/About-Sq-1.jpg"
                alt="Long Island Tent & Party Rentals"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>

            {/* Right Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
                More than 15 years in business
              </h1>
              <p className="text-lg md:text-xl leading-relaxed">
                Long Island Tent & Party Rentals has built a reputation for excellence.
                Our quality of work, commitment, and competitive pricing have set us
                apart from the competition. We are dedicated to making your special
                events unforgettable by providing top-tier tents and party equipment to
                transform any outdoor space into a magical setting.
              </p>
            </div>
          </div>
        </section>


        {/* Mission Section */}
        <section className="missionSection bg-black/50 text-white py-20 px-6 md:px-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-gradient mb-6">Our Mission</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            We are a one-stop shop with a production and decor division to make your dream event a reality. To maintain the quality of our equipment, we have invested in state-of-the-art washing machines for our wedding tents and chairs, ensuring a clean and safe event atmosphere for all our clients. Whether it’s a wedding, party, or corporate event, we pride ourselves on providing exceptional service and products to make your day special.
          </p>
        </section>

        {/* Testimonials Section */}
        <section className="testimonialsSection text-white py-20 px-6 md:px-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-gradient mb-10 text-center">What Our Clients Say</h2>
          <div className="testimonialGrid grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <blockquote className="bg-black/50 p-6 rounded-lg shadow-lg">
              <p className="italic">"Came in clutch on a last minute party. Great experience working with Pete. On time delivery and good set up. Furniture needed a bit of cleaning, but came out nice. We wanted a 'club vibe' and were super happy. Definitely using them for future parties."</p>
              <footer className="mt-4 text-right">— G Borgia</footer>
            </blockquote>
            <blockquote className="bg-black/50 p-6 rounded-lg shadow-lg">
              <p className="italic">"To Pete & Long Island Tent + Party Rental, we want to thank you guys for an amazing job with our wedding set up. Everybody loved the tent and the party was a hit! Thank you."</p>
              <footer className="mt-4 text-right">— Raul & Colleen</footer>
            </blockquote>
            <blockquote className="bg-black/50 p-6 rounded-lg shadow-lg">
              <p className="italic">"I can’t say enough about the wonderful experience I had with Evan and his crew! The set up was quick and very professionally done. The tents were absolutely beautiful and perfect for my winter wonderland theme birthday party. I will always use this company for all of my rental needs."</p>
              <footer className="mt-4 text-right">— Sonia</footer>
            </blockquote>
            <blockquote className="bg-black/50 p-6 rounded-lg shadow-lg">
              <p className="italic">"Excellent job and fine tent. Quickly installed and loaded-out. Competitive pricing too! I highly recommended LI Tent and Party Rentals."</p>
              <footer className="mt-4 text-right">— John M.</footer>
            </blockquote>
            <blockquote className="bg-black/50 p-6 rounded-lg shadow-lg">
              <p className="italic">"Rented a tent and heater for an outdoor Christmas party and everything went smoothly! Easy to reserve. Quick set up and pick up. Would recommend."</p>
              <footer className="mt-4 text-right">— Megan S.</footer>
            </blockquote>
            <blockquote className="bg-black/50 p-6 rounded-lg shadow-lg">
              <p className="italic">"Would highly recommend to others! With all the stress of the party, the tent/heaters/tables/chairs were not one of them! Everything was delivered within reasonable time of the party, and was taken away just as quick. It was overall really great!"</p>
              <footer className="mt-4 text-right">— Christine O.</footer>
            </blockquote>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section className="whoWeServeSection bg-black/50 text-white py-20 px-6 md:px-20 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-gradient mb-6">Who We Serve</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Long Island Tent & Party Rentals proudly serves Nassau and Suffolk County, Long Island, NY, towns and hamlets with exceptional tent and party rental services. We are one of the largest companies serving the Long Island and Queens areas with a 50,000 square foot facility, a huge inventory, and a fleet of trucks ready to accommodate small to large events.
          </p>
        </section>
      </div>
    </>
  )
}

export default OurStory
