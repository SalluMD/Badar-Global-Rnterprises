// Testimonials.jsx
import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard, A11y } from "swiper/modules";
import backgroundImage from "../../public/assets/Images/HeroSection/11.jpg";

// Swiper styles (required)
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
      rating: 5,
      avatar: "https://i.pravatar.cc/80?img=1",
    },
    {
      name: "Michael Lee",
      role: "Head of IT, GlobalMart",
      feedback:
        "The team delivered beyond our expectations. Their expertise and professionalism helped us launch faster and stronger.",
      rating: 5,
      avatar: "https://i.pravatar.cc/80?img=5",
    },
    {
      name: "Aisha Khan",
      role: "Director, FutureWorks",
      feedback:
        "Reliable, innovative, and customer-centric. We’ve seen tremendous growth after adopting their enterprise solutions.",
      rating: 5,
      avatar: "https://i.pravatar.cc/80?img=15",
    },
    {
      name: "David Wilson",
      role: "CTO, FinTech Hub",
      feedback:
        "Excellent communication and fast delivery. They’re truly a partner we can rely on.",
      rating: 5,
      avatar: "https://i.pravatar.cc/80?img=10",
    },
    {
      name: "Priya Sharma",
      role: "Founder, EduNext",
      feedback:
        "Our student platform reached new heights thanks to their technology solutions. Highly recommended!",
      rating: 5,
      avatar: "https://i.pravatar.cc/80?img=20",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-center bg-cover bg-fixed" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Trusted by enterprises worldwide — measurable impact, real results.
          </p>
        </div>

        <div className="relative">
          {/* Custom nav buttons */}
          <button
            ref={prevRef}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white shadow ring-1 ring-gray-200 hover:bg-indigo-50 focus:outline-none"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 text-gray-800" />
          </button>
          <button
            ref={nextRef}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white shadow ring-1 ring-gray-200 hover:bg-indigo-50 focus:outline-none"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 text-gray-800" />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay, Keyboard, A11y]}
            // hook custom buttons before init
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}      // ← left/right arrow keys
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
            style={{
              // Tweak pagination color via CSS vars
              "--swiper-pagination-color": "#4F46E5",
              "--swiper-pagination-bullet-inactive-opacity": "0.35",
            }}
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx} className="h-auto my-5">
                <div className="h-full min-h-[350px] my-5 flex flex-col justify-between p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
                  {/* avatar + stars */}
                  <div className="flex flex-col items-center mb-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-25 w-25 rounded-full ring-2 ring-indigo-100 mb-3 object-cover"
                    />
                    {/* <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div> */}
                  </div>

                  {/* feedback */}
                  <p className="text-gray-600 italic mb-3 flex-grow">
                    “{t.feedback}”
                  </p>

                  {/* name/role pinned to bottom */}
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
