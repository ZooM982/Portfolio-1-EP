import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Détecter le défilement
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-4 px-6 flex flex-wrap text-center md:justify-between transition duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Logo et Titre */}
      <div className="flex items-center space-x-3">
        <div className="h-5 w-5 rounded-full bg-red-500"></div>
        <h1 className="text-xl font-bold">
          <Link to="/" className="hover:text-red-500 transition duration-200">
            Revhieno Roll Haurly
          </Link>
        </h1>
        <span className="text-sm text-gray-500 hidden md:inline-block">
          Développeur Web
        </span>
      </div>

      {/* Liens de Navigation */}
      <div className="flex ms-[70px] space-x-6 mt-4 md:mt-0">
        <Link
          to="/about"
          className="hover:underline hover:text-red-500 transition duration-200 border-r-2 border-red-500 pr-4"
        >
          CV
        </Link>
        <Link
          to="/projects"
          className="hover:underline hover:text-red-500 transition duration-200 border-r-2 border-red-500 pr-4"
        >
          Projets
        </Link>
        <Link
          to="/contact"
          className="hover:underline hover:text-red-500 transition duration-200"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
