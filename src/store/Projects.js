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
    demo: "https://jerry-dun.vercel.app/",
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
  },
  {
    title: "Aura App",
    description:
      "Mobile AI art generation app with powerful style transfer running on-device",
    fullDescription:
      "Aura AI is an Android application that lets you create stunning digital artwork using advanced AI style transfer directly on your phone. Built with Kotlin and powered by Firebase for authentication, storage, and sharing features. Generate art, apply custom styles, edit in real-time, and share your creations with the community — all with a smooth, native experience.",
    image: "https://img.heroui.chat/image/ai?w=800&h=600&u=3",
    technologies: ["Kotlin", "Firebase", "Jetpack Compose", "Material 3"],
    github: "https://github.com/tejasM17/AURA",
    demo: "https://github.com/tejasM17/AURA/releases/download/V.1.0.11/AURA.apk",
    features: [
      "On-device AI-powered style transfer",
      "Real-time preview and processing",
      "Offline support for cached models/styles",
      "Firebase authentication & cloud gallery",
      "Share creations via social media or direct link",
      "Modern Material 3 UI with smooth animations",
      "Customizable brushes and editing tools",
    ],
  },
  {
    title: "Med-Link",
    description:
      "A smart platform connecting patients with nearby doctors and managing digital health records",
    fullDescription:
      "Med-Link is a healthcare platform that bridges the gap between patients and doctors by enabling secure digital health record storage, real-time doctor discovery, and seamless appointment booking. Patients can upload and manage medical reports, while doctors can access patient history, provide digital prescriptions, and manage appointments efficiently. The system improves consultation speed, accessibility, and overall healthcare experience.",
    image: "https://i.ibb.co/XkkqghfT/Screenshot-2026-04-08-211523.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Firebase", "Tailwind CSS", "Google Maps API"],
    github: "https://github.com/tejasM17/Rajeev-event-2026-",
    demo: "https://med-link-frontend-theta.vercel.app/",
    features: [
      "Secure digital storage of medical reports, prescriptions, and lab results",
      "Health timeline for easy visualization of patient medical history",
      "Location-based doctor discovery with specialization and filtering",
      "Online appointment booking and management system",
      "Doctor dashboard to view patient history and write digital prescriptions",
      "Real-time notifications for appointments and prescriptions",
    ],
  },

  {
    title: "VERIF AI",

    description:
      "AI-powered academic profile verification platform for students and recruiters.",

    fullDescription:
      "VERIF AI is an intelligent verification platform that analyzes resumes, certificates, GitHub profiles, and online evidence using multiple AI agents. It generates a transparent trust score with live research logs, helping recruiters discover verified talent while enabling students to build trusted professional profiles. The platform uses LangGraph for multi-agent orchestration, Gemini for AI reasoning, Firebase Authentication, MongoDB GridFS for document storage, and FastAPI for scalable backend services.",

    image: "https://i.ibb.co/ym4XbGs1/verif-ai.png",

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "Firebase Authentication",
      "Firestore",
      "MongoDB GridFS",
      "LangGraph",
      "LangChain",
      "Google Gemini",
      "GitHub API",
      "Docker"
    ],

    github: "https://github.com/tejasM17/verif-ai-backend",

    demo: "https://verifai-frontend-2uug.onrender.com",

    features: [
      "AI-powered resume verification",
      "Certificate authenticity analysis",
      "GitHub profile and repository evaluation",
      "Multi-agent verification using LangGraph",
      "Live AI research logs during verification",
      "Transparent Trust Score generation",
      "Student and Recruiter role-based authentication",
      "Firebase Email, Google, and GitHub authentication",
      "Recruiter talent discovery with advanced filtering",
      "Public verified student profiles",
      "Document storage using MongoDB GridFS",
      "FastAPI backend with scalable REST APIs",
      "Responsive modern dashboard",
      "Secure JWT and Firebase token verification"
    ]
  }
];
