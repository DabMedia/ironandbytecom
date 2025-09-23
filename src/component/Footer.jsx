import React from "react";
import { FaChevronRight, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/iblogo.png";
import BackToTop from "./BackToTop";

const Footer = () => {
    return (
        <footer className="bg-[#0e041a] text-gray-300 pt-16 relative">
            <div className="container mx-auto px-6 md:px-12">
                {/* 🔹 Newsletter */}
                <div className="bg-[#1a0b2e] rounded-2xl p-8 mb-14 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            Subscribe To Newsletter
                        </h2>
                        <p className="text-gray-400 text-sm">
                            Stay updated with our latest news, tips and cybersecurity updates.
                        </p>
                    </div>

                    <form className="flex w-full md:w-auto max-w-lg">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-grow px-4 py-3 rounded-l-xl bg-[#111c34] text-white 
              placeholder-gray-400 border border-transparent 
              focus:border-[#51ff4a] focus:ring-2 focus:ring-[#51ff4a] 
              outline-none transition-all duration-300"
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-gradient-to-r from-[#51ff4a] to-[#562eab] 
              rounded-r-xl text-white font-semibold shadow-lg 
              hover:shadow-[0_0_15px_rgba(200,66,250,0.6)] 
              transition-all duration-300 ease-in-out"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* 🔹 Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand / About */}
                    <div>
                        <img src={Logo} alt="IronandByte Logo" className="h-12 mb-4" />
                        <p className="text-sm text-gray-400 leading-relaxed">
                            IronandByte delivers advanced cybersecurity solutions, including penetration testing, threat detection, and digital defense, helping businesses safeguard data, ensure compliance, and stay secure in today’s evolving cyber landscape.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-[#5637a6] mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { name: "Home", path: "/" },
                                { name: "About Us", path: "/about" },
                                { name: "R&D", path: "/rd" },
                                { name: "Industries", path: "/industries" },
                                { name: "Contact Us", path: "/contact" },
                                { name: "Terms & Conditions", path: "/contact" },
                                { name: "Privacy Policy", path: "/contact" },
                            ].map((link, i) => (
                                <li key={i} className="flex items-center space-x-2">
                                    <FaChevronRight className="text-[#51ff4a] text-sm" />
                                    <Link to={link.path} className="hover:text-purple-400">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#5637a6] mb-4">Top Categories</h3>
                        <ul className="space-y-2">
                            {[
                                { name: "Offensive Security Solutions", path: "/services/offensive-security" },
                                { name: "Red Team Services", path: "/services/red-team" },
                                { name: "Manual Pentesting (VAPT)", path: "/services/pentesting" },
                                { name: "SAST & DAST", path: "/services/sast-dast" },
                                { name: "Digital Warfare & State Advisory", path: "/services/state-advisory" },
                                { name: "VIP & Personal Digital Security", path: "/services/vip-security" },
                                { name: "Incident Response", path: "/services/incident" },
                            ].map((link, i) => (
                                <li key={i} className="flex items-center space-x-2">
                                    <FaChevronRight className="text-[#51ff4a] text-sm" />
                                    <Link to={link.path} className="hover:text-purple-400">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-[#5637a6] mb-4">Top Categories</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Email: <a href="mailto:info@ironandbyte.com" className="hover:text-purple-400">info@ironandbyte.com</a></li>
                            <li>Phone: <a href="tel:+911234567890" className="hover:text-purple-400">+91 12345 67890</a></li>
                            <li>Address: New Delhi, India</li>
                        </ul>
                    </div>

                    {/* Social */}

                </div>

                {/* 🔹 Bottom */}
                <div className="mt-12 mb-5 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm text-center md:text-left">
                        Copyright © 2025{" "}
                        <span className="text-purple-400">IronandByte</span>. All Rights Reserved
                    </p>

                    <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm">
                        <div>
                            <div className="flex space-x-4">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
                                    <FaFacebook size={20} />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
                                    <FaTwitter size={20} />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
                                    <FaLinkedin size={20} />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
                                    <FaInstagram size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BackToTop />
        </footer>
    );
};

export default Footer;
