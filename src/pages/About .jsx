import React from "react";
import { ShieldCheck, Award, UserCheck, Globe } from "lucide-react";
import AboutImg from "../assets/about1.webp";
import User from "../assets/user.jpeg"
 
// Replace with actual leader images in assets folder
// import Leader1 from "../assets/leader1.webp";
// import Leader2 from "../assets/leader2.webp";
// import Leader3 from "../assets/leader3.webp";

const About = () => {
  return (
    <section className="bg-[#0f0a26] text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src={AboutImg}
            alt="Cyber Warfare"
            className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute bottom-6 right-6 bg-gradient-to-r from-[#51ff4a] to-[#562eab] text-center rounded-xl p-4 shadow-lg">
            <h2 className="text-4xl font-bold">24/7</h2>
            <p className="text-sm text-gray-200">Cyber Ops Center</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-blue-400 uppercase tracking-wider text-sm font-semibold mb-3">
            About Us
          </h2>

          {/* Who We Are */}
          <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Who We Are
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Iron & Byte is a modern age warfare and digital weapons design
            company, engineered to protect the future of nations, corporations,
            and individuals. Unlike traditional cybersecurity providers, our
            strength lies in{" "}
            <span className="text-white font-semibold">offensive-first strategies</span>,
            simulating and countering the most advanced digital threats before
            they strike.
          </p>
          <p className="text-gray-300 mb-8 leading-relaxed">
            With deep expertise in offensive security, red team operations,
            SCADA/SATCOM R&D, and VIP security, Iron & Byte operates at the
            intersection of defense, technology, and innovation.
          </p>

          {/* Mission & Vision */}
          <div className="mb-10">
            <h4 className="text-xl font-semibold tracking-wider text-white mb-3">
              Mission & Vision
            </h4>
            <div className="space-y-3">
              <p className="text-gray-300">
                <span className="font-semibold tracking-wider text-white">Mission:</span> To
                build cyber resilience by designing digital weapons, developing
                offensive solutions, and safeguarding critical assets against
                state-level and organized cyber threats.
              </p>
              <p className="text-gray-300">
                <span className="font-semibold tracking-wider text-white">Vision:</span> To
                establish India as a global leader in cyber warfare strategy and
                digital security, setting the standard for offensive security
                excellence worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Iron & Byte */}
      <div className="container mx-auto mt-20 text-center">
        <h4 className="font-heading text-3xl md:text-4xl font-bold mb-12">
          Why Iron & Byte?
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#1a103d] p-6 rounded-xl shadow-md text-center flex flex-col items-center hover:scale-105 transition-transform">
            <ShieldCheck className="text-green-400 mb-3" size={40} />
            <h5 className="font-semibold tracking-wider">Offensive-first</h5>
            <p className="text-sm text-gray-400 mt-2">
              Anticipating attacks before they happen.
            </p>
          </div>

          <div className="bg-[#1a103d] p-6 rounded-xl shadow-md text-center flex flex-col items-center hover:scale-105 transition-transform">
            <Award className="text-purple-400 mb-3" size={40} />
            <h5 className="font-semibold tracking-wider">Govt Advisor</h5>
            <p className="text-sm text-gray-400 mt-2">
              Trusted by policymakers for modern cyber warfare.
            </p>
          </div>

          <div className="bg-[#1a103d] p-6 rounded-xl shadow-md text-center flex flex-col items-center hover:scale-105 transition-transform">
            <UserCheck className="text-blue-400 mb-3" size={40} />
            <h5 className="font-semibold tracking-wider">Exclusive Security</h5>
            <p className="text-sm text-gray-400 mt-2">
              Tailored solutions for politicians & HNIs.
            </p>
          </div>

          <div className="bg-[#1a103d] p-6 rounded-xl shadow-md text-center flex flex-col items-center hover:scale-105 transition-transform">
            <Globe className="text-pink-400 mb-3" size={40} />
            <h5 className="font-semibold tracking-wider">Cutting-edge R&D</h5>
            <p className="text-sm text-gray-400 mt-2">
              SCADA & SATCOM expertise for critical infra defense.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="container mx-auto mt-20 text-center">
        <h3 className="font-heading text-3xl md:text-4xl font-bold mb-12">
          Leadership
        </h3>
        <p className="text-gray-300 max-xl mx-auto mb-12 leading-relaxed">
          Our team comprises cybersecurity veterans, defense technologists, and
          offensive security practitioners who bring field-tested expertise into every
          solution. With decades of combined experience across national defense
          projects and global enterprises, our leadership ensures Iron & Byte stays
          ahead of adversaries.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <div className="bg-[#1a103d] p-8 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform">
            <img
              src={User}
              alt="Leader 1"
              className="w-32 h-32 rounded-full object-cover border-4 border-[#562eab] mb-4"
            />
            <h5 className="text-lg">Siddharth Das</h5>
            <p className="text-sm text-gray-400">Founder & CEO</p>
          </div>

          <div className="bg-[#1a103d] p-8 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform">
            <img
              src={User}
              alt="Leader 2"
              className="w-32 h-32 rounded-full object-cover border-4 border-[#51ff4a] mb-4"
            />
            <h5 className="text-lg">Ayashkant Nayak</h5>
            <p className="text-sm text-gray-400">Co-Founder & COO</p>
          </div>

          <div className="bg-[#1a103d] p-8 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform">
            <img
              src={User}
              alt="Leader 3"
              className="w-32 h-32 rounded-full object-cover border-4 border-[#c842fa] mb-4"
            />
            <h5 className="text-lg">Smaranika Das</h5>
            <p className="text-sm text-gray-400">Co-Founder & Growth Head</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
