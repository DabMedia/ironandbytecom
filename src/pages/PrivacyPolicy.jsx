// src/pages/PrivacyPolicy.jsx
import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    const lastUpdated = "September 23, 2025";

    return (
        <main className="bg-[#0f0a26] min-h-screen text-gray-200 py-12 px-4 sm:px-6 lg:px-20">
            <div className="max-w-4xl mx-auto bg-[#0b1222] rounded-2xl shadow-lg p-8 md:p-12">
                {/* Header */}
                <header className="mb-8">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">
                                Privacy &amp; Policies
                            </h1>
                            <p className="text-sm text-gray-400">
                                Iron &amp; Byte — Policies for security, compliance, and client trust
                            </p>
                            <p className="text-xs text-gray-500 mt-2">Last updated: {lastUpdated}</p>
                        </div>

                        <div className="flex-shrink-0">
                            <a
                                href="/policies.pdf"
                                className="inline-block px-4 py-2 bg-gradient-to-r from-[#52e257] to-[#562eab] text-white rounded-sm text-sm font-medium shadow hover:scale-105 transition"
                                download
                            >
                                Download PDF
                            </a>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <article className="prose prose-invert max-w-none">
                    {/* 1 */}
                    <section id="privacy" className="mb-6">
                        <h2 className="text-xl font-semibold text-white mb-2">1. Privacy Policy</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            <li>We collect only necessary client data (e.g., name, contact, engagement details).</li>
                            <li>
                                We do not sell or share personal information with third parties, except when required by law.
                            </li>
                            <li>Data is stored securely with encryption and strict access control.</li>
                            <li>Clients can request data deletion after project closure.</li>
                        </ul>
                    </section>

                    {/* 2 */}
                    <section id="data-security" className="mb-6">
                        <h2 className="text-xl font-semibold text-white mb-2">2. Data Security Policy</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            <li>All engagements follow industry best practices (ISO 27001, NIST, OWASP).</li>
                            <li>Client data and reports are shared via secure channels only.</li>
                            <li>
                                Logs and project files are deleted within <span className="italic">[X months]</span> after
                                engagement, unless required by compliance.
                            </li>
                        </ul>
                    </section>

                    {/* 3 */}
                    <section id="aup" className="mb-6">
                        <h2 className="text-xl font-semibold text-white mb-2">3. Acceptable Use Policy (AUP)</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            <li>Our services must not be used for unlawful hacking, cybercrime, or espionage without authorization.</li>
                            <li>Testing is limited to agreed targets/scope (defined in the contract).</li>
                            <li>
                                Clients must not misuse results to attack competitors, governments, or individuals.
                            </li>
                        </ul>
                    </section>

                    {/* 4 */}
                    <section id="incident-response" className="mb-6">
                        <h2 className="text-xl font-semibold text-white mb-2">4. Incident Response Policy</h2>
                        <p className="text-gray-300 mb-2">In case of a detected breach, we follow a structured protocol:</p>
                        <ul className="list-decimal list-inside text-gray-300 space-y-1">
                            <li>Containment</li>
                            <li>Eradication</li>
                            <li>Recovery</li>
                            <li>Post-incident analysis</li>
                        </ul>
                        <p className="text-gray-300 mt-2">
                            We maintain 24/7 escalation procedures for VIP and state clients.
                        </p>
                    </section>

                    {/* 5 */}
                    <section id="refund" className="mb-6">
                        <h2 className="text-xl font-semibold text-white mb-2">5. Refund &amp; Cancellation Policy</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            <li>Refunds (if any) are subject to project stage and documented approval.</li>
                            <li>No refunds once project deliverables (e.g., assessment report) are submitted.</li>
                            <li>Clients must provide written notice for cancellations.</li>
                        </ul>
                    </section>

                    {/* 6 */}
                    <section id="ip" className="mb-6">
                        <h2 className="text-xl font-semibold text-white mb-2">6. Intellectual Property Policy</h2>
                        <p className="text-gray-300">
                            Research, reports, and tools developed by Iron &amp; Byte remain our intellectual property unless
                            otherwise agreed in writing. Clients are granted a non-transferable, non-exclusive right to use
                            deliverables for their internal security enhancement.
                        </p>
                    </section>

                    <footer className="mt-8 border-t border-gray-800 pt-6">
                        <p className="text-sm text-gray-400">
                            For questions about these policies, please{" "}
                            <Link to="/contact" className="text-blue-400 hover:underline">
                                contact us
                            </Link>
                            .
                        </p>
                    </footer>
                </article>
            </div>
        </main>
    );
};

export default PrivacyPolicy;
