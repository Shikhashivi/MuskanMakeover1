import React from "react";
import logo1 from "../assets/b1.png";
import logo2 from "../assets/b2.png";
import logo3 from "../assets/b3.png";
import logo4 from "../assets/b4.png";
import logo5 from "../assets/b5.png";

const logos = [logo1, logo2, logo3, logo4, logo5];

const BrandScroller = () => {
  return (
    <section className="bg-[#fff0f6] py-10 pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl font-bold text-center text-[#c2185b] mb-8"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          Our Trusted Brands
        </h2>
        <div className="relative w-full  overflow-hidden">
          <div className="flex gap-6   animate-scroll-right whitespace-nowrap">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="min-w-[140px] h-[80px] bg-white rounded-xl shadow-md flex items-center justify-center p-2"
              >
                <img
                  src={logo}
                  alt={`Brand ${index}`}
                  className="h-full w-250 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandScroller;
