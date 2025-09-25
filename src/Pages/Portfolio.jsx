import {
  FaFacebookF,
  FaEnvelope,
  FaPhone,
  FaLinkedinIn,
} from "react-icons/fa";
import { CheckCircle } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";
import { Briefcase, Rocket, Globe } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6"; // New X icon
import "./../Components/CTA"
import CTA from "./../Components/CTA";



export default function FounderPortfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const journey = [
    {
      year: "2000 - 2004",
      icon: <Briefcase className="w-6 h-6 text-white" />,
      desc: "Started professional journey, gaining experience and building the foundation for future ventures.",
      img: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      year: "2005 - 2024",
      icon: <Rocket className="w-6 h-6 text-white" />,
      desc: "Founded Badar Global Enterprises, starting with a small team and global ambitions.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      year: "2024 - Present",
      icon: <Globe className="w-6 h-6 text-white" />,
      desc: "Scaled BGE into a multinational enterprise with 10k+ clients worldwide.",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#006881] to-[#006881] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <img
            src="../../public/assets/Images/Founder_pic.png"
            alt="Founder"
            className="w-48 h-48 rounded-full shadow-lg border-4 border-white object-cover"
          />
          <div className="md:ml-10 mt-6 md:mt-0 text-center md:text-left">
            <h1 className="text-4xl font-bold">MOHAMMED ARIF</h1>
            <p className="text-xl mt-2">Founder & Executive Director, BGE Pvt. Ltd.</p>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-3 rounded-full hover:bg-blue-500 transition"
              >
                <FaFacebookF size={16} />
              </a>
              <a href="https:// linkedin.com/"

                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-3 rounded-full hover:bg-blue-400 transition"
              >
                <FaLinkedinIn size={16}/>
              </a>
              <a href="https://x.com/"

                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-3 rounded-full hover:bg-black transition"
              >
                <FaXTwitter size={16}/>
              </a>
              <a
                href="mailto:mohammedarif@badarglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-3 rounded-full hover:bg-red-500 transition"
              >
                <FaEnvelope size={16}/>
              </a>
              <a href="tel:+1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-3 rounded-full hover:bg-green-700 transition">
                <FaPhone />
              </a>
              {/* <a href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-3 rounded-full hover:bg-blue-500 transition">
                <FaGlobe size={16}/>
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
          {/* Left Image */}
          <div>
            <img
              src="../../public/assets/Images/image2.png"
              alt="About us"
              className="rounded-lg shadow-md"
            />
            <p className="text-gray-700 mt-4">
              Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis
              quod nisi et. Placeat debitis quia recusandae odit et consequuntur
              voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.
            </p>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Voluptatem dignissimos provident laboris nisi ut aliquip ex ea
              commodo
            </h3>

            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-[#006881] w-5 h-5 mt-1" />
                <span className="text-gray-700">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-[#006881] w-5 h-5 mt-1" />
                <span className="text-gray-700">
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-[#006881] w-5 h-5 mt-1" />
                <span className="text-gray-700">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident.
            </p>

            {/* Video Thumbnail with Play Button */}
            <div
              onClick={() => setIsOpen(true)}
              className="relative rounded-lg overflow-hidden shadow-md cursor-pointer group"
            >
              <img
                src="../../public/assets/Images/HeroSection/3.jpg"
                alt="Team work"
                className="w-full group-hover:scale-105 transition duration-300"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-white/50 bg-opacity-40 text-[#6f1f34] text-6xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16" viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 22v-20l18 10-18 10z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="max-w-5xl mx-auto text-gray-700 space-y-4">
          <p>
            Temporibus nihil enim deserunt sed ea. Provident sit expedita aut
            cupiditate nihil vitae quo officia vel. Blanditiis eligendi possimus
            et in cum. Quidem eos ut sint rem veniam qui.
          </p>
          <p>
            Ut ut repellendus nobis tempore doloribus debitis explicabo similique
            sint. Accusantium sed ut omnis beatae neque deleniti repellendus.
          </p>
        </div>

        {/* Video Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              >
                <X size={20} />
              </button>

              {/* YouTube Video */}
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/t-_JQRUrO3U?autoplay=1"
                  title="About Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="bg-white shadow-md rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-[#006881]">Vision</h3>
            <p className="text-gray-700">
              To empower businesses worldwide by providing cutting-edge
              solutions and creating opportunities for growth, sustainability,
              and innovation.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-[#006881]">Mission</h3>
            <p className="text-gray-700">
              To build a global enterprise that values people, ethics, and
              technology while delivering transformative impact to clients and
              communities.
            </p>
          </div>
        </div>
      </section>

      {/* Career Journey */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Career Journey
          </h2>

          <div className="relative border-l-4 border-blue-600">
            {journey.map((item, index) => (
              <div key={index} className="mb-12 ml-6 group relative">

                <span className="absolute -left-5 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 shadow-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>

                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.year}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.year}
                    </h3>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Skills & Expertise */}
      {/* <section className="bg-[#006881] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              "Business Strategy",
              "Leadership",
              "Innovation",
              "Global Expansion",
              "Public Speaking",
              "Networking",
              "Investment",
              "Corporate Governance",
            ].map((skill, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
              >
                <p className="font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Achievements */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Achievements</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-xl">Forbes 30 Under 40</h3>
            <p className="mt-2 text-gray-700">
              Recognized as one of the top entrepreneurs shaping the future of
              tech.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-xl">GlobalCorp IPO</h3>
            <p className="mt-2 text-gray-700">
              Successfully led the company to go public with a $1B valuation.
            </p>
          </div>
        </div>
      </section>

      {/* Press & Media */}
      {/* <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Press & Media Mentions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <img src="https://via.placeholder.com/150" alt="Forbes" />
            <img src="https://via.placeholder.com/150" alt="Times" />
            <img src="https://via.placeholder.com/150" alt="CNN" />
            <img src="https://via.placeholder.com/150" alt="TechCrunch" />
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md rounded-2xl p-6">
              <p className="text-gray-700 italic">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid exercitationem asperiores obcaecati nesciunt facere debitis incidunt"
              </p>
              <p className="mt-4 font-semibold">— Andul Saleem, CEO of WCS</p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6">
              <p className="text-gray-700 italic">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid exercitationem asperiores obcaecati nesciunt facere debitis incidunt"
              </p>
              <p className="mt-4 font-semibold">
                — Mohammed Ali, Founder of Al Zabiha Pvt. Ltd.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="bg-gradient-to-r from-[#006881] to-[#006881] text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">
            Interested in collaboration or partnerships? Feel free to connect
            with me.
          </p>
          <a
            href="mailto:john@globalcorp.com"
            className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-yellow-300 transition"
          >
            Contact Me
          </a>
        </div>
      </section> */}
      <CTA />
    </div>
  );
}
