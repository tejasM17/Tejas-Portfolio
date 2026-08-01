import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // ✅ This line is critical for Tailwind to work
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
