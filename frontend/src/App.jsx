import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Admin from "./pages/Admin.jsx";
import { Menu, X } from "lucide-react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <nav className="bg-gradient-to-r from-indigo-500 to-indigo-900 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-14">
          <Link to="/" className="text-lg font-bold tracking-wide">
            URL Shortener
          </Link>
          <div className="hidden md:flex gap-6">
            <Link
              to="/"
              className="hover:text-blue-200 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/admin"
              className="hover:text-blue-200 transition-colors duration-200"
            >
              Admin
            </Link>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-blue-700">
            <Link
              to="/"
              className="block px-4 py-2 hover:bg-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/admin"
              className="block px-4 py-2 hover:bg-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Admin
            </Link>
          </div>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
