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
            src="../../public/assets/Images/Profile/PP.jpg"
            alt="Founder"
            className="w-48 h-48 rounded-full shadow-lg border-4 border-white object-cover"
          />
          <div className="md:ml-10 mt-6 md:mt-0 text-center md:text-left">
            <h1 className="text-4xl font-bold">MOHAMMED ARIF</h1>
            <p className="text-xl mt-2">Founder & Executive Director, BGE Pvt. Ltd.</p>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a
                href="https://www.facebook.com/share/16NV5Uw76e/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-3 rounded-full hover:bg-blue-500 transition"
              >
                <FaFacebookF size={16} />
              </a>
              <a href="https://www.linkedin.com/in/mohammed-arif-08b39916a"

                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-3 rounded-full hover:bg-blue-400 transition"
              >
                <FaLinkedinIn size={16}/>
              </a>
              <a href="https://x.com/arifmohamm92527"

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
                className="bg-white/20 p-3 rounded-full hover:bg-green-500 transition">
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Founder</h2>
          <p className="text-gray-600 mt-2 max-w-l py-4 mx-auto text-justify">
            Mohammed Arif, the founder of Badar Global Enterprise Pvt Ltd, 
            established the company in 2005 with a vision to deliver excellence across diverse industries. 
            Headquartered in India and with a strategic branch in Saudi Arabia, 
            Mohammed Arif has led the company to become a trusted name, 
            successfully completing numerous projects and offering a wide range of innovative services. 
            With an unwavering commitment to quality, innovation, and global collaboration, 
            Mohammed Arif has built a legacy of transformative solutions, 
            driving the company’s growth across borders and establishing Badar Global Enterprise as a leader in its field.
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
            <p className="text-gray-700 mt-4 text-justify">
              Under Mohammed Arif’s leadership, Badar Global Enterprise has grown from a visionary startup to 
              a powerhouse with a strong presence in India and Saudi Arabia. 
              His strategic foresight and dedication to fostering partnerships have enabled the company 
              to undertake and deliver high-impact projects across various sectors. 
            </p>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Mohammed Arif: Visionary Founder & Leader of Badar Global Enterprise Pvt Ltd
            </h3>

            <p className="text-gray-600 mb-4 text-justify">
              Mohammed Arif’s ability to anticipate market needs and adapt to changing global trends has been instrumental in positioning the company as 
              a go-to provider of innovative and reliable services, earning accolades for both quality and efficiency.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-[#006881] w-10 h-10" />
                <span className="text-gray-700 text-justify">
                  Visionary Leadership: Mohammed Arif founded Badar Global Enterprise Pvt Ltd in 2005, driving its growth into 
                  a trusted name with branches in India and Saudi Arabia through strategic vision and innovative solutions.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-[#006881] w-10 h-10" />
                <span className="text-gray-700 text-justify">
                  Project Excellence: Under Mohammed Arif’s guidance, the company has successfully completed numerous high-impact projects, 
                  delivering top-quality services across diverse sectors.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-[#006881] w-10 h-10" />
                <span className="text-gray-700 text-justify">
                  Global Impact: Mohammed Arif’s commitment to quality and sustainability has positioned Badar Global Enterprise as a leader, 
                  fostering partnerships and contributing to economic and community development in India and Saudi Arabia.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 text-justify">
              Mohammed Arif’s entrepreneurial journey is marked by a relentless pursuit of 
              excellence and a deep commitment to social and economic progress. 
            </p>

            {/* Video Thumbnail with Play Button */}
            <div
              onClick={() => setIsOpen(true)}
              className="relative rounded-lg overflow-hidden shadow-md cursor-pointer group"
            >
              <img
                src="../../public/assets/Images/Profile/8.jpg"
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
          <p className="text-justify">
             His leadership philosophy emphasizes empowering teams, embracing cutting-edge technologies, 
             and maintaining a client-centric approach, which has cultivated a culture of trust and innovation within the organization. 
          </p>
          <p className="text-justify">
            By fostering sustainable practices and community engagement, Mohammed Arif ensures that Badar Global Enterprise not only achieves business success but also contributes meaningfully to the regions it serves, 
            leaving a lasting impact on both local and international landscapes.
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
            <p className="text-gray-700 text-justify">
              To empower businesses worldwide by providing cutting-edge
              solutions and creating opportunities for growth, sustainability,
              and innovation.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-[#006881]">Mission</h3>
            <p className="text-gray-700 text-justify">
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
<section className="bg-[#006881] py-20">
  <div className="max-w-6xl mx-auto px-6 text-white">
    <h2 className="text-4xl font-bold text-center mb-12">
      Key Achievements
    </h2>

    <div className="grid md:grid-cols-2 gap-10">
      {/* Achievement Card 1 */}
      <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-semibold mb-3">
          Forbes 30 Under 40
        </h3>
        <p className="text-gray-600">
          Recognized as one of the top entrepreneurs shaping the future of tech.
        </p>
      </div>

      {/* Achievement Card 2 */}
      <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-semibold mb-3">
          GlobalCorp IPO
        </h3>
        <p className="text-gray-600">
          Successfully led the company to go public with a $1B valuation.
        </p>
      </div>
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
      <CTA />
    </div>
  );
}
