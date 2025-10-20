import { Link } from "react-router-dom";
import React from "react";

// TermsAndConditions.jsx
// Single-file React component for displaying Terms & Conditions.
// Tailwind CSS classes are used for styling.

export default function TermsAndConditions({ effectiveDate = "25th July, 2025", lastUpdated = (new Date()).toLocaleDateString() }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="px-6 py-8 md:px-10 bg-[#006881] text-white">
          <h1 className="text-2xl md:text-3xl font-bold">Terms & Conditions</h1>
          <p className="mt-2 text-sm opacity-90">Effective Date: <span className="font-semibold">{effectiveDate}</span> · Last Updated: <span className="font-semibold">{lastUpdated}</span></p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-lg bg-gray-100 hover:bg-gray-200 px-4 py-2 text-sm"
            >
              Print
            </button>

            <Link to="/privacy-policy" className="text-sm text-[#006881] hover:underline">View Privacy Policy</Link>
          </div>

          <div className="text-sm text-gray-600">By using this site you agree to these terms.</div>
        </div>

        {/* Content */}
        <div className="px-6 py-8 md:px-10 md:py-10 space-y-6 text-gray-800 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing our website or engaging our services, you acknowledge that you have read, understood,
              and agree to these Terms & Conditions. If you do not agree, you must refrain from using our website
              or services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">2. Services</h2>
            <p>
              Badar Global provides recruitment, manpower supply, outsourcing, staffing, and related HR solutions.
              The scope, pricing, and duration of services will be outlined in individual contracts or agreements with clients.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">3. Use of Website</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You agree to use our website only for lawful purposes.</li>
              <li>You may not copy, distribute, or modify any content without prior written consent.</li>
              <li>Unauthorized use of our website may result in legal action.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">4. Client Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Clients must provide accurate and complete information when engaging our services.</li>
              <li>Clients are responsible for compliance with local labor laws when hiring manpower through our services.</li>
              <li>Any misuse of our workforce or services will be the sole responsibility of the client.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">5. Fees & Payments</h2>
            <p>
              All service fees will be agreed upon in writing before commencement of work. Payments must be made on time
              as per the agreed schedule. Late payments may attract additional charges or suspension of services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">6. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of sensitive business, financial, and personal data
              shared during the course of service delivery.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">7. Limitation of Liability</h2>
            <p>
              Badar Global will not be held liable for indirect, incidental, or consequential damages. While we take all
              precautions in screening and supplying manpower, we are not responsible for losses caused by employee
              negligence, misconduct, or non-performance once deployed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">8. Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, and materials, is the property of Badar Global
              and protected under copyright law. Unauthorized use is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We do not control or take responsibility for the content,
              privacy policies, or practices of these websites.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">10. Termination of Services</h2>
            <p>
              We reserve the right to suspend or terminate services if the client breaches these Terms & Conditions, payments
              are not made as agreed, or services are used for unlawful or unethical purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">11. Governing Law</h2>
            <p>
              These Terms & Conditions shall be governed by and construed under the laws of India. Any disputes will be subject
              to the jurisdiction of the courts in Hyderabad, Telangana.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">12. Changes to Terms</h2>
            <p>
              We reserve the right to update or modify these Terms & Conditions at any time without prior notice. Clients are
              encouraged to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">13. Contact Us</h2>
            <p>
              If you have any questions regarding these Terms & Conditions, please contact us:
            </p>

            <div className="mt-3 bg-gray-50 p-4 rounded-lg border">
              <p className="text-sm"><strong>Office Address:</strong> Salarjung Colony, Rethibowli, Hyderabad, Telangana – 500008</p>
              <p className="text-sm"><strong>Phone:</strong> +91 98765 43210</p>
              <p className="text-sm"><strong>Email:</strong> info@badarglobal.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">14. Legal Notice</h2>
            <p>
              This draft is provided for general informational purposes and does not constitute legal advice. For official use,
              we recommend having these Terms & Conditions reviewed and customized by a qualified legal professional to ensure
              compliance with Indian labor laws, data protection, and international recruitment regulations.
            </p>
          </section>

          {/* Accept Button */}
          <div className="pt-4 border-t flex items-center justify-between">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">I have read and agree to the Terms & Conditions</span>
            </label>

            {/* <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">Accept</button> */}
          </div>

        </div>
      </div>
    </div>
  );
}
