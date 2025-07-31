import React from 'react';
import { Link } from 'react-router-dom';
import Service1 from '../assets/p2.jpg';
import Service2 from '../assets/service2.jpg';
import Service3 from '../assets/services3.jpg';
import Service4 from '../assets/service4.jpg';
import Service5 from '../assets/p10.jpg';
import Service6 from '../assets/p15.jpg';
// import Service7 from '../assets/service7.jpg';

const services = [
    {
        title: 'Makeup Services',
        description: 'Bridal makeup, party makeup, engagement makeup, and more – transforming you for every occasion with a flawless touch.',
        image: Service1,
        path: '/services/makeup',
    },
    {
        title: 'Beauty Treatments',
        description: 'Facials, cleanups, skin treatments and rejuvenation to bring out your natural glow and maintain skin health.',
        image: Service2,
        path: '/services/beauty',
    },
    {
        title: 'Hair Services & Care',
        description: 'Haircuts, styling, hair spa, and treatments to give you that perfect bounce, shine, and style.',
        image: Service3,
        path: '/services/hair',
    },
    {
        title: 'Nail Art & Extensions',
        description: 'Trendy nail art, gel extensions, manicures & pedicures that make your hands and feet pop.',
        image: Service4,
        path: '/services/nail',
    },
    {
        title: 'Hair Styling ',
        description: 'Relaxing spa sessions and intensive hair therapy treatments to rejuvenate scalp and strands.',
        image: Service5,
        path: '/services/hair-spa',
    },
    {
        title: 'Event Makeup & Styling',
        description: 'Specialized makeup and hairstyling for events, photoshoots, and special occasions to ensure you look your best.',
        image: Service6,
        path: '/services/event-makeup',
    },
];

const Services = () => {
    return (
        <section className="bg-[#fff0f6] py-10 px-4 sm:px-8 md:px-10" id="services">
            <div className="text-center mb-10 mt-20">
                <h2
                    className="text-4xl font-bold text-[#c2185b]"
                    style={{ fontFamily: "'Pacifico', cursive" }}
                >
                    My Services
                </h2>
                <p className="text-gray-600 mt-2 text-lg max-w-xl mx-auto">
                    Explore the range of personalized beauty services offered by Muskan Makeover in Dehradun.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-pink-300 transition-shadow duration-300 flex flex-col"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-96 object-cover"
                        />
                        <div className="p-6 flex-grow">
                            <h3 className="text-2xl font-semibold text-[#ad1457] mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-700 text-base">{service.description}</p>
                        </div>
                        <div className="px-6 pb-6">
                            <Link to={"/portfolio"} className="inline-block">
                                <button className="bg-[#f06292] text-white px-4 py-2 ml-20 cursor-pointer rounded-full text-sm hover:bg-[#ec407a] transition-all duration-300">
                                    Explore {service.title.split(' ')[0]}
                                </button>
                            </Link>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
