// src/pages/TermsAndConditions.jsx
import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  const lastUpdated = "September 23, 2025";

  return (
    <main className="bg-[#0f0a26] min-h-screen text-gray-200 py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto bg-[#0b1222] rounded-2xl shadow-lg p-8 md:p-12">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">
                Terms &amp; Conditions
              </h1>
              <p className="text-sm text-gray-400">
                Iron &amp; Byte — Legal Terms for use of website and services
              </p>
              <p className="text-xs text-gray-500 mt-2">Last updated: {lastUpdated}</p>
            </div>

            <div className="flex-shrink-0 space-x-2">
              <a
                href="/terms.pdf"
                className="inline-block px-4 py-2 bg-gradient-to-r from-[#52e257] to-[#562eab] text-white rounded-sm text-sm font-medium shadow hover:scale-105 transition"
                download
              >
                Download PDF
              </a>
              <Link
                to="/contact"
                className="inline-block px-4 py-2 border border-gray-700 text-gray-200 rounded-sm text-sm font-medium hover:bg-gray-800 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </header>

        {/* Two-column layout: TOC + Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* TOC */}
          <nav className="md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-300 mb-3">Contents</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                <a href="#introduction" className="hover:text-white">1. Introduction</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">2. Services Provided</a>
              </li>
              <li>
                <a href="#eligibility" className="hover:text-white">3. Eligibility</a>
              </li>
              <li>
                <a href="#client-responsibilities" className="hover:text-white">4. Client Responsibilities</a>
              </li>
              <li>
                <a href="#confidentiality" className="hover:text-white">5. Confidentiality</a>
              </li>
              <li>
                <a href="#liability" className="hover:text-white">6. Limitation of Liability</a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-white">7. Compliance</a>
              </li>
              <li>
                <a href="#termination" className="hover:text-white">8. Termination</a>
              </li>
              <li>
                <a href="#governing-law" className="hover:text-white">9. Governing Law</a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <article className="md:col-span-3 prose prose-invert max-w-none">
            {/* 1 */}
            <section id="introduction" className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">1. Introduction</h2>
              <p className="text-gray-300">
                Welcome to Iron &amp; Byte (“Company”, “we”, “our”, or “us”). By accessing or using our website,
                services, or solutions, you (“Client”, “User”) agree to abide by these Terms &amp; Conditions.
                If you do not agree, please refrain from using our services.
              </p>
            </section>

            {/* 2 */}
            <section id="services" className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">2. Services Provided</h2>
              <p className="text-gray-300 mb-2">Iron &amp; Byte provides cybersecurity and digital warfare solutions, including but not limited to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Offensive Security &amp; Red Teaming</li>
                <li>R&amp;D in Cybersecurity (SCADA, SatCom, Defence systems)</li>
                <li>Manual Penetration Testing (Pentesting)</li>
                <li>SAST &amp; DAST Security Testing</li>
                <li>Cyber Warfare Solutions for State &amp; Government agencies</li>
                <li>Digital &amp; Personal Security for HNIs, Politicians, and Influencers</li>
                <li>Incident Response Services</li>
                <li>Research &amp; Advocacy via the All-India Cyber &amp; Digital Security Association</li>
              </ul>
            </section>

            {/* 3 */}
            <section id="eligibility" className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">3. Eligibility</h2>
              <p className="text-gray-300">
                Services are available only to clients who comply with applicable national and international laws.
                Engagements with governments, agencies, and enterprises require proper legal authorizations.
                Any misuse of our reports, tools, or strategies is strictly prohibited.
              </p>
            </section>

            {/* 4 */}
            <section id="client-responsibilities" className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">4. Client Responsibilities</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Provide accurate information and lawful intent for engagements.</li>
                <li>Use deliverables (reports, tools, recommendations) strictly for internal security improvement.</li>
                <li>Not misuse knowledge gained from our services for unlawful attacks or malicious activity.</li>
              </ul>
            </section>

            {/* 5 */}
            <section id="confidentiality" className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">5. Confidentiality</h2>
              <p className="text-gray-300">
                All client data, systems, and findings are treated as strictly confidential. We may sign NDAs for sensitive projects.
                We will not disclose client information without prior written consent, except as required by law.
              </p>
            </section>

            {/* 6 */}
            <section id="liability" className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">6. Limitation of Liability</h2>
              <p className="text-gray-300">
                Iron &amp; Byte is not responsible for indirect, incidental, or consequential damages. Security assessments are conducted
                within agreed scope; liability is limited to fees paid.
              </p>
            </section>

            {/* 7 */}
            <section id="compliance" className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">7. Compliance</h2>
              <p className="text-gray-300">
                Clients must comply with Indian IT Act, international cyber laws, and data protection regulations (e.g., GDPR where applicable).
                Services related to state or defence agencies must follow government approval protocols.
              </p>
            </section>

            {/* 8 */}
            <section id="termination" className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">8. Termination</h2>
              <p className="text-gray-300">
                We may suspend/terminate services if clients misuse our findings or engage in unlawful activities.
                Clients may terminate engagement with 30 days’ written notice (subject to contract terms).
              </p>
            </section>

            {/* 9 */}
            <section id="governing-law" className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">9. Governing Law</h2>
              <p className="text-gray-300">
                These Terms are governed by the laws of India.
              </p>
            </section>

            <footer className="mt-8 border-t border-gray-800 pt-6">
              <p className="text-sm text-gray-400">
                If you have any questions about these Terms &amp; Conditions, please{" "}
                <Link to="/contact" className="text-purple-400 hover:underline">contact us</Link>.
              </p>
            </footer>
          </article>
        </div>
      </div>
    </main>
  );
};

export default TermsAndConditions;
