// WhyChooseUs.jsx
import { Award, TrendingUp, Headphones, CheckCircle2, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const reasons = [

    {
      icon: <Award className="w-12 h-12 text-[#006881]" />,
      title: "Credibility",
      description:
        "Trusted by 500+ clients worldwide, BG stands as a proven name in reliability, performance, and excellence across diverse industries.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-[#006881]" />,
      title: "Scale",
      description:
        "With a presence across multiple continents, we possess the capability and infrastructure to handle projects of any size or complexity—from local initiatives to global ventures.",
    },
    {
      icon: <Headphones className="w-12 h-12 text-[#006881]" />,
      title: "Always Available",
      description:
        "From onboarding to troubleshooting, our dedicated support team is available 24/7 to keep you moving forward.",
    },
    {
      icon: <CheckCircle2 className="w-12 h-12 text-[#006881]" />,
      title: "Expertise",
      description:
        "Our team of multi-disciplinary professionals combines technical know-how, industry experience, and innovation to ensure world-class quality in every project.",
    },
    {
      icon: <Shield className="w-12 h-12 text-[#006881]" />,
      title: "Commitment",
      description:
        "We dedicate our time, resources, and creativity to achieving each client’s goals—delivering solutions that are efficient, cost-effective, and result-driven.",
    },
    {
      icon: <Globe className="w-12 h-12 text-[#006881]" />,
      title: "Global Vision",
      description:
        "By merging international expertise with localized execution, BG delivers customized strategies that meet regional needs while maintaining global standards.}",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative py-24 bg-gradient-to-b from-white via-[#f9fafb] to-[#eef5f7] overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-4 bg-black bg-clip-text text-transparent"
        >
          Why Businesses Choose Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 mb-14 max-w-6xl mx-auto leading-relaxed"
        >
          Partnering with us means choosing a team committed to your success.
          At Badar Global Enterprises Pvt. Ltd. (BG), we go beyond delivering services —
          we build lasting partnerships that drive measurable success. By combining innovation, expertise,
          and a customer-first approach, we create solutions that truly make a difference.
          That’s why global organizations trust us as their preferred business partner.
        </motion.p>

        {/* Cards Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-5">{reason.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#006881] transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>

              {/* subtle gradient hover border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#006881]/30 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <a
            href="/contact"
            className="inline-block px-8 py-4 text-lg font-semibold text-white rounded-full bg-[#006881] hover:bg-[#6f1634] shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1"
          >
            Let’s Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
}
