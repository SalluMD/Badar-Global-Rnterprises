// WhyChooseUs.jsx
import { Award, TrendingUp, Headphones, CheckCircle2, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Award className="w-10 h-10 text-[#006881]" />,
      title: "Trusted Expertise",
      description:
        "Our team consists of certified professionals with a proven record of delivering scalable enterprise solutions.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-[#006881]" />,
      title: "Business Growth",
      description:
        "We don’t just provide services — we enable your business to grow, adapt, and outperform the competition.",
    },
    {
      icon: <Headphones className="w-10 h-10 text-[#006881]" />,
      title: "Always Available",
      description:
        "From onboarding to troubleshooting, our dedicated support team is available 24/7 to keep you moving forward.",
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-[#006881]" />,
      title: "Quality First",
      description:
        "Every solution passes through rigorous testing and QA processes to ensure top-notch performance.",
    },
    {
      icon: <Globe className="w-10 h-10 text-[#006881]" />,
      title: "Global Reach",
      description:
        "We work with clients across multiple industries and continents, adapting solutions to diverse market needs.",
    },
    {
      icon: <Shield className="w-10 h-10 text-[#006881]" />,
      title: "Security Focused",
      description:
        "Your data and business processes are protected with industry-leading security practices and compliance standards.",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-[#006881] to-[#006881]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Why Businesses Choose Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-white mb-12 max-w-3xl mx-auto"
        >
          Partnering with us means choosing a team committed to your success. 
          We combine innovation, expertise, and customer-first values to build 
          solutions that truly make a difference.
        </motion.p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-8 border rounded-2xl shadow-sm bg-white hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <a
            href="/contact"
            className="inline-block px-6 py-3 text-[#006881] font-semibold rounded-lg bg-white hover:bg-[#6f1634] hover:text-white transition"
          >
            Let’s Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
}
