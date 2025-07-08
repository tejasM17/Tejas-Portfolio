import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'; // ✅ This line is critical for Tailwind to work
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router'
import Home from './pages/Home.jsx'
import ListArticles from './pages/aticlepdf/ListArticles.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/articles" element={<ListArticles />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
