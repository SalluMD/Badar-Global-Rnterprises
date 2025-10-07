import { motion } from "framer-motion";
import { react } from "react"
 

// OurClients.jsx



export default function OurClients() {
  const clients = [
    {
      name: "Dana Group",
      logo: "/assets/Images/Clients/1.jpg",
      tag: "Global Partner",
    },
    {
      name: "Fortune Co.",
      logo: "/assets/Images/Clients/2.jpg",
      tag: "Fortune 500",
    },
    {
      name: "XYZ Tech",
      logo: "/assets/Images/Clients/3.jpg",
      tag: "Innovation Partner",
    },
    {
      name: "BNE",
      logo: "/assets/Images/Clients/4.jpg",
      tag: "Tech Leader",
    },
    {
      name: "Creative Co.",
      logo: "/assets/Images/Clients/5.jpg",
      tag: "Creative Partner",
    },
    {
      name: "ERP Global",
      logo: "/assets/Images/Clients/6.jpg",
      tag: "Enterprise Partner",
    },
  ];

  return (
    <section
      id="clients"
      className="py-20 bg-white relative overflow-hidden"
    >
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

        {/* Scrolling Container */}
        <div className="relative w-full overflow-hidden group">
          <div className="flex gap-8 animate-scroll group-hover:pause-scroll">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="min-w-[180px] sm:min-w-[220px] md:min-w-[200px] lg:min-w-[180px] 
                           bg-white rounded-xl shadow-sm hover:shadow-lg transition 
                           overflow-hidden p-6 flex flex-col items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  className="h-10 sm:h-12 md:h-14 lg:h-12 mb-3 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
                <h3 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">
                  {client.name}
                </h3>
                <span className="text-[10px] sm:text-xs text-[#006881] font-medium mt-1">
                  {client.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for scroll animation */}
      <style>
  {`
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-scroll {
      animation: scroll 18s linear infinite;
    }
    @media (max-width: 768px) {
      .animate-scroll { animation: scroll 28s linear infinite; }
    }
    @media (max-width: 480px) {
      .animate-scroll { animation: scroll 35s linear infinite; }
    }
    .pause-scroll { animation-play-state: paused !important; }
  `}
</style>

    </section>
  );
}
