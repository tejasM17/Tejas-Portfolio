import React from "react";
import Home from "./pages/Home";

import { ProjectSection } from "./pages/ProjectSection";
import Skills from "./pages/Skills";
import ContactSection from "./pages/ContactSection";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import { inject } from '@vercel/analytics';

inject();


function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-[#0a0a0f] text-white overflow-hidden dark">
        <Navbar />

        <main>
          <Home />
          <ProjectSection />
          <Skills />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
