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

  const handleNavClick = (id) => {
    setIsMenuOpen(false); // Close menu
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <HeroNavbar
        maxWidth="xl"
        className="fixed top-0 left-0 w-full z-50 h-16 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 backdrop-blur-md bg-opacity-80 shadow-md border-b border-white/10 transition-all duration-300"
        isBlurred={false}
      >
        <NavbarBrand>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            
            <Icon className="text-white drop-shadow-[0_0_6px_#00f0ff]"
 
            icon="simple-icons:bmw" width="32" height="32" />

          </motion.div>
        </NavbarBrand>

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
                  onClick={() => handleNavClick(item)}
                  className="text-white/80 hover:text-white font-medium transition-colors duration-200"
                >
                  {item}
                </Link>
              </motion.div>
            </NavbarItem>
          ))}
        </NavbarContent>

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
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
            className="text-white hover:text-yellow-400 transition-all duration-300"
          >
            <Icon icon="lucide:menu" width={28} height={28} />
          </button>
        </div>
      </HeroNavbar>

      {/* Mobile Menu */}
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
                  onClick={() => handleNavClick(item)}
                  className="text-lg font-medium hover:text-yellow-400 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
