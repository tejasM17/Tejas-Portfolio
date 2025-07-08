import React from "react";
import { NavLink } from "react-router";
import Home from "./pages/Home";

import { ProjectSection } from "./pages/ProjectSection";
import Skills from "./pages/Skills";
import ContactSection from "./pages/ContactSection";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-background text-foreground overflow-hidden dark">
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
