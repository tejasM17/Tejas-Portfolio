import React from "react";
import { Icon } from "@iconify/react";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/100 backdrop-blur-sm">
      <div className="bg-content3 border border-white/10 text-foreground rounded-2xl w-full max-w-3xl shadow-neuro relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-content2">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <button onClick={onClose} className="text-white hover:text-red-500">
            <Icon icon="lucide:x" className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg"
          />

          <p className="text-gray-300 text-base leading-relaxed">
            {project.fullDescription || project.description}
          </p>

          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-2 uppercase">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20 text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.features && (
            <div>
              <h4 className="text-sm font-semibold text-white/80 mb-2 uppercase">
                Key Features
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end items-center gap-4 px-6 py-4 border-t border-white/10 bg-content2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-white bg-white/10 hover:bg-white/20 transition"
          >
            Close
          </button>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg flex items-center gap-2 bg-secondary hover:bg-secondary/80 transition"
          >
            <Icon icon="lucide:github" />
            View Code
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg flex items-center gap-2 bg-primary hover:bg-primary/80 transition"
          >
            <Icon icon="lucide:external-link" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
