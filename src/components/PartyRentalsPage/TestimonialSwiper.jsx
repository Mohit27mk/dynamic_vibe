import React from 'react';
  import { Swiper, SwiperSlide } from 'swiper/react';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import { Navigation, Pagination } from 'swiper/modules';

const testimonials = [
  {
    id: 1,
    text: "The custom fabrication services were exceptional! They perfectly captured our vision and created stunning pieces that elevated our event.",
    author: "Samantha R.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=40",
  },
  {
    id: 2,
    text: "I was blown away by the quality and creativity of the custom bars and DJ front boards. They were a huge hit with our guests!",
    author: "Michael B.",
    image: "https://images.unsplash.com/photo-1507003211169-0b1e0a7d259a?w=200&q=40",
  },
  {
    id: 3,
    text: "The vinyl lettering for our seating chart was a beautiful and personalized touch. It made our event feel so special and unique.",
    author: "Jessica L.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d674b8a?w=200&q=40",
  },
  {
    id: 4,
    text: "From start to finish, the team was professional and collaborative. They listened to our ideas and delivered beyond our expectations.",
    author: "David K.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200&q=40",
  },
  {
    id: 5,
    text: "The custom fabrication services were a game-changer for our event. The pieces were not only beautiful but also functional and well-made.",
    author: "Emily S.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b2933e?w=200&q=40",
  },
];

const TestimonialSwiper = () => {
  return (
    <div className='bg-custom-gradient-2 mx-10'>
      <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <div className="bg-gray-900/50 rounded-lg p-8 flex flex-col items-center">
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="rounded-full w-24 h-24 mb-4 object-cover"
            />
            <p className="text-white text-lg italic mb-4">{testimonial.text}</p>
            <p className="text-amber-500 font-semibold">- {testimonial.author}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default TestimonialSwiper;
