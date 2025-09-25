import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // New X icon
import branches from "../Components/branches.js";

export default function Tooltip() {
  return (
    <div className="w-full bg-[#006881] text-white py-2 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Address */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition">
            <MapPin size={12} />
          </div>
          <a
            href="https://www.google.com/maps/place/Salarjung+Colony,+Rethibowli,+Hyderabad,+Telangana+-+500008"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm"
          >
            {branches.headOffice.address}
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition">
            <Mail size={12} />
          </div>
          <a href={branches.headOffice.email} className="text-xs md:text-sm">
            {branches.headOffice.email}
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition">
            <Phone size={12} />
          </div>
          <a href={`tel:${branches.headOffice.phone}`} className="text-xs md:text-sm">
            {branches.headOffice.phone}
          </a>
        </div>

        {/* Social Media */}
        <div className="flex items-center gap-2">
          <a
            href={branches.headOffice.socialMedia.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 p-2 rounded-full hover:bg-blue-500 transition"
          >
            <FaFacebookF size={12} />
          </a>
          <a
            href={branches.headOffice.socialMedia.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 p-2 rounded-full hover:bg-black transition"
          >
            <FaXTwitter size={12} />
          </a>
          <a
            href={branches.headOffice.socialMedia.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 p-2 rounded-full hover:bg-blue-400 transition"
          >
            <FaLinkedinIn size={12} />
          </a>
          <a
            href={branches.headOffice.socialMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 p-2 rounded-full hover:bg-pink-500 transition"
          >
            <FaInstagram size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
