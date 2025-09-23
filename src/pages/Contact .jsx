import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Users, MapPin } from "lucide-react"; // icons
import CustomInput from "../component/CustomInput";
import CustomButton from "../component/CustomButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.number.trim()) {
      newErrors.number = "Number is required";
    } else if (!/^\d{10}$/.test(formData.number)) {
      newErrors.number = "Enter a valid 10-digit number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully");
      setFormData({ name: "", email: "", number: "", message: "" });
      setErrors({});
    }
  };

  return (
    <section className="relative bg-[#0b1222] py-20 overflow-hidden">
      {/* Background Gradient Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_#1a2238,_transparent_50%)] opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#1a2238] opacity-40"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Title */}
        <motion.h2
          className="text-center text-blue-400 uppercase tracking-wider text-sm font-semibold mb-3"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Contact Us
        </motion.h2>
        <motion.h3
          className="text-center font-heading text-3xl md:text-4xl font-bold text-white mb-12"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Let’s Work Together
        </motion.h3>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Info Blocks */}
          <div className="space-y-6">
            <motion.div
              className="flex items-start gap-4 bg-[#111c34] p-6 rounded-2xl shadow-lg"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <Mail className="w-8 h-8 text-blue-400" />
              <div>
                <h4 className="text-white font-semibold">Book a Consultation</h4>
                <p className="text-gray-400 text-sm">
                  Start your journey with Iron & Byte. Schedule a personalized
                  session with our experts.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4 bg-[#111c34] p-6 rounded-2xl shadow-lg"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              <Users className="w-8 h-8 text-green-400" />
              <div>
                <h4 className="text-white font-semibold">Partnership Inquiries</h4>
                <p className="text-gray-400 text-sm">
                  Collaborate with us in defense, R&D, or corporate security to
                  strengthen cyber resilience.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4 bg-[#111c34] p-6 rounded-2xl shadow-lg"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
            >
              <MapPin className="w-8 h-8 text-purple-400" />
              <div>
                <h4 className="text-white font-semibold">Office Locations</h4>
                <p className="text-gray-400 text-sm">
                  Global headquarters and regional presence across multiple
                  countries.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right - Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-[#111c34] p-8 rounded-2xl shadow-lg space-y-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={6}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <CustomInput
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <CustomInput
                type="number"
                name="number"
                placeholder="Enter your number"
                value={formData.number}
                onChange={handleChange}
              />
              {errors.number && (
                <p className="text-red-400 text-sm mt-1">{errors.number}</p>
              )}
            </div>

            <div>
              <textarea
                rows="5"
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg bg-[#0b1222] text-white px-4 py-3 
                focus:outline-none focus:ring-2 focus:ring-[#c842fa] transition"
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <div>
              <CustomButton text="Submit Now" type="submit" />
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
