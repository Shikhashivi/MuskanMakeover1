import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import ModelImage from "../assets/contact-model.jpg";

const Contact = () => {
  return (
    <section
      className="bg-gradient-to-br from-[#fff0f6] to-[#fce4ec] py-16 px-6 md:px-12"
      id="contact"
    >
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">

        {/* Left: Image */}
        <div className="md:col-span-2">
          <img
            src={ModelImage}
            alt="Muskan Makeover"
            className="rounded-3xl shadow-xl w-full object-cover border-2 border-white"
          />
        </div>

        {/* Right: Contact + Opening Hours */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Info */}
          <div>
            <h2
              className="text-4xl font-bold text-[#c2185b] mb-6"
              style={{ fontFamily: "'Pacifico', cursive" }}
            >
              Meet Muskan Makeover
            </h2>

            <div className="space-y-6 text-[#333] text-lg">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#c2185b]" />
                <span className="tracking-wide">+91 7017376948</span>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#c2185b]" />
                <span className="tracking-wide">chandranegimuskan@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#c2185b]" />
                <span className="tracking-wide">
                  Yamnotri Enclave Phase 2, Pithuwala,
                  <br />Chandrabani, Near Bansal Home Road, Dehradun, Uttarakhand
                </span>
              </div>
              <div className="flex items-center gap-4">
                <FaInstagram className="text-[#c2185b]" />
                <a
                  href="https://www.instagram.com/muskanglam_makeovers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-[#ad1457] tracking-wide"
                >
                  @muskanglam_makeovers
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="bg-[#fff0f6] p-6 rounded-2xl shadow-inner text-[#333]">
            <h3 className="text-2xl font-semibold text-[#c2185b] mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-base">
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
                (day) => (
                  <li key={day} className="flex justify-between">
                    <span>{day}</span>
                    <span>11:00 AM – 10:00 PM</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* WhatsApp Button at Bottom */}
      <div className="mt-10 text-center">
        <a
          href="https://api.whatsapp.com/send?phone=917017376948&text=Hi%20Muskan%2C%20I%20am%20interested%20in%20your%20makeup%20services"
          target="How Can I Help You?"
          rel="noopener noreferrer"
          className="inline-block bg-[#f06292] text-white px-8 py-4 rounded-full text-sm hover:bg-[#ec407a] transition-all duration-300 cursor-pointer shadow-lg"
        >
          📲 Message on WhatsApp
        </a>


      </div>
    </section>
  );
};

export default Contact;
