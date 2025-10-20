import { motion } from "framer-motion";

export default function OurClients() {
  const clients = [
    { logo: "/assets/Images/Clients/1.png" },
    { logo: "/assets/Images/Clients/2.png" },
    { logo: "/assets/Images/Clients/3.png" },
    { logo: "/assets/Images/Clients/4.png" },
    { logo: "/assets/Images/Clients/5.png" },
    { logo: "/assets/Images/Clients/6.png" },
    { logo: "/assets/Images/Clients/7.png" },
    { logo: "/assets/Images/Clients/8.png" },
    { logo: "/assets/Images/Clients/9.png" },
    { logo: "/assets/Images/Clients/10.png" },
    { logo: "/assets/Images/Clients/11.png" },
    { logo: "/assets/Images/Clients/12.png" },
    { logo: "/assets/Images/Clients/13.png" },
    { logo: "/assets/Images/Clients/14.png" },
    { logo: "/assets/Images/Clients/15.png" },
    { logo: "/assets/Images/Clients/16.png" },
    { logo: "/assets/Images/Clients/17.png" },
    { logo: "/assets/Images/Clients/18.png" },
    { logo: "/assets/Images/Clients/19.png" },
    { logo: "/assets/Images/Clients/20.png" },
    { logo: "/assets/Images/Clients/21.png" },
    { logo: "/assets/Images/Clients/22.png" },
    { logo: "/assets/Images/Clients/23.png" },
    { logo: "/assets/Images/Clients/24.png" },
    { logo: "/assets/Images/Clients/25.png" },
    { logo: "/assets/Images/Clients/26.png" },
    { logo: "/assets/Images/Clients/27.png" },
    { logo: "/assets/Images/Clients/28.png" },
    { logo: "/assets/Images/Clients/29.png" },
    { logo: "/assets/Images/Clients/30.png" },
    { logo: "/assets/Images/Clients/31.png" },
    { logo: "/assets/Images/Clients/32.png" },
    { logo: "/assets/Images/Clients/33.png" },
    { logo: "/assets/Images/Clients/34.png" },
    { logo: "/assets/Images/Clients/35.png" },
    { logo: "/assets/Images/Clients/36.png" },
    { logo: "/assets/Images/Clients/37.png" },
    { logo: "/assets/Images/Clients/38.png" },
    { logo: "/assets/Images/Clients/39.png" },
    { logo: "/assets/Images/Clients/40.png" },
    { logo: "/assets/Images/Clients/41.png" },
    { logo: "/assets/Images/Clients/42.png" },
  ];
const repeatedClients = [...clients, ...clients];
  return (
    <section id="clients" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-black mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Clients & Partners
        </motion.h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          We are proud to collaborate with global leaders and innovators,
          delivering solutions that create lasting impact.
        </p>

        {/* Scrolling Logos */}
        <div className="relative w-full overflow-hidden group py-8 bg-gray-50">
          <div className="flex gap-10 animate-scroll group-hover:pause-scroll">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="min-w-[180px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[240px] 
                  bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300
                  overflow-hidden p-6 flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={`Client ${i + 1}`}
                  loading="lazy"
                  className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain 
                     hover:scale-110 transition-all duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-800%); }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 180s linear infinite;
          }
          .pause-scroll { animation-play-state: paused !important; }

          @media (max-width: 768px) {
            .animate-scroll { animation-duration: 90s; }
          }
          @media (max-width: 480px) {
            .animate-scroll { animation-duration: 110s; }
          }
        `}
      </style>
    </section>
  );
}
