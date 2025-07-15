import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import HologramEffect from './HologramEffect';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const cursorRef = useRef(null);

  const roles = [
    'Python Developer',
    'Fullstack Developer',
    'App Development',
    'UI/UX Engineer',
    'Entrepreneur',
  ];

  const currentRole = roles[loopNum % roles.length];

  useEffect(() => {
    const handleTyping = () => {
      const fullText = currentRole;
      setDisplayText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && displayText === fullText) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setTypingSpeed(150);
      }
    };

    const ticker = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(ticker);
  }, [displayText, isDeleting, loopNum]);

  useEffect(() => {
    const blink = setInterval(() => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity =
          cursorRef.current.style.opacity === '0' ? '1' : '0';
      }
    }, 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-cyberpunk-radial opacity-20 z-0" />
      <div className="absolute inset-0 noise-bg z-0" />

      <div className="container mx-auto max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-center gap-12 z-10 text-center lg:text-left">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6 items-center lg:items-start w-full"
        >
          <motion.p
            className="text-neon-blue font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            &lt; Hello World /&gt;
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-2 glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            I'm <span className="">M TEJAS</span>
          </motion.h1>

          <motion.div
            className="h-12 flex items-center justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <h2 className="text-xl md:text-2xl text-foreground/80 flex items-center">
              <span className="text-neon-blue mr-2">&gt;</span>
              <span>{displayText}</span>
              <span
                ref={cursorRef}
                className="inline-block w-[3px] h-[24px] bg-neon-blue ml-1"
              ></span>
            </h2>
          </motion.div>

          <motion.p
            className="text-foreground/70 max-w-lg text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            Crafting cutting-edge digital experiences with React, Python, and
            TypeScript. Specializing in immersive interfaces and performant
            applications that push the boundaries of web technology.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <Button
              as="a"
              href="#projects"
              color="primary"
              variant="shadow"
              size="lg"
              className="h-14 bg-linear-to-t from-sky-500 to-pink-400 border-e-black border-2 font-semibold"
              startContent={<Icon icon="lucide:code" />}
              onClick={() => {
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </Button>
            <Button
              as="a"
              href="#contact"
              variant="bordered"
              size="lg"
              className="border-2 border-b-black h-14 bg-linear-to-t from-sky-500 to-pink-400 font-semibold"
              startContent={<Icon icon="lucide:mail" />}
              onClick={() => {
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Right: Hologram Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative flex items-center justify-center w-full h-[300px] sm:h-[400px] md:h-[500px]"
        >
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="w-[240px] sm:w-[280px] md:w-[320px] h-[240px] sm:h-[280px] md:h-[320px] rounded-full overflow-hidden border-4 border-neon-blue glow-image relative">
              <img
                src="https://i.ibb.co/TqbgK6jd/tejas.jpg"
                alt="M TEJAS"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/20 to-transparent" />
            </div>
          </div>
          <HologramEffect />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 1,
        }}
      >
        <p className="text-foreground/60 mb-2 text-sm">Scroll Down</p>
        <Icon icon="lucide:chevron-down" className="text-foreground/60" />
      </motion.div>
    </section>
  );
};

export default Home;
