import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import ProjectModal from './ProjectModal'; // Ensure this file exists and is default exported
import { projects } from '../store/Projects'; // Ensure this file exists and is properly structured

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden bg-[#0a0a0f]">
  {/* Background elements */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent z-0"></div>
  <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 z-0"></div>

  <div className="container mx-auto max-w-7xl relative z-10">
    {/* Title Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#00f0ff] via-[#8a2be2] to-[#ff00ff] text-transparent bg-clip-text drop-shadow-[0_0_10px_#00f0ff]">
        Project <span className="text-white">Matrix</span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg">
        Explore my latest work across web development, 3D graphics, and interactive experiences.
      </p>
    </motion.div>

    {/* Project Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#121212] border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,255,255,0.1)] overflow-hidden hover:shadow-[0_0_30px_#00f0ff] transition-all duration-300 backdrop-blur-md"
        >
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            {project.featured && (
              <span className="absolute top-2 right-2 bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 text-xs px-2 py-1 rounded-full backdrop-blur-sm font-semibold">
                Featured
              </span>
            )}
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-white/5 border border-white/10 text-xs text-white px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="bg-gray-700 text-xs text-white px-2 py-1 rounded-full">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>
          <div className="border-t border-white/10 px-4 py-3 flex justify-between items-center">
            <button
              onClick={() => setSelectedProject(index)}
              className="text-[#00f0ff] hover:text-white text-sm font-medium flex items-center gap-1 transition"
            >
              <Icon icon="lucide:info" className="text-base" />
              Details
            </button>
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00f0ff] text-gray-300 transition"
                title="View Code"
              >
                <Icon icon="lucide:github" className="text-xl" />
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00f0ff] text-gray-300 transition"
                title="Live Demo"
              >
                <Icon icon="lucide:external-link" className="text-xl" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* View All Button */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex justify-center mt-14"
    >
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 border border-[#00f0ff] text-[#00f0ff] font-semibold rounded-full hover:bg-[#00f0ff] hover:text-black transition-all duration-300 shadow-[0_0_20px_#00f0ff80]"
      >
        <div className="flex items-center gap-2">
          <Icon icon="lucide:github" />
          View All Projects on GitHub
        </div>
      </a>
    </motion.div>
  </div>

  {/* Modal */}
  {selectedProject !== null && (
    <ProjectModal
      project={projects[selectedProject]}
      onClose={() => setSelectedProject(null)}
      isOpen={selectedProject !== null}
    />
  )}
</section>

  );
};

export { ProjectSection };
