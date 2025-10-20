import { Fragment } from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaUsers, FaAward, FaHandshake } from "react-icons/fa";
import Hero from "../Components/Hero";
import CTA from "../Components/CTA";

// Animation variants
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
};

export default function WhoWeAre() {
    return (
        <Fragment>

            {/* Company Intro */}
            <section className="py-20 bg-gray-50">
                <motion.div
                    className="max-w-5xl mx-auto px-6 text-center"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                        We Are{" "}
                        <span className="text-[#006881] underline decoration-4 underline-offset-4">
                            Badar Global Enterprise
                        </span>{" "}
                        Private Limited
                    </h2>
                    <h5 className="text-2xl md:text-xl font-extrabold text-gray-900 mb-6 leading-tight">
                        “Delivering Multi-Sector Excellence with Integrity, Innovation & Impact.”
                    </h5>

                    <section className="relative py-16 px-6 md:px-12 lg:px-2 overflow-hidden">
                        <motion.div
                            className="relative max-w-6xl mx-auto space-y-10 text-gray-600"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="space-y-6 text-left md:text-justify text-lg leading-relaxed">
                                <p>
                                    Founded in <strong>2005</strong> by{" "}
                                    <strong>Mr. Mohammed Arif, Badar Global Enterprises Pvt. Ltd.</strong>{" "}
                                    (BGE) has evolved into a globally trusted, multi-sector organization delivering excellence across
                                    <span className="font-semibold text-[#006881]"> 25+ industries</span>.
                                    With over <strong>500+</strong> satisfied clients — including government,
                                    semi-government, multinational, and private enterprises — BGE stands as a
                                    symbol of <strong>trust, performance, and innovation.</strong>
                                </p>

                                <p>
                                    <strong className="text-[#006881]">BG is not just a business group — we are a strategic partner</strong> committed to delivering
                                    <strong> high-quality, customized solutions </strong> tailored to each client’s unique needs.
                                    Since our inception, our focus has remained clear and consistent:
                                </p>

                                <ul className="space-y-3 pl-6 list-disc marker:text-[#006881]">
                                    <li>
                                        <span className="font-semibold">Integrity in Execution – </span>Delivering what we promise, every time.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Innovation in Approach – </span>Leveraging cutting-edge technology and global best practices.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Impact in Results – </span>Creating measurable, sustainable value for our clients.
                                    </li>
                                </ul>

                                <p>
                                    We specialize in a diverse portfolio of services including{" "}
                                    <span className="font-medium text-gray-600">
                                        project management, manpower supply, import & export operations, information technology,
                                        building materials, landscaping & construction, multi-item trading, healthcare & surgical supplies,
                                        facility management, logistics & transportation, and tour & travel solutions.
                                    </span>{" "}
                                    The company serves as a trusted partner for organizations seeking efficiency and growth.
                                </p>

                                <p>
                                    At Badar Global, we believe in <strong>seamless execution from concept to completion</strong>.
                                    Our team combines expertise, advanced technology, and strategic insight to craft
                                    tailored solutions that empower businesses toward <strong>sustainable growth</strong> and operational excellence.
                                </p>

                                <p>
                                    Under the visionary leadership of{" "}
                                    <span className="font-medium text-[#006881]">Mr. Mohammed Arif</span>, BG champions
                                    reliability, sustainability, and client-centric values — going beyond service delivery
                                    to build <strong>long-term partnerships</strong> founded on trust, transparency, and measurable success.
                                </p>

                                <p>
                                    Whether it’s supplying skilled professionals, streamlining global trade, or delivering
                                    end-to-end IT and facility maintenance solutions, BG ensures <strong>efficiency</strong> without
                                    compromising <strong>timelines or budgets.</strong>
                                </p>

                                <p>
                                    Our commitment to <strong>eco-friendly practices, safety, and innovation</strong> drives
                                    everything we do — from sustainable construction and landscaping to healthcare
                                    and travel management — contributing to <strong>economic progress</strong> and a better future.
                                </p>

                                <p className="text-gray-600 font-medium italic text-center md:text-left">
                                    At Badar Global Enterprises, we don’t just provide services —
                                    <span className="text-[#006881] font-semibold"> we deliver solutions that move businesses forward.</span>
                                </p>
                            </div>
                        </motion.div>
                    </section>
                </motion.div>
            </section>


            {/* Leadership Section */}
            <section className="py-20 bg-[#006881]">
                <motion.div
                    className="max-w-6xl mx-auto px-6 text-center"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >

                    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                        <img
                            src="../../public/assets/Images/Profile/7.jpg"
                            alt="Founder"
                            className="w-80 h-80 rounded-full object-cover shadow-lg border-4 border-white"
                            loading="lazy"
                        />
                        <div className="text-left max-w-lg">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Meet Our Founder
                            </h2>
                            <h3 className="text-2xl font-semibold text-white/80">
                                Mohammed Arif
                            </h3>
                            <p className="text-[#006881] font-medium mb-3">
                                Founder & CEO, Badar Global Enterprise
                            </p>
                            <p className="text-white leading-relaxed">
                                A visionary leader with decades of experience in business
                                innovation and strategic development. His leadership has guided
                                Badar Global Enterprise to become a trusted name across multiple
                                industries and regions.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Mission / Vision / Values */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        {
                            title: "Our Mission",
                            icon: <FaGlobe className="text-4xl text-[#006881]" />,
                            text: "To connect global opportunities with sustainable solutions, empowering businesses and communities worldwide.",
                        },
                        {
                            title: "Our Vision",
                            icon: <FaAward className="text-4xl text-[#006881]" />,
                            text: "To be a trusted global enterprise, recognized for innovation, integrity, and excellence in everything we do.",
                        },
                        {
                            title: "Our Values",
                            icon: <FaHandshake className="text-4xl text-[#006881]" />,
                            text: "Integrity, Innovation, Collaboration, and Excellence form the foundation of our culture and operations.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl p-8 text-center transition"
                        >
                            <div className="mb-4 flex justify-center">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-600">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Company Stats */}
            <section className="py-20 bg-[#006881] text-white">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                    {[
                        { number: "20+", label: "Years of Excellence" },
                        { number: "15+", label: "Industries Served" },
                        { number: "100+", label: "Projects Completed" },
                        { number: "500+", label: "Global Clients" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                            <p className="text-white/80">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </Fragment>
    );
}
