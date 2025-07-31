import React from 'react';
import AboutImage from '../assets/about.jpg'; // Use your actual image path
import Testimonials from './Testimonials';
import BrandScroller from './Brand'; // Assuming you have a Brand component for scrolling logos


const About = () => {
    return (
        <>
            <section
                id="about"
                className="relative w-full min-h-screen mt-18 flex items-center justify-center bg-[#fce4ec]"
            >
                {/* Background Image */}
                <div className="absolute  inset-0 ">
                    <img
                        src={AboutImage}
                        alt="Background"
                        className="w-full h-full x object-cover blur-sm opacity-1000"
                    />
                    <div className="absolute inset-0 bg-white opacity-6"></div> {/* Semi-transparent overlay */}
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-5xl px-6 py-16 text-center text-gray-800">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-[#c2185b] mb-8"
                        style={{ fontFamily: "'Pacifico', cursive" }}
                    >
                        Muskan Makeover
                    </h2>

                    <p
                        className="text-lg md:text-xl mb-6 leading-relaxed"
                        style={{ fontFamily: "'Pacifico', cursive" }}
                    >
                        Muskan Makeover is a beauty studio and academy based in Dehradun, led by a passionate and skilled makeup artist. With over 5 years of hands-on experience in the beauty industry and more than 200 delighted clients, Muskan Makeover is your go-to destination for all things glam. From flawless bridal looks to everyday elegance, Muskan brings out the best version of you with her expert touch. Specializing in professional makeup, stunning hairstyles, deep hair treatments, and complete cosmetology care, she ensures every client feels confident, radiant, and truly special. Whether you’re prepping for a wedding, a party, or a personal transformation, Muskan’s skilled hands and creative vision promise results that go beyond expectations. Trusted by hundreds and backed by years of dedication, Muskan doesn’t just offer a service—she offers an experience. Step into a world of beauty, where every detail matters and every smile is a makeover success story.
                    </p>
                    <ul
                        className="list-disc pl-6 text-left space-y-4 text-lg md:text-xl"
                        style={{ fontFamily: "'Pacifico', cursive" }}
                    >
                        <li className="text-black">
                            <span className="text-[#c2185b] font-semibold">
                                Where 200+ Happy Faces Tell One Story –
                            </span>{" "}
                            Perfection by Muskan Makeover!
                        </li>
                        <li className="text-black">
                            <span className="text-[#c2185b] font-semibold">
                                From Hair to Glam –
                            </span>{" "}
                            5+ Years of Transforming Beauty Into Confidence!
                        </li>
                        <li className="text-black">
                            <span className="text-[#c2185b] font-semibold">
                                Not Just a Makeover, It’s a
                            </span>{" "}
                            Muskan Signature Touch!
                        </li>
                    </ul>
                    <div className="mt-10 text-center">
                        <a
                            href="/portfolio" // Replace with your actual portfolio link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#ad1457] text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[#880e4f] transition-all duration-300"
                            style={{ fontFamily: "'Pacifico', cursive" }}
                        >
                            My Services 💄
                        </a>
                    </div>



                </div>
            </section>
            <BrandScroller />
            <Testimonials />
        </>
    );
};

export default About;
