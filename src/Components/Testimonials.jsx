// Testimonials.jsx
import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard, A11y } from "swiper/modules";
import { motion } from "framer-motion";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechVision Inc.",
      feedback:
        "Partnering with this company transformed our operations. Their scalable solutions and dedicated support team are unmatched.",
      avatar: "https://i.pravatar.cc/80?img=1",
    },
    {
      name: "Michael Lee",
      role: "Head of IT, GlobalMart",
      feedback:
        "The team delivered beyond our expectations. Their expertise and professionalism helped us launch faster and stronger.",
      avatar: "https://i.pravatar.cc/80?img=5",
    },
    {
      name: "Aisha Khan",
      role: "Director, FutureWorks",
      feedback:
        "Reliable, innovative, and customer-centric. We’ve seen tremendous growth after adopting their enterprise solutions.",
      avatar: "https://i.pravatar.cc/80?img=15",
    },
    {
      name: "David Wilson",
      role: "CTO, FinTech Hub",
      feedback:
        "Excellent communication and fast delivery. They’re truly a partner we can rely on. Highly recommended!",
      avatar: "https://i.pravatar.cc/80?img=10",
    },
    {
      name: "Priya Sharma",
      role: "Founder, EduNext",
      feedback:
        "Our student platform reached new heights thanks to their technology solutions. Highly recommended!",
      avatar: "https://i.pravatar.cc/80?img=20",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#006881] relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#ffffff]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#6f1634]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say
        </motion.h2>
        <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto">
          Trusted by enterprises worldwide — measurable impact, real results.
        </p>

        <div className="relative">
          {/* Custom nav buttons */}
          <button
            ref={prevRef}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-white shadow hover:bg-[#f0f0f0] transition"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button
            ref={nextRef}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-white shadow hover:bg-[#f0f0f0] transition"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay, Keyboard, A11y]}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            slidesPerView={1}
            spaceBetween={24}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="flex flex-col h-full p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
                  <div className="flex flex-col items-center mb-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-24 w-24 rounded-full ring-4 ring-[#006881]/20 mb-3 object-cover"
                    />
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 italic mb-4 flex-grow text-center">
                    “{t.feedback}”
                  </p>

                  <div className="pt-2 text-center">
                    <h3 className="font-semibold text-gray-900">{t.name}</h3>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
