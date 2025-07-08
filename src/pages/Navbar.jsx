import React, { useState } from 'react';
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link,
} from '@heroui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ['Home', 'Projects', 'Skills', 'Contact'];

  return (
    <>
      <HeroNavbar
        maxWidth="xl"
        className="fixed top-0 left-0 w-full z-50 h-16 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 backdrop-blur-md bg-opacity-80 shadow-md border-b border-white/10 transition-all duration-300"
        isBlurred={false}
      >
        {/* Logo / Brand */}
        <NavbarBrand>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-yellow-400 via-pink-500 to-cyan-400 flex items-center justify-center shadow-inner">
              <span className="font-bold text-black text-sm">&lt;/&gt;</span>
            </div>
            <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e9f0f0] via-[#ff00ff] to-[#ff9900] animate-gradient bg-[length:400%_400%]">
              DEV.MATRIX
            </p>
          </motion.div>
        </NavbarBrand>

        {/* Desktop Menu */}
        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          {navLinks.map((item, index) => (
            <NavbarItem key={item}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-white/80 hover:text-white font-medium transition-colors duration-200"
                >
                  {item}
                </Link>
              </motion.div>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Desktop Button - hidden on small devices */}
        <NavbarContent justify="end" className="hidden sm:flex">
          <NavbarItem>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                as={Link}
                href="#contact"
                color="primary"
                variant="shadow"
                startContent={<Icon icon="lucide:send" />}
                className="bg-cyberpunk-gradient hover:brightness-110 font-semibold text-white shadow-lg"
              >
                Connect
              </Button>
            </motion.div>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex items-center ml-auto">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-yellow-400 transition-all duration-300"
            aria-label="Toggle Menu"
          >
            <Icon icon="lucide:menu" width={28} height={28} />
          </button>
        </div>
      </HeroNavbar>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden fixed top-16 left-0 w-full z-40 bg-gradient-to-br from-cyan-800 via-purple-800 to-pink-800 shadow-lg border-b border-white/10 backdrop-blur-md"
          >
            <div className="flex flex-col px-6 py-4 gap-4 text-white">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium hover:text-yellow-400 transition-colors"
                >
                  {item}
                </Link>
              ))}

              {/* Mobile-only Connect Button */}
              <Button
                as={Link}
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                startContent={<Icon icon="lucide:send" />}
                className="w-full bg-cyberpunk-gradient font-semibold text-white shadow hover:brightness-110"
              >
                Connect
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
