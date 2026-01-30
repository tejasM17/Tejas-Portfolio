import { useState } from "react";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

// You can later move this to src/data/projects.js
const projects = [
  {
    title: "AI - Chatbot",
    description: "Interactive text & photo generation model using APIs",
    fullDescription:
      "Full-featured chatbot interface built with React that integrates Hugging Face inference API for text generation and image models (Stable Diffusion / Flux) for photo generation. Supports conversation history, prompt suggestions, and image preview/download.",
    image: "https://img.heroui.chat/image/ai?w=800&h=600&u=1",
    technologies: [
      "React",
      "Huggingface-API",
      "Javascript",
      "Tailwind",
      "Three.js", // ← kept from your list (even if not used — you can remove if irrelevant)
    ],
    github: "https://github.com/tejasM17/jerry-ai",
    demo: "https://tejasm17.github.io/jerry-ai/",
    featured: true,
  },
  {
    title: "Gurukula PU College",
    description:
      "Data visualization dashboard with real-time updates and 3D charts",
    fullDescription:
      "Interactive dashboard for Gurukula PU College featuring real-time notices, attendance overview, data visualizations, and impressive 3D charts. Built with modern web technologies for smooth performance and great user experience.",
    image: "https://i.ibb.co/v6PmFMVB/1740112965605.jpg",
    technologies: [
      "React",
      "D3.js",
      "TypeScript",
      "WebSockets",
      "Framer Motion",
    ],
    github: "https://github.com/tejasM17/Sri-Gurukula_pu_collage",
    demo: "https://srigirukulapu-collage.netlify.app/",
    featured: true,
  },
  {
    title: "Aura App",
    description:
      "Mobile AI art generation app with powerful on-device style transfer",
    fullDescription:
      "Android application that allows users to create stunning digital artwork using AI style transfer directly on-device. Built with Kotlin & Jetpack Compose, Firebase for auth/storage/sharing, modern Material 3 design, and smooth native experience.",
    image: "https://img.heroui.chat/image/ai?w=800&h=600&u=3",
    technologies: ["Kotlin", "Firebase", "Jetpack Compose", "Material 3"],
    github: "https://github.com/tejasM17/AURA",
    demo: "https://github.com/tejasM17/mainaura/releases/download/v1.0.0/AURA.apk",
    featured: true, // added — looks like a featured project
  },
  // Uncomment and update when ready:
  // {
  //   title: "Cyberpunk City Generator",
  //   description: "Procedural 3D city generator with customizable styles",
  //   fullDescription: "...",
  //   image: "https://img.heroui.chat/image/ai?w=800&h=600&u=4",
  //   technologies: ["Three.js", "React", "TypeScript", "WebWorkers", "GLSL"],
  //   github: "https://github.com/tejasM17/...",
  //   demo: "https://...netlify.app",
  // },
];

export default function ViewMoreProjects() {
  const [expandedId, setExpandedId] = useState(null);

  // Using title as key since no id — or use index if titles might duplicate
  const toggleExpand = (title) => {
    setExpandedId(expandedId === title ? null : title);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4">
            Project Matrix
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A collection of my recent experiments in AI, 3D graphics,
            interactive experiences, and mobile development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.title} // using title as unique key
              className={`
                group bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 
                rounded-2xl overflow-hidden transition-all duration-300
                hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-900/20
                ${project.featured ? "ring-1 ring-purple-500/30" : ""}
              `}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy" // good for performance
                />
                {project.featured && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-purple-600/80 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-800/70 text-gray-300 text-xs rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links + Expand */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        title="View on GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                        title="Live Demo / Download"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => toggleExpand(project.title)}
                    className="flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    {expandedId === project.title ? "Less" : "More"}
                    {expandedId === project.title ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                </div>

                {/* Expanded section */}
                {expandedId === project.title && (
                  <div className="mt-6 pt-6 border-t border-gray-800 animate-fade-in">
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {project.fullDescription}
                    </p>

                    {/* You can later add features list here if you want */}
                    {/* {project.features && (
                      <ul className="list-disc list-inside text-gray-400 space-y-1.5 text-sm">
                        {project.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    )} */}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-500 text-sm">
          <a
            href="https://github.com/tejasM17"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white inline-flex items-center gap-1.5 transition-colors"
          >
            <Github size={25} />
          </a>{" "}
          <br />
          get in touch!
        </div>
      </div>
    </div>
  );
}
