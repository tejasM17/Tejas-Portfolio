import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // ✅ This line is critical for Tailwind to work
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ViewMoreProjects from "./pages/viewMoreProjects.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/viewallprojects" element={<ViewMoreProjects />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
