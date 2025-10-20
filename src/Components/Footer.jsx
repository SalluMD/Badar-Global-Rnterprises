// Footer.jsx
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6"; // New X icon
import BranchesData from "../Components/BranchesData";




export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-5 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Badar Global Enterprises
          </h2>
          <p className="text-gray-400 text-sm leading-6">
            Delivering innovation, reliability, and scalable enterprise
            solutions across industries worldwide.
            <br /> Our vision is to empower businesses with cutting-edge
            technology and sustainable practices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/ourprojects" className="hover:text-white">Our Projects</Link></li>
            <li><Link to="/team" className="hover:text-white">Our Team</Link></li>
            <li><Link to="/blog" className="hover:text-white">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">What We Do</h3>
          <ul className="space-y-2 text-sm">
            <li>Project management </li>
            <li>Man power supply</li>
            <li>Import / Export</li>
            <li>Information Technology</li>
            <li>Building material</li>
            <li>Land scaping & construction</li>
            <li>Trading of Multiple items</li>
            <li>Health Surgical's/sectors</li>
            <li>Facility management Amc/CAMC</li>
            <li>logistics and transportation automobiles</li>
          </ul>
        </div>

        {/* Contact & Office Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">{BranchesData.headOffice.branchName}</h3>
          <p className="text-sm">{BranchesData.headOffice.address}</p>
          <p className="mt-2 text-sm">📞 India : {BranchesData.headOffice.phone}</p>
          <p className="mt-2 text-sm">📧 {BranchesData.headOffice.email}</p>
          <p className="mt-3 text-sm">🕒 Mon - Sat: {BranchesData.headOffice.workingHours.mondayToFriday}</p>
          <p className="text-sm">🕒 Sunday: {BranchesData.headOffice.workingHours.sunday}</p>
        </div>

        {/* Newsletter / Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>


          {/* <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm rounded-l-md outline-none text-gray-800"
            />
            <button className="bg-indigo-600 px-4 py-2 text-sm rounded-r-md hover:bg-indigo-700">
              Subscribe
            </button>
          </form> */}

          <div className="flex items-center space-x-4 mt-4">
            <a
              href={BranchesData.headOffice.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 p-2 rounded-full hover:bg-blue-500 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href={BranchesData.headOffice.socialMedia.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 p-2 rounded-full hover:bg-black transition"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href={BranchesData.headOffice.socialMedia.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 p-2 rounded-full hover:bg-blue-400 transition"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href={BranchesData.headOffice.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 p-2 rounded-full hover:bg-pink-500 transition"
            >
              <FaInstagram size={20} />
            </a>
          </div>

          <Link to="/terms" className="mt-6 block text-sm hover:text-white">
            Terms & Conditions
          </Link>
          <Link to="/privacy-policy" className="mt-3 block text-sm hover:text-white">
            Privacy Policy
          </Link>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} Badar Global Enterprises. All rights reserved.
        </p>
        {/* <p className="mt-1 text-xs">
          Designed & Developed by MUHAMMAD SALAHUDDIN
        </p> */}
      </div>
    </footer>
  );
}
