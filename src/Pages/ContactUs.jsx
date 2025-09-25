import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Hero from "../Components/Hero";
import { MapPin, Phone, Mail } from "lucide-react";
import branches from "../Components/branches.js";

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6imj3dr",
        "template_5i4pt2b",
        form.current,
        "v7btFO9mcw2VXOncp"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send: " + error.text);
        }
      );
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero
        title="Contact Us"
        backgroundImage={"./../../public/assets/Images/t1.jpg"}
        bgPosition="top"
      />

      {/* Contact Info */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Branches
        </h2>

        <div className="space-y-16 max-w-6xl mx-auto">
          {/* Branch 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-6 text-center text-[#006881]">
              INDIA - Hyderabad ({branches.headOffice.branchName})
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Info */}
              <div className="grid space-y-4">
                <p className="text-gray-700">
                  <strong>Address:</strong> {branches.headOffice.address}
                </p>
                <a href={`tel:${branches.headOffice.phone}`} className="text-gray-700">
                  <strong>Phone:</strong> {branches.headOffice.phone}
                </a>
                <a href={`mailto:${branches.headOffice.email}`} className="text-gray-700">
                  <strong>Email:</strong> {branches.headOffice.email}
                </a>
              </div>
              {/* Map */}
              <iframe
                src={branches.headOffice.mapEmbedUrl}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-xl shadow-md"
              ></iframe>
            </div>
          </div>

          {/* Branch 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-6 text-center text-[#006881]">
              {branches.riyadhBranch.country} - {branches.riyadhBranch.city} (Branch Office)
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Info */}
              <div className="grid space-y-4">
                <p className="text-gray-700">
                  <strong>Address:</strong> {branches.riyadhBranch.address}
                </p>
                <a href={`tel:${branches.riyadhBranch.phone}`} className="text-gray-700">
                  <strong>Phone:</strong> {branches.riyadhBranch.phone}
                </a>
                <a href={`mailto:${branches.riyadhBranch.email}`} className="text-gray-700">
                  <strong>Email:</strong> {branches.riyadhBranch.email}
                </a>
              </div>
              {/* Map */}
              <iframe
                src={branches.riyadhBranch.mapEmbedUrl}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-xl shadow-md"
              ></iframe>
            </div>
          </div>

          {/* Branch 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-6 text-center text-[#006881]">
              {branches.dammamBranch.country} - {branches.dammamBranch.city} (Branch Office)
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Info */}
              <div className="grid space-y-4">
                <p className="text-gray-700">
                  <strong>Address:</strong> {branches.dammamBranch.address}
                </p>
                <a href={`tel:${branches.dammamBranch.phone}`} className="text-gray-700">
                  <strong>Phone:</strong> {branches.dammamBranch.phone}
                </a>
                <a href={`mailto:${branches.dammamBranch.email}`} className="text-gray-700">
                  <strong>Email:</strong> {branches.dammamBranch.email}
                </a>
              </div>
              {/* Map */}
              <iframe
                src={branches.dammamBranch.mapEmbedUrl}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-xl shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </section>



      {/* How to Reach Us */}
      {/* <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How to Reach Us
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
          <div className="md:w-1/2">
            <iframe
              className="w-full h-80 rounded-2xl shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.27693488924!2d78.48667121520045!3d17.385044988085954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99d8c72f76ed%3A0xdda6b7f2ec6b7d2!2sHyderabad!5e0!3m2!1sen!2sin!4v1677507700768!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              title="map"
            ></iframe>
          </div>
          <div className="md:w-1/2 text-gray-700 text-lg leading-relaxed">
            <p>
              Our office is easily accessible via public transport and only 10
              minutes away from the main city center. Visitors can also enjoy
              ample parking space available at our premises.
            </p>
          </div>
        </div>
      </section> */}

      {/* Unique Contact Form */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-[#006881] via-[#006881] to-[#006881] text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Send Us a Message
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-3xl mx-auto bg-white text-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl space-y-6 transform hover:scale-[1.02] transition"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#006881] focus:outline-none"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#006881] focus:outline-none"
            />
          </div>

          {/* 📱 Mobile Number Field */}
          <input
            type="tel"
            name="mobile"
            placeholder="Your Mobile Number"
            required
            pattern="[0-9]{10,15}"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#006881] focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 h-40 resize-none focus:ring-2 focus:ring-[#006881] focus:outline-none"
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#006881] to-[#006881] hover:from-[#6f1f34] hover:to-[#6f1f34] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition transform hover:-translate-y-1"
            >
              🚀 Send Message
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
