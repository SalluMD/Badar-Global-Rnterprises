// // Services.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Briefcase,
//   Users,
//   ShieldCheck,
//   Globe,
//   Check,
//   ArrowRight,
// } from "lucide-react";
// import Hero from "../Components/Hero";

// const fadeUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.7 } };
// const fadeLeft = { initial: { opacity: 0, x: -80 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8 } };
// const fadeRight = { initial: { opacity: 0, x: 80 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8 } };

// export default function Services() {
//   return (
//     <main className="text-slate-900 antialiased">
//       <Hero
//         title="Our Services"
//         // subtitle="Innovative solutions tailored to your business needs."
//         backgroundImage="./../../public/assets/Images/Bg-img/service.jpg"
//       />
//       {/* ===== HERO ===== */}
//       <section className="relative overflow-hidden bg-gradient-to-r from-indigo-700 via-indigo-600 to-sky-600 text-white">
//         {/* decorative floating shapes */}
//         <div className="absolute -left-10 -top-24 w-72 h-72 bg-violet-400/20 rounded-full blur-3xl animate-blob-slow pointer-events-none" />
//         <div className="absolute right-0 -bottom-24 w-96 h-96 bg-emerald-400/12 rounded-full blur-2xl animate-blob pointer-events-none" />

//         <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
//           <div className="grid gap-8 md:grid-cols-2 items-center">
//             <motion.div {...fadeUp} className="space-y-6">
//               <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
//                 Transforming businesses with{" "}
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white">
//                   scalable enterprise solutions
//                 </span>
//               </h1>
//               <p className="text-indigo-100 max-w-2xl">
//                 We design, build and operate secure & high-performing systems that
//                 power global growth. Strategy, engineering and managed services
//                 — end-to-end, industry-ready outcomes.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <a
//                   href="#services"
//                   className="inline-flex items-center gap-3 rounded-full bg-white text-indigo-700 px-5 py-3 font-semibold shadow-lg hover:scale-105 transform transition"
//                 >
//                   Explore Services <ArrowRight className="w-4 h-4" />
//                 </a>

//                 <a
//                   href="#contact"
//                   className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 text-white hover:bg-white/10 transition"
//                 >
//                   Talk to an Expert
//                 </a>
//               </div>
//             </motion.div>

//             <motion.div {...fadeRight} className="relative hidden md:block">
//               {/* Right-side mock / illustration card */}
//               <div className="rounded-3xl overflow-hidden shadow-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="space-y-4">
//                     <div className="bg-white/10 rounded-xl p-4">
//                       <h4 className="text-sm text-white/90 font-semibold">Enterprise ERP</h4>
//                       <p className="text-xs text-white/70">Integrated finance, ops & HR</p>
//                     </div>
//                     <div className="bg-white/10 rounded-xl p-4">
//                       <h4 className="text-sm text-white/90 font-semibold">Cloud Migration</h4>
//                       <p className="text-xs text-white/70">Secure lift & optimize</p>
//                     </div>
//                   </div>

//                   <div className="space-y-4">
//                     <div className="bg-white/10 rounded-xl p-4">
//                       <h4 className="text-sm text-white/90 font-semibold">AI & Analytics</h4>
//                       <p className="text-xs text-white/70">Actionable insights</p>
//                     </div>
//                     <div className="bg-white/10 rounded-xl p-4">
//                       <h4 className="text-sm text-white/90 font-semibold">Security Ops</h4>
//                       <p className="text-xs text-white/70">24/7 monitoring</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-6 flex items-center justify-between text-sm text-white/80">
//                   <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-300" /> Trusted by enterprises</span>
//                   <span className="text-xs">Scale-ready • Global</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* subtle bottom wave */}
//         <svg
//           className="w-full block"
//           viewBox="0 0 1440 80"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path fill="#f8fafc" d="M0,32 C360,120 1080,0 1440,64 L1440,80 L0,80 Z" />
//         </svg>
//       </section>

//       {/* ===== Service 1: Business Solutions (image left, text right) ===== */}
//       <section className="bg-slate-50">
//         <div className="max-w-6xl mx-auto px-6 py-16">
//           <div className="grid gap-8 md:grid-cols-2 items-center">
//             <motion.div {...fadeLeft} className="rounded-2xl overflow-hidden shadow-lg">
//               <img
//                 src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=5a9b9e9f6b2a9b6b36a6a6a7b2e6d7c3"
//                 alt="Business Solutions"
//                 className="w-full h-80 object-cover"
//               />
//             </motion.div>

//             <motion.div {...fadeUp} className="space-y-6">
//               <div className="inline-flex items-center gap-3 rounded-full bg-white px-3 py-2 shadow">
//                 <Briefcase className="w-6 h-6 text-indigo-600" />
//                 <span className="text-sm font-medium">Strategy • Transformation</span>
//               </div>

//               <h2 className="text-3xl font-bold">Business Solutions — built for enterprise scale</h2>

//               <p className="text-lg text-slate-700 leading-relaxed">
//                 We craft robust enterprise systems (ERP, SCM, CRM) and bespoke platforms
//                 that remove operational friction. Our approach blends business strategy,
//                 architecture, and engineering — resulting in modern platforms that
//                 reduce cost, improve visibility and accelerate time-to-value.
//               </p>

//               <ul className="grid gap-3 sm:grid-cols-2 mt-4">
//                 {[
//                   "Process automation & RPA",
//                   "ERP implementation & integration",
//                   "Business process reengineering",
//                   "Custom web & mobile platforms",
//                 ].map((s) => (
//                   <li key={s} className="flex items-start gap-3">
//                     <span className="mt-1 text-indigo-600"><Check className="w-5 h-5" /></span>
//                     <span className="text-slate-700">{s}</span>
//                   </li>
//                 ))}
//               </ul>

//               <div className="mt-6">
//                 <a className="inline-flex items-center gap-3 rounded-full bg-indigo-600 text-white px-5 py-3 font-semibold hover:bg-indigo-700 transition" href="#contact">
//                   Request a Consultation <ArrowRight className="w-4 h-4" />
//                 </a>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ===== Service 2: Team Collaboration (text left, image right) ===== */}
//       <section className="relative bg-white">
//   {/* decorative side accent */}
//   <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-b from-indigo-50 to-white hidden lg:block -z-10" />

//   <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
//     <div className="grid gap-8 md:grid-cols-2 items-center">
//       {/* Text content */}
//       <motion.div {...fadeUp} className="space-y-6">
//         <div className="inline-flex items-center gap-3 rounded-full bg-pink-50 px-3 py-2 shadow-sm">
//           <Users className="w-6 h-6 text-pink-600" />
//           <span className="text-sm font-medium">
//             Collaboration • Productivity
//           </span>
//         </div>

//         <h2 className="text-3xl font-bold">
//           Team Collaboration — work, together and faster
//         </h2>

//         <p className="text-lg text-slate-700 leading-relaxed">
//           We build collaboration platforms that bridge people, tools, and
//           processes. Features include secure messaging, shared workspaces,
//           project tracking, role-based access and integrations with major
//           productivity suites so teams can execute with clarity.
//         </p>

//         <div className="grid gap-3 sm:grid-cols-2 mt-4">
//           <FeatureBadge
//             title="Real-time Messaging"
//             desc="Low-latency communication"
//           />
//           <FeatureBadge
//             title="Shared Workspaces"
//             desc="Centralized documents & assets"
//           />
//           <FeatureBadge
//             title="Tasks & Sprints"
//             desc="Built-in agile workflows"
//           />
//           <FeatureBadge
//             title="Integrations"
//             desc="Slack, Teams, Google Workspace"
//           />
//         </div>

//         <div className="mt-6">
//           <a
//             className="inline-flex items-center gap-3 rounded-full border border-indigo-600 text-indigo-600 px-5 py-3 font-semibold hover:bg-indigo-50 transition"
//             href="#contact"
//           >
//             See Collaboration Solutions
//           </a>
//         </div>
//       </motion.div>

//       {/* Image content */}
//       <motion.div
//         {...fadeRight}
//         className="rounded-2xl overflow-hidden shadow-lg relative z-10"
//       >
//         <img
//           src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=8e8c2b87b4e0b9a6f5e9a9a9c4e8f8b7"
//           alt="Team Collaboration"
//           className="w-full h-88 object-cover relative z-10"
//         />
//         {/* Gradient overlay for smooth edges */}
//         <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-50 pointer-events-none rounded-2xl" />
//       </motion.div>
//     </div>
//   </div>
// </section>



//       {/* ===== Service 3: Data Security (dark, centered) ===== */}
//       <section className="bg-slate-900 text-white">
//         <div className="max-w-4xl mx-auto px-6 py-20 text-center">
//           <motion.div {...fadeUp}>
//             <div className="inline-flex items-center justify-center gap-4 rounded-full bg-white/6 px-4 py-3 mb-6 shadow">
//               <ShieldCheck className="w-6 h-6 text-green-300" />
//               <span className="text-sm font-medium text-green-200">Security • Compliance</span>
//             </div>

//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Data Security — protection you can trust</h2>
//             <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
//               Security is foundational — we secure systems end-to-end. Our offering includes architecture reviews,
//               encryption, identity & access management, SOC/ SIEM integrations, incident response and compliance readiness
//               (ISO, GDPR, SOC2). We build security that enables business, not slow it down.
//             </p>

//             <div className="flex flex-wrap justify-center gap-4">
//               <StatCard label="99.99% Uptime" value="SLA-backed" />
//               <StatCard label="24/7 SOC" value="Monitoring & Response" />
//               <StatCard label="Compliance" value="ISO / SOC2 / GDPR" />
//             </div>

//             <div className="mt-8">
//               <a href="#contact" className="inline-flex items-center gap-3 rounded-full bg-emerald-400 text-slate-900 px-5 py-3 font-semibold hover:brightness-95 transition">
//                 Secure My Platform
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ===== Service 4: Global Reach (map left, text right) ===== */}
//       <section className="bg-white">
//         <div className="max-w-6xl mx-auto px-6 py-20">
//           <div className="grid gap-8 md:grid-cols-2 items-center">
//             <motion.div {...fadeLeft} className="rounded-2xl overflow-hidden shadow-lg">
//               <img
//                 src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2bfc7a2e4c1a9b2a6a6a6d6e4f8c9d5e"
//                 alt="Global Reach"
//                 className="w-full h-80 object-cover"
//               />
//             </motion.div>

//             <motion.div {...fadeUp} className="space-y-6">
//               <div className="inline-flex items-center gap-3 rounded-full bg-blue-50 px-3 py-2 shadow">
//                 <Globe className="w-6 h-6 text-blue-600" />
//                 <span className="text-sm font-medium">Scale • Localization</span>
//               </div>

//               <h2 className="text-3xl font-bold">Global Reach — operate with confidence worldwide</h2>

//               <p className="text-lg text-slate-700 leading-relaxed">
//                 We help organizations expand into new markets with localized platforms, compliant operations,
//                 international payment flows, multi-region deployment and 24/7 support. Build once, scale globally —
//                 we take care of the complexity.
//               </p>

//               <div className="mt-4 grid gap-3 sm:grid-cols-2">
//                 <MiniCard title="Multi-region Deployment" desc="Low-latency regional presence" />
//                 <MiniCard title="Localization" desc="Language, currency & compliance" />
//               </div>

//               <div className="mt-6">
//                 <a className="inline-flex items-center gap-3 rounded-full border border-slate-300 px-5 py-3 text-slate-700 font-semibold hover:bg-slate-50 transition" href="#contact">
//                   Learn about Global Scaling
//                 </a>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ===== Final CTA ===== */}
//       <section className="bg-gradient-to-r from-indigo-700 via-violet-600 to-rose-500 text-white py-20">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <motion.h3 {...fadeUp} className="text-3xl md:text-4xl font-extrabold mb-4">
//             Ready to scale with confidence?
//           </motion.h3>
//           <motion.p {...fadeUp} className="text-lg text-indigo-100 mb-8">
//             Let's design a roadmap that fits your goals. Book a call and get a tailored plan for growth, security and efficiency.
//           </motion.p>

//           <motion.div {...fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
//             <a href="#contact" className="rounded-full bg-white text-indigo-700 px-6 py-3 font-semibold shadow-md hover:scale-105 transition inline-flex items-center gap-3">
//               Get Started
//             </a>
//             <a href="#contact" className="rounded-full border border-white/30 px-6 py-3 font-semibold hover:bg-white/10 transition inline-flex items-center gap-3">
//               Talk to Sales
//             </a>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// }

// /* ---------- Small helper components ---------- */

// function FeatureBadge({ title, desc }) {
//   return (
//     <div className="flex items-start gap-3 bg-white rounded-lg p-3 shadow-sm">
//       <div className="flex-shrink-0 bg-pink-50 rounded-md p-2">
//         <Check className="w-5 h-5 text-pink-600" />
//       </div>
//       <div>
//         <div className="text-sm font-semibold text-slate-800">{title}</div>
//         <div className="text-xs text-slate-500">{desc}</div>
//       </div>
//     </div>
//   );
// }

// function StatCard({ label, value }) {
//   return (
//     <div className="bg-white/6 backdrop-blur rounded-lg px-4 py-3 text-center min-w-[180px]">
//       <div className="text-2xl font-bold">{value}</div>
//       <div className="text-sm text-slate-300">{label}</div>
//     </div>
//   );
// }

// function MiniCard({ title, desc }) {
//   return (
//     <div className="border rounded-lg p-4 bg-white">
//       <div className="font-semibold text-slate-800">{title}</div>
//       <div className="text-sm text-slate-500 mt-1">{desc}</div>
//     </div>
//   );
// }
import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Hero from "../Components/Hero";
import CTA from "../Components/CTA";
import Data from "../Components/Data.js";

// const services = [
//   {
//     title: "Project Management & Consultancy",
//     description:
//       "We provide complete project management and consultancy services, covering every phase of the project lifecycle—from planning and resource allocation to execution, monitoring, and delivery. Our team ensures seamless coordination, transparency, and efficiency at every stage.",
//     image: "/assets/Images/Services/projectManagement.jpg",
//   },
//   {
//     title: "Comprehensive Project Planning & Execution",
//     description:
//       "Our services cover detailed project planning and execution strategies to ensure timely completion, cost-effectiveness, and adherence to quality standards. We streamline workflows for maximum productivity.",
//     image: "/assets/Images/Services/planning.jpg",
//   },
//   {
//     title: "Engineering, Procurement & Construction (EPC)",
//     description:
//       "We deliver EPC solutions with integrated design, engineering, procurement, and construction, ensuring end-to-end management for industrial, commercial, and infrastructure projects.",
//     image: "/assets/Images/Services/epc.jpg",
//   },
//   {
//     title: "Civil Construction Works",
//     description:
//       "From foundations to large-scale infrastructure, we specialize in civil works including residential, commercial, and industrial construction with strict adherence to safety and quality.",
//     image: "/assets/Images/Services/civil.jpg",
//   },
//   {
//     title: "Structural Design & Engineering",
//     description:
//       "We provide innovative structural design and engineering services to ensure safe, cost-efficient, and sustainable building frameworks tailored to project requirements.",
//     image: "/assets/Images/Services/structural.jpg",
//   },
//   {
//     title: "Architectural Design & Consultancy",
//     description:
//       "Our architectural consultancy combines creativity with functionality, delivering unique designs that balance aesthetics, practicality, and sustainability.",
//     image: "/assets/Images/Services/architectural.jpg",
//   },
//   {
//     title: "Interior Fit-Out & Space Planning",
//     description:
//       "We offer complete interior fit-out services, optimizing space utilization and creating functional, elegant, and sustainable environments for homes, offices, and industries.",
//     image: "/assets/Images/Services/interior.jpg",
//   },
//   {
//     title: "Industrial Automation Projects",
//     description:
//       "We provide automation solutions that enhance productivity, efficiency, and safety in industrial environments through advanced technologies and smart integration.",
//     image: "/assets/Images/Services/automation.jpg",
//   },
//   {
//     title: "Modular & Prefabricated Structures",
//     description:
//       "We design and deliver modular, prefabricated structures that are cost-effective, eco-friendly, and quick to assemble, ideal for temporary and permanent use.",
//     image: "/assets/Images/Services/prefab.jpg",
//   },
//   {
//     title: "Real Estate & Urban Development Projects",
//     description:
//       "Our expertise in real estate and urban development includes residential, commercial, and township projects, focusing on sustainability and smart growth.",
//     image: "/assets/Images/Services/realestate.jpg",
//   },
//   {
//     title: "Site Supervision & Quality Assurance",
//     description:
//       "We provide expert site supervision and strict quality assurance to ensure projects are executed to the highest safety and performance standards.",
//     image: "/assets/Images/Services/supervision.jpg",
//   },
//   {
//     title: "Health, Safety & Environmental Compliance",
//     description:
//       "Our services ensure compliance with HSE standards, minimizing risks and creating safe, eco-friendly, and legally compliant project environments.",
//     image: "/assets/Images/Services/hse.jpg",
//   },
//   {
//     title: "Smart City Infrastructure Projects",
//     description:
//       "We implement smart city solutions including digital infrastructure, IoT-enabled services, and sustainable utilities to build modern urban ecosystems.",
//     image: "/assets/Images/Services/smartcity.jpg",
//   },
//   {
//     title: "Bridge, Flyover & Tunnel Projects",
//     description:
//       "Our team delivers large-scale infrastructure projects such as bridges, flyovers, and tunnels with precision engineering and sustainable design.",
//     image: "/assets/Images/Services/bridge.jpg",
//   },
//   {
//     title: "Road, Highway & Transport Infrastructure",
//     description:
//       "We construct reliable and durable transport infrastructure including roads, highways, and metro systems, enhancing connectivity and mobility.",
//     image: "/assets/Images/Services/roads.jpg",
//   },
//   {
//     title: "Utility & Energy Infrastructure Projects",
//     description:
//       "We develop critical utility and energy infrastructure, including water supply, power distribution, and renewable energy projects.",
//     image: "/assets/Images/Services/energy.jpg",
//   },
//   {
//     title: "Industrial Plant Setup & Maintenance",
//     description:
//       "Our services cover end-to-end industrial plant setup, installation, and ongoing maintenance to ensure operational efficiency and longevity.",
//     image: "/assets/Images/Services/plant.jpg",
//   },
//   {
//     title: "Construction Material Supply & Management",
//     description:
//       "We supply and manage high-quality construction materials, ensuring timely delivery, sustainability, and cost-efficiency for every project.",
//     image: "/assets/Images/Services/materials.jpg",
//   },
//   {
//     title: "Design-to-Execution Project Solutions",
//     description:
//       "We offer complete solutions from concept design to final execution, ensuring seamless coordination across all project stages.",
//     image: "/assets/Images/Services/designExecution.jpg",
//   },
//   {
//     title: "Project Risk Management & Feasibility Studies",
//     description:
//       "Our feasibility studies and risk management strategies help identify potential challenges, enabling proactive solutions and informed decision-making.",
//     image: "/assets/Images/Services/risk.jpg",
//   },
//   {
//     title: "Resource Planning & Scheduling Services",
//     description:
//       "We optimize resources and create detailed schedules to ensure timely project delivery while minimizing delays and bottlenecks.",
//     image: "/assets/Images/Services/resource.jpg",
//   },
//   {
//     title: "Budgeting, Cost Control & Financial Oversight",
//     description:
//       "We provide accurate budgeting, financial oversight, and cost-control strategies to keep projects within budget without compromising quality.",
//     image: "/assets/Images/Services/cost.jpg",
//   },
//   {
//     title: "Tendering & Vendor Management",
//     description:
//       "We handle tendering processes and vendor management to ensure fair selection, reliable suppliers, and cost-effective partnerships.",
//     image: "/assets/Images/Services/tender.jpg",
//   },
//   {
//     title: "Post-Project Support & Facility Handover",
//     description:
//       "We ensure smooth project closure with post-project support, documentation, and facility handover for long-term client satisfaction.",
//     image: "/assets/Images/Services/support.jpg",
//   },
//   {
//     title: "Multi-Disciplinary Collaboration & Coordination",
//     description:
//       "Our collaborative approach ensures efficient coordination between multiple stakeholders, disciplines, and project phases.",
//     image: "/assets/Images/Services/collaboration.jpg",
//   },
//   {
//     title: "Stakeholder Engagement & Reporting",
//     description:
//       "We provide transparent stakeholder engagement and regular reporting, ensuring accountability and smooth project execution.",
//     image: "/assets/Images/Services/stakeholder.jpg",
//   },
//   {
//     title: "Innovation Integration & Technology Implementation",
//     description:
//       "We integrate modern technologies and innovative practices into projects, enhancing efficiency, quality, and sustainability.",
//     image: "/assets/Images/Services/innovation.jpg",
//   },
//   {
//     title: "Environmental & Sustainability Compliance",
//     description:
//       "We prioritize environmental sustainability and compliance, ensuring eco-friendly practices and long-term project benefits.",
//     image: "/assets/Images/Services/environment.jpg",
//   },
//   {
//     title: "Continuous Project Monitoring & Optimization",
//     description:
//       "We monitor project performance continuously, making necessary adjustments to improve efficiency, safety, and outcomes.",
//     image: "/assets/Images/Services/monitoring.jpg",
//   },
//   {
//     title: "Performance Evaluation & Quality Benchmarking",
//     description:
//       "Our evaluation and benchmarking services measure project performance against industry standards, ensuring excellence and continuous improvement.",
//     image: "/assets/Images/Services/benchmark.jpg",
//   },
// ];

export default function Services() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % Data.services.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + Data.services.length) % Data.services.length);
  };

  return (
    <Fragment>
      <Hero
        title="Our Services"
        // subtitle="Innovative solutions tailored to your business needs."
        backgroundImage="./../../public/assets/Images/new-data-services-Ar-iTL4QKl4-unsplash.jpg"
      />
      <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
        >
          Our Services
        </motion.h2>

        {/* Grid of Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {Data.services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedIndex(i)}
              className="cursor-pointer bg-white shadow-lg rounded-2xl overflow-hidden group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2 line-clamp-2">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup with Carousel */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-3 right-3 text-gray-700 hover:text-red-500"
              >
                <X size={28} />
              </button>

              {/* Image */}
              <img
                src={Data.services[selectedIndex].image}
                alt={Data.services[selectedIndex].title}
                className="w-full h-80 object-cover"
              />

              {/* Content */}
              <div className="p-10 text-start">
                <h3 className="text-2xl font-bold text-gray-900">
                  {Data.services[selectedIndex].title}
                </h3>
                <p className="text-gray-700 mt-4">
                  {Data.services[selectedIndex].description}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center px-6 pb-6">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
    <CTA />
    </Fragment>
  );
}
