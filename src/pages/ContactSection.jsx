import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import EmailSentNotification from './ui/Email';
import emailjs from '@emailjs/browser';        //npm install @emailjs/browser


export const ContactSection = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setShowNotification(true); // 🌟 Show notification
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Please try again.");
      });
  };



  <EmailSentNotification show={showNotification} onClose={() => setShowNotification(false)} />

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden bg-[#0a0a0f]">
      {/* Rainbow Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500/10 via-indigo-500/5 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 z-0"></div>

      <EmailSentNotification show={showNotification} onClose={() => setShowNotification(false)} />


      <div className="container mx-auto max-w-7xl z-10 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#00f0ff] via-[#8a2be2] to-[#ff00ff] text-transparent bg-clip-text drop-shadow-[0_0_10px_#00f0ff]">
            Connect <span className='text-white'>With Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to chat? Drop me a message and I’ll get back to you.
          </p>
        </motion.div>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#121212] p-8 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,255,255,0.05)] backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="name" required placeholder="Name"
                  className="w-full p-3 rounded-md bg-[#181818] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition" />
                <input type="email" name="email" required placeholder="Email"
                  className="w-full p-3 rounded-md bg-[#181818] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition" />
              </div>

              <textarea name="message" required placeholder="Tell me about your project..."
                className="w-full p-3 h-36 rounded-md bg-[#181818] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"></textarea>
              <button type="submit"
                className="w-full py-3 text-white font-semibold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-md hover:brightness-110 transition-all shadow-[0_0_20px_#00f0ff80] flex items-center justify-center gap-2">
                <Icon icon="lucide:send" /> Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#121212] p-8 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,255,255,0.05)] backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Contact Information</h3>

            <div className="space-y-6 text-white">
              {[
                {
                  icon: "lucide:mail",
                  label: "Email",
                  value: "tejas9380@gmail.com",
                  link: "mailto:tejas9380@gmail.com",
                },
                {
                  icon: "lucide:phone",
                  label: "Phone",
                  value: "+91 9380933460",
                  link: "tel:+919380933460",
                },
                {
                  icon: "lucide:map-pin",
                  label: "Location",
                  value: "Tiptur, Karnataka, India",
                  link: "https://maps.app.goo.gl/nvFhgaCdKvscsVCM7",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#181818] flex items-center justify-center text-cyan-400">
                    <Icon icon={item.icon} width={20} height={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <a
                      href={item.link}
                      className="text-white hover:text-cyan-400 transition"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Connect on Socials</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  {
                    icon: "skill-icons:github-dark",
                    label: "GitHub",
                    link: "https://github.com/tejasM17",
                  },
                  {
                    icon: "skill-icons:linkedin",
                    label: "LinkedIn",
                    link: "https://www.linkedin.com/in/tejas-m-9b7385331/",
                  },
                  {
                    icon: "skill-icons:twitter",
                    label: "Twitter",
                    link: "https://x.com/TejasTejas96529",
                  },
                  {
                    icon: "skill-icons:instagram",
                    label: "Instagram",
                    link: "https://www.instagram.com/__tejas__m__/",
                  },
                  {
                    icon: "logos:facebook",
                    label: "Facebook",
                    link: "https://www.facebook.com/people/Tejas-Tejas/pfbid0ajsrajV6mzS4snWuzAD7LacNYQ7z1kVib1TXKjmQhZb4FnMhHDuz24sH6WNo1n7sl/",
                  },
                  {
                    icon: "logos:whatsapp-icon",
                    label: "WhatsApp",
                    link: "https://wa.me/919380933460",
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-full shadow-md transition-all duration-300 hover:scale-110"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#1f1f1f] via-[#2d2d2d] to-[#3b3b3b] border border-white/10 group-hover:shadow-[0_0_20px_var(--tw-shadow-color)] shadow-cyan-500/30">
                      <Icon icon={social.icon} width={28} height={28} />
                    </div>
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition duration-300">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="mt-8 p-4 bg-[#181818] rounded-lg border border-white/10">
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">Availability</h4>
              <p className="text-gray-300 text-sm">
                Currently available for freelance projects and full-time opportunities.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-ping"></span>
                <span className="text-green-400 text-sm">Available for hire</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>

  );
};

export default ContactSection