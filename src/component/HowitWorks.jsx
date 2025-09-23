import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Intelligence Gathering",
    desc: "Deep reconnaissance to map your digital footprint, infrastructure, and attack surface. Includes OSINT, social engineering, and external perimeter scanning.",
    color: "bg-blue-500",
  },
  {
    id: "02",
    title: "Threat Simulation (Red Team)",
    desc: "Simulating full-scope attacks across people, processes, and technology to test real-world readiness.",
    color: "bg-green-500",
  },
  {
    id: "03",
    title: "Vulnerability Exploitation & Reporting",
    desc: "Manually exploit weaknesses, bypass controls, and deliver actionable reports mapped to MITRE ATT&CK and CVSS.",
    color: "bg-yellow-500",
  },
  {
    id: "04",
    title: "Resilience Building & Advisory",
    desc: "Collaborate with your teams to close gaps, harden systems, and implement proactive cyber defense strategies.",
    color: "bg-pink-500",
  },
  {
    id: "05",
    title: "Continuous Monitoring & R&D Feedback",
    desc: "Integrate threat monitoring and feed intelligence back into your security systems for continuous improvement.",
    color: "bg-purple-500",
  },
];

const HowItWorks = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.2", "end 0.9"],
  });

  return (
    <section className="bg-[#0b1222] text-white py-20 px-6">
      {/* Section Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-blue-400 uppercase tracking-wider text-sm font-semibold mb-2">
          How We Work
        </h2>
        <h3 className="font-heading text-3xl md:text-4xl font-bold text-white">
          Securing Your Digital Future, Step by Step
        </h3>
      </div>

      {/* Timeline */}
      <div ref={ref} className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full border-r-2 border-dotted border-gray-600"></div>
        {/* Scroll Animated Line */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-1/2 transform -translate-x-1/2 top-0 origin-top w-1 bg-gradient-to-b from-blue-400 to-purple-500"
        />

        {/* Steps */}
        <div className="space-y-16 relative z-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative flex items-start ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col`}
            >
              {/* Circle Step */}
              <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 md:static">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full ${step.color} text-white font-bold shadow-lg`}
                >
                  {step.id}
                </div>
              </div>

              {/* Text Content */}
              <div
                className={`mt-14 md:mt-0 md:w-1/2 ${
                  i % 2 === 0 ? "md:pl-10" : "md:pr-10 text-right"
                }`}
              >
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Optional CTA */}
      <div className="text-center mt-16">
        <a
          href="/contact"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transform transition"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
};

export default HowItWorks;
