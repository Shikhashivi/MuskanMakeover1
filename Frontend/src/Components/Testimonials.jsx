import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const testimonials = [
  {
    name: 'Anjali Sharma',
    feedback: 'Absolutely loved the bridal makeup! Muskan made me feel so beautiful on my big day.',
  },
  {
    name: 'Pooja Verma',
    feedback: 'Her hairstyle and party makeup were flawless. Highly recommended!',
  },
  {
    name: 'Riya Kapoor',
    feedback: 'Very professional and kind. Listened to what I wanted and delivered it perfectly.',
  },
  {
    name: 'Nikita Mehra',
    feedback: 'The hair spa gave my hair a new life! Amazing results!',
  },
  {
    name: 'Shivani Singh',
    feedback: 'Makeup was elegant and natural, just the way I like it!',
  },
  {
    name: 'Tanya Rawat',
    feedback: 'I loved how confident I looked after the makeover. Muskan is a magician!',
  },
  {
    name: 'Komal Joshi',
    feedback: 'Best experience ever. I’ll definitely return again!',
  },
  {
    name: 'Sanya Chauhan',
    feedback: 'She made my engagement look perfect. Can’t thank her enough!',
  },
  {
    name: 'Mansi Thakur',
    feedback: 'From makeup to styling, everything was done perfectly.',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-r from-[#eac1c1] to-[#d49aad] py-20" id="testimonials">
      <div className="text-center mb-12">
        <h2
          className="text-4xl md:text-4xl font-bold text-[#c2185b]"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          What My Clients Say
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Swiper Container */}
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-xl p-6 rounded-2xl h-full flex flex-col justify-between transition-transform hover:scale-105 duration-300">
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  “{review.feedback}”
                </p>
                <h4 className="text-[#ad1457] font-bold text-lg mt-auto">
                  — {review.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrow Styling */}
        <style>
          {`
            .swiper-button-prev,
            .swiper-button-next {
              width: 42px;
              height: 32px;
              background-color: #c2185b;
              color: white;
              border-radius: 9999px;
              top: 40%;
              transform: translateY(-50%);
            }
            .swiper-button-prev {
              left: 10px;
              top: 80%;
            }
            .swiper-button-next {
              right: 10px;
              top: 80%;
            }
            .swiper-button-prev::after,
            .swiper-button-next::after {
              font-size: 14px;
              font-weight: bold;
            }

            @media (max-width: 768px) {
              .swiper-button-prev,
              .swiper-button-next {
                display: none;
              }
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default Testimonials;
