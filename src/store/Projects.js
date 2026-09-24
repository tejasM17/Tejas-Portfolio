export const projects = [
  {
    title: "AI - Chatbot",
    description: "Interactive text, photo generation modle using APIs",
    fullDescription:
      "Nebula is an immersive 3D galaxy explorer that allows users to navigate through a procedurally generated universe. Built with Three.js and React, it features realistic celestial physics, interactive star systems, and educational content about astronomy.",
    image: "https://i.ibb.co/F4gsjFh3/jerry-ai.png",
    technologies: [
      "React",
      "Huggingface-API",
      "Javascript",
      "Tailwind",
      "Three.js",
    ],
    github: "https://github.com/tejasM17/jerry",
    demo: "https://jerry-alpha.vercel.app/",
    featured: true,
    features: [
      "Procedurally generated galaxy with thousands of stars",
      "Interactive navigation with zoom and rotation controls",
      "Realistic physics simulation of celestial bodies",
      "Educational information about different star types",
      "Optimized rendering for smooth performance",
    ],
  },

  {
    title: "Ghost AI",
    description:
      "Real-time collaborative system design workspace with an AI agent on a shared canvas",
    fullDescription:
      "Ghost AI is a real-time collaborative system design workspace where teams prompt an AI agent onto a shared canvas, refine designs together, and export the result as Markdown specs. It combines a multiplayer canvas (Liveblocks + React Flow), background design and spec generation jobs (Trigger.dev), persistent storage (Postgres via Prisma, Vercel Blob for snapshots), and Google Gemini for the AI agent — all behind Clerk authentication and a Next.js 16 + Tailwind v4 UI.",
    image: "https://i.ibb.co/G4sm1N11/gost-dev.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Clerk",
      "Prisma",
      "PostgreSQL",
      "Liveblocks",
      "React Flow",
      "Trigger.dev",
      "Vercel Blob",
      "Google Gemini",
      "Zod",
    ],
    github: "https://github.com/tejasM17/ghost-dev",
    demo: "https://ghost-dev-delta.vercel.app/",
    featured: true,
    features: [
      "Real-time multiplayer canvas powered by Liveblocks",
      "React Flow–based system design editor with nodes and edges",
      "AI agent for system design prompting (Google Gemini via Vercel AI SDK)",
      "Background jobs for design and Markdown spec generation (Trigger.dev)",
      "Markdown spec export rendered with react-markdown",
      "Persistent canvas snapshots and specs on Vercel Blob",
      "User authentication and session management via Clerk",
      "PostgreSQL data layer with Prisma ORM and migrations",
      "Next.js 16 App Router with React 19 and Tailwind v4 UI",
      "Typed API contracts and validation with Zod",
    ],
  },
  {
    title: "Gurukula PU Collage",
    description:
      "Data visualization dashboard with real-time updates and 3D charts",
    fullDescription:
      "Quantum Dashboard is a cutting-edge data visualization platform designed for monitoring complex systems. It features real-time data updates, interactive 3D charts, and customizable widgets that can be arranged in a flexible grid layout.",
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
    features: [
      "Real-time data visualization with WebSocket integration",
      "Interactive 3D charts and graphs",
      "Customizable dashboard layout with drag-and-drop widgets",
      "Dark mode with cyberpunk-inspired design",
      "Responsive design for all device sizes",
    ],
  }
];
