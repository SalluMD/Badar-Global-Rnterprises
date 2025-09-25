// OurClients.jsx
export default function OurClients() {
  const clients = [
    {
      name: "Dana Group",
      logo: "./../../public/assets/Images/Clients/  (1).jpg",
      desc: "Partnered for enterprise cloud and AI-driven business solutions.",
      tag: "Global Partner",
    },
    {
      name: "Dana Group",
      logo: "./../../public/assets/Images/Clients/  (2).jpg",
      desc: "Delivered scalable eCommerce and AWS cloud integrations.",
      tag: "Fortune 500",
    },
    {
      name: "xyz",
      logo: "./../../public/assets/Images/Clients/  (3).jpg",
      desc: "Built data-driven solutions leveraging Google Cloud & AI APIs.",
      tag: "Innovation Partner",
    },
    {
      name: "BNE",
      logo: "./../../public/assets/Images/Clients/  (4).jpg",
      desc: "Enterprise-grade software and automation solutions for global clients.",
      tag: "Tech Leader",
    },
    {
      name: "Dana Group",
      logo: "./../../public/assets/Images/Clients/  (1).jpg",
      desc: "Enhanced creative and digital workflows with Adobe enterprise tools.",
      tag: "Creative Partner",
    },
    {
      name: "BNE",
      logo: "./../../public/assets/Images/Clients/  (2).jpg",
      desc: "Implemented secure ERP and database management solutions.",
      tag: "Enterprise Partner",
    },
  ];

  return (
    <section
      id="clients"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Our Clients & Partners
        </h2>
        <p className="text-lg text-gray-600 mb-12">
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
                           bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden 
                           p-6 flex flex-col items-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-10 sm:h-12 md:h-14 lg:h-12 mb-4 grayscale hover:grayscale-0 transition duration-300"
                />
                <h3 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">
                  {client.name}
                </h3>
                <span className="text-[10px] sm:text-xs text-indigo-600 font-medium mt-1">
                  {client.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind custom animation with responsive speeds */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 18s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 28s linear infinite; /* slower on tablets */
          }
        }
        @media (max-width: 480px) {
          .animate-scroll {
            animation: scroll 35s linear infinite; /* even slower on phones */
          }
        }
        .pause-scroll {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}
