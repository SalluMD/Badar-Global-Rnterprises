// Branches.jsx
export default function Branches() {
  const cards = [
    {
      title: "INDIA",
      desc: "Hyderabad",
      img: "/assets/Images/Flags/Flag_of_India.png",
    },
    {
      title: "SAUDI ARABIA",
      desc: "Riyadh",
      img: "/assets/Images/Flags/OIP.webp",
    },
    {
      title: "SAUDI ARABIA",
      desc: "Dammam",
      img: "/assets/Images/Flags/OIP.webp",
    },
  ];

  return (
    <section className="pt-20 bg-[#006881]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative h-80 rounded-2xl overflow-hidden shadow-xl cursor-pointer group transition-transform duration-500 hover:scale-105"
            >
              {/* Background Image */}
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-3xl md:text-4xl font-bold text-[#006881] mb-2">
                  {card.title}
                </h3>
                <p className="text-black text-xl md:text-2xl font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
