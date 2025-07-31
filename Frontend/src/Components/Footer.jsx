import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#fff0f6] text-[#333] border-t border-[#f8bbd0] mt-">
      <div className="max-w-6xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#c2185b]" style={{ fontFamily: "'Pacifico', cursive" }}>
            Muskan Makeover
          </h2>
          <p className="text-sm text-gray-600 mt-2">Bringing out the best version of you through beauty, makeup & care.</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#c2185b]" />
            <span>+91 7017376948</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-[#c2185b]" />
            <span>chandranegimuskan@gmail.com</span>
          </div>
          <div className="flex items-start gap-2">
            <FaMapMarkerAlt className="text-[#c2185b] mt-1" />
            <span>Yamnotri Enclave Phase 2, Chandrabani, near Bansal Home Road, Dehradun, Uttarakhand</span>
          </div>
        </div>

        {/* Social & Thanks */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <FaInstagram className="text-[#c2185b]" />
            <a
              href="https://www.instagram.com/muskanglam_makeovers/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c2185b] hover:underline hover:text-[#ad1457]"
            >
              @muskanglam_makeovers
            </a>
          </div>
          <p className="text-sm text-gray-600 italic">Thanks for visiting! 💕</p>
        </div>
      </div>

      <div className="bg-[#f8bbd0] text-center py-4 text-sm text-[#6d214f] rounded-b-3xl">
        © {new Date().getFullYear()} Muskan Makeover. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
