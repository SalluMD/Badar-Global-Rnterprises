import React from "react";
import { Link } from 'react-router-dom'

// PrivacyPolicy.jsx
// React component for displaying the Privacy Policy page.
// Tailwind CSS is used for styling.

export default function PrivacyPolicy({ effectiveDate = "25th July, 2025", lastUpdated = (new Date()).toLocaleDateString() }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="px-6 py-8 md:px-10 bg-[#6f1634] text-white">
          <h1 className="text-2xl md:text-3xl font-bold">Privacy Policy</h1>
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
        
                    <Link to="/privacy-policy" className="text-sm text-[#006881] hover:underline">Terms and Condition</Link>
                  </div>
        
                  {/* <div className="text-sm text-gray-600">By using this site you agree to these terms.</div> */}
                </div>

        {/* Content */}
        <div className="px-6 py-8 md:px-10 md:py-10 space-y-6 text-gray-800 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold mb-2">1. Introduction</h2>
            <p>
              At Badar Global, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use,
              and safeguard your information when you use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Personal Information: Name, email, phone number, and address.</li>
              <li>Business Information: Company name, job title, and professional details.</li>
              <li>Technical Data: IP address, browser type, and website usage analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To deliver recruitment and manpower supply services.</li>
              <li>To communicate with clients, candidates, and partners.</li>
              <li>To process applications and service requests.</li>
              <li>To comply with legal and regulatory requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">4. Sharing of Information</h2>
            <p>
              We do not sell or trade your personal data. However, we may share it with trusted clients, service providers,
              or legal authorities where required by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">5. Data Security</h2>
            <p>
              We implement strict technical and organizational measures to protect your data. However, no method of
              transmission online is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">6. Your Rights</h2>
            <p>
              Depending on applicable laws, you may request access, correction, or deletion of your personal data. You
              may also object to processing or withdraw consent where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">7. Cookies & Tracking</h2>
            <p>
              Our website may use cookies to improve functionality and analyze traffic. You can disable cookies in your
              browser settings if you prefer.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">8. Third-Party Links</h2>
            <p>
              Our website may contain links to external sites. We are not responsible for the privacy practices or
              content of those third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">9. International Transfers</h2>
            <p>
              If you are located outside India, please note that your data may be transferred and processed in India
              or other locations where we operate.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">10. Updates to Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated
              effective date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">11. Contact Us</h2>
            <div className="mt-3 bg-gray-50 p-4 rounded-lg border">
              <p className="text-sm"><strong>Office Address:</strong> Salarjung Colony, Rethibowli, Hyderabad, Telangana – 500008</p>
              <p className="text-sm"><strong>Phone:</strong> +91 98765 43210</p>
              <p className="text-sm"><strong>Email:</strong> info@badarglobal.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">12. Legal Notice</h2>
            <p>
              This Privacy Policy is provided for informational purposes only. For official compliance, we recommend reviewing
              with a qualified legal professional to meet GDPR, Indian IT Act, or other applicable data protection laws.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}