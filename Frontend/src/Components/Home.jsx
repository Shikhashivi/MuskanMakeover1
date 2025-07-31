import React from 'react';
import HeroImage from '../assets/home.png'; // Replace with actual image path
import Services from './Services';
import BrandScroller from './Brand'; // Assuming you have a Brand component for scrolling logos

const Home = () => {
    return (
        <>
        <section className="w-full min-h-screen bg-[#f8e3ea] flex items-center justify-center px-4 md:px-16">
            <div className="max-w-7xl w-full pt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Left Side - Text Content */}
                <div className="text-[#3e1f2b] space-y-6">
                    <h1
                        className="text-4xl mt-20 md:text-4xl leading-snug"
                        style={{ fontFamily: "'Pacifico', cursive" }}
                    >
                        <span className="text-[#e91e63]">Muskan Makeover</span> Belleza <br />
                        Studio & Academy
                    </h1>

                    <p
                        className="text-lg md:text-md "
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Muskan Makeover is a trusted beauty studio and academy with over 5+ years of experience, offering expert makeup, hairstyling, and personalized beauty services.


                    </p>



                    <a
                        href="/services" // Replace with your actual services link
                        className="inline-block bg-[#b88e8e] ml-17 z-50 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-[#FFBCD9] hover:text-black transition duration-300"
                    >
                        Book Appointment
                    </a>
                </div>

                {/* Right Side - Image */}
                <div className="w-full">
                    <img
                        src={HeroImage}
                        alt="Muskan Makeover"
                        className="w-full h-[400px] md:h-[550px] object-cover rounded-xl "
                    />
                </div>
            </div>
        </section>
        <BrandScroller />

        <Services />
        </>
        
    );
};

export default Home;
