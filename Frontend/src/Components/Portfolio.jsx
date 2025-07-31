import React from "react";

// Example image imports (replace these with your actual paths)
import Img1 from "../assets/p1.jpg";
import Img2 from "../assets/p2.jpg";
import Img3 from "../assets/p3.jpg";
import Img4 from "../assets/p4.jpg";
import Img5 from "../assets/p16.jpg";
import Img6 from "../assets/p6.jpg";
import Img7 from "../assets/p7.jpg";
import Img8 from "../assets/p8.jpg";
import Img9 from "../assets/p9.jpg";
import Img10 from "../assets/p10.jpg";
import Img11 from "../assets/p11.jpg";

import Img12 from "../assets/p12.jpg";
import Img13 from "../assets/p13.jpg";
import Img14 from "../assets/p14.jpg";

import Img15 from "../assets/p15.jpg";
import Img16 from "../assets/p16.jpg";
import Img17 from "../assets/p17.jpg";
import Img18 from "../assets/p18.jpg";
import Img19 from "../assets/p19.jpg";
import Img20 from "../assets/p20.jpg";
import Img21 from "../assets/p21.jpg";
import Img22 from "../assets/p22.jpg";
import Img23 from "../assets/p23.jpg";
import Img24 from "../assets/p24.jpg";
import Img25 from "../assets/p25.jpg";
import Img26 from "../assets/p23.jpg";
// ... up to Img50+

const images = [
    { title: "Bridal Makeup", src: Img1 },
    { title: "Bridal Makeup", src: Img2 },
    { title: "Cocktail Makeup", src: Img5 },
    { title: "Haldi Makeup", src: Img4 },
    { title: "Beby Shower Makeup", src: Img3 },

    
    { title: "Party Makeup", src: Img6 },   
     { title: "Mehndi Makeup", src: Img22 },

    { title: "Eye Makeup", src: Img15 },
    { title: "Tradational Makeup", src: Img25 },
    { title: "Bachelor Party Makeup", src: Img24 },
    { title: "Modelling Makeup", src: Img26 },
    { title: "Reception Look", src: Img7 },
    { title: "Event Makeup", src: Img9 },
    { title: "Hair Styling", src: Img10 },
    { title: " Shoot Makeup", src: Img12},
    { title: "Hair Treatment", src: Img19 },
    { title: "Waxing", src: Img20 },
    { title: "Skin Treatment", src: Img21 },

    { title: "Hair Cutting", src: Img18 },
   
    // Add more... till you reach 50+ items
];

const Portfolio = () => {
    return (
        <section className="bg-[#fff0f6] py-20 px-6 md:px-12" id="portfolio">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#c2185b]" style={{ fontFamily: "'Pacifico', cursive" }}>
                    My Portfolio
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto mt-2">
                    A glimpse of 50+ makeup transformations, beauty services, and hair styling work done by Muskan Makeover.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {images.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-pink-300 transition-all duration-300">
                        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-pink-300 transition-all duration-300">
                            <div className="relative">
                                <img src={item.src} alt={item.title} className="w-full h-[400px] object-cover" />
                                <div className="absolute top-0 left-0 bg-[#c2185b] text-white text-sm px-3 py-1 rounded-br-xl">
                                    {item.title}
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
