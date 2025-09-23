import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import OffensiveSecurity from "../assets/offensive-security.png";
import RedTeam from "../assets/redTeam.jpeg";
import Pentesting from "../assets/pentesting.png";
import SASTandDAST from "../assets/SAST&DAST.jpeg";
import digitalWarfare from "../assets/digital-warfare.jpeg";
import PersonalDigitalSecurity from "../assets/VIPPersonalDigitalSecurity.jpeg";
import IncidentResponse from "../assets/IncidentResponse.jpeg";

const services = [
    {
        id: 1,
        title: "Offensive Security Solutions",
        desc: "Proactive defense through simulated cyberattacks to identify vulnerabilities before malicious actors can exploit them.",
        img: OffensiveSecurity,
        path: "/services/offensive-security", // Add path for Read More
    },
    {
        id: 2,
        title: "Red Team Services",
        desc: "Real-world attack simulations to test organizational detection, prevention, and response capabilities.",
        img: RedTeam,
        path: "/services/red-team",
    },
    {
        id: 3,
        title: "Manual Pentesting (VAPT)",
        desc: "Comprehensive manual vulnerability assessment and penetration testing to uncover security flaws in applications, networks, and systems.",
        img: Pentesting,
        path: "/services/pentesting",
    },
    {
        id: 4,
        title: "SAST & DAST",
        desc: "Static and dynamic application security testing to detect weaknesses in code during development and runtime.",
        img: SASTandDAST,
        path: "/services/sast-dast",
    },
    {
        id: 5,
        title: "Digital Warfare & State Advisory",
        desc: "Strategic guidance and advanced cyber defense measures to protect critical infrastructure against state-sponsored threats.",
        img: digitalWarfare,
        path: "/services/state-advisory",
    },
    {
        id: 6,
        title: "VIP & Personal Digital Security",
        desc: "Exclusive security solutions for high-profile individuals to safeguard personal data, communication, and digital identity.",
        img: PersonalDigitalSecurity,
        path: "/services/vip-security",
    },
    {
        id: 7,
        title: "Incident Response",
        desc: "Rapid response and mitigation for cyber incidents to protect critical data and operations.",
        img: IncidentResponse,
        path: "/services/incident",
    },
];


const ServicesSlider = () => {
    return (
        <section className="bg-[#0b1222] py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-blue-400 uppercase tracking-wider text-sm font-semibold mb-5">
                    Our Services
                </h2>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-12">
                    Cyber Security Solutions
                </h3>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-12"
                >
                    {services.map((service) => (
                        <SwiperSlide key={service.id}>
                            <div className="bg-[#111c34] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center 
  transition-all duration-500 ease-in-out border border-transparent hover:-translate-y-2 hover:border-[#51ff4a] hover:shadow-[0_0_25px_rgba(81,255,74,0.6)]">

                                <img src={service.img} alt={service.title} className="h-28 mb-6" />
                                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-gray-300 text-sm mb-6">{service.desc}</p>

                                {/* Dynamic Read More link */}
                                <Link
                                    to={service.path}
                                    className="px-6 py-2 border border-gray-500 rounded-lg text-white 
      hover:bg-gradient-to-r from-[#51ff4a] to-[#562eab] hover:border-transparent transition duration-300"
                                >
                                    Read More
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ServicesSlider;
