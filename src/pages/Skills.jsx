import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { skills } from '../store/skills'; // Ensure this file exports a JS object

const Skills = () => {
  const categories = Object.keys(skills);

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden bg-[#0a0a0f]">
  {/* Background elements */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent z-0"></div>
  <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 z-0"></div>

  <div className="container mx-auto max-w-7xl z-10 relative">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#00f0ff] via-[#8a2be2] to-[#ff00ff] text-transparent bg-clip-text drop-shadow-[0_0_10px_#00f0ff]">
        Technical <span className="text-white">Arsenal</span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg">
        My toolkit of technologies, frameworks, and programming languages.
      </p>
    </motion.div>

    {/* Skills Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {categories.map((category, categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#121212] rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,255,255,0.1)] p-6 backdrop-blur-md"
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-6">{category}</h3>
          <div className="space-y-6">
            {skills[category].map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-2 text-white text-sm">
                    {skill.icon && (
                      <Icon icon={skill.icon} className="text-cyan-300" width={20} height={20} />
                    )}
                    {skill.name}
                  </div>
                  <span className="text-gray-400 text-xs">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${skill.level >= 90
                      ? 'bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500'
                      : 'bg-cyan-500'
                      }`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    {/* Experience Timeline */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="mt-20"
    >
      <div className="bg-[#121212] border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.05)] p-8 relative overflow-hidden backdrop-blur-md">
        <h3 className="text-2xl font-bold text-center text-cyan-400 mb-10">
          Experience Timeline
        </h3>

        <div className="relative">
          {/* Center vertical line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 z-0"></div>

          {[
            {
              year: "2023 - Present",
              title: "Senior Frontend Developer",
              company: "TechMatrix Inc.",
              description: "Leading development of cutting-edge web applications using React, Three.js, and TypeScript.",
            },
            {
              year: "2021 - 2023",
              title: "UI/UX Engineer",
              company: "Digital Frontiers",
              description: "Designed and implemented interactive user interfaces for enterprise clients.",
            },
            {
              year: "2019 - 2021",
              title: "Full Stack Developer",
              company: "CodeNexus",
              description: "Developed full-stack applications using React, Node.js, and MongoDB.",
            },
            {
              year: "2017 - 2019",
              title: "Junior Web Developer",
              company: "WebSphere Solutions",
              description: "Built responsive websites and web applications for various clients.",
            },
          ].map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`relative mb-12 flex flex-col md:flex-row md:items-start ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} z-10`}
            >
              {/* Vertical Dot */}
              <div className="absolute left-1/2 md:left-1/2 top-2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 border-2 border-white rounded-full z-20 shadow-md"></div>

              <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'} w-full`}>
                <div className="bg-[#181818] border border-white/10 p-5 rounded-lg text-white shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_#00f0ff50] transition-all duration-300">
                  <p className="text-sm text-cyan-400 mb-1">{experience.year}</p>
                  <h4 className="text-lg font-bold">{experience.title}</h4>
                  <p className="text-sm text-gray-400">{experience.company}</p>
                  <p className="text-sm text-gray-500 mt-2">{experience.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
</section>

  );
};

const getColorForSkill = (level) => {
  if (level >= 90) return "primary";
  if (level >= 80) return "secondary";
  if (level >= 70) return "success";
  if (level >= 60) return "warning";
  return "danger";
};

export default Skills;
