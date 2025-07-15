import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 bg-[#0a0a0f] border-t border-white/10 relative">
      {/* Noise + Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500/5 via-indigo-500/5 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 z-0"></div>

      <div className="container mx-auto max-w-7xl z-10 relative">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-white">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 rounded-md flex items-center justify-center">
                <span className="font-bold text-black text-lg">&lt;/&gt;</span>
              </div>
              <p className="font-bold text-2xl bg-gradient-to-r from-[#00f0ff] via-[#ff00ff] to-[#ff9900] text-transparent bg-clip-text animate-gradient bg-[length:400%_400%]">
                M TEJAS
              </p>
            </div>
            <p className="text-gray-400 max-w-md mb-4">
              Crafting cutting-edge digital experiences with performance, accessibility, and futuristic design.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-cyan-400">Navigation</h3>
            <ul className="space-y-2">
              {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>


        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 my-10"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm text-center md:text-left">
          <p>© {currentYear} M TEJAS. All rights reserved.</p>
          <div className="flex gap-6 flex-wrap justify-center">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((link, i) => (
              <a key={i} href="#" className="hover:text-cyan-400 transition">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
