import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import fr from "../images/fr.webp"; // Drapeau français
import usa from "../images/usa.png"; // Drapeau anglais

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // État pour le mode sombre
  const [isOpen, setIsOpen] = useState(false); // État pour le menu burger
  const { t, i18n } = useTranslation();

  // Détecter le thème système et l'appliquer au chargement
  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(systemPrefersDark); // Initialise selon le thème système
    if (systemPrefersDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Gérer le scroll pour l'effet de fond
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Basculer le thème manuellement
  const toggleTheme = () => {
    setDarkMode((prev) => !prev); // Inverse l'état actuel
    document.documentElement.classList.toggle("dark"); // Ajoute ou enlève la classe "dark"
  };

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Helmet>
        <meta name="description" content={t("navbar.developer")} />
      </Helmet>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12 flex items-center justify-between transition duration-300 ${
          scrolled ? "bg-white dark:bg-gray-800 shadow-md" : "bg-transparent"
        }`}
      >
        {/* Logo et titre */}
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 rounded-full bg-[#dc2626]"></div>
          <Link
            to="/"
            className="text-2xl font-semibold text-gray-900 dark:text-white hover:text-[#fa2f0b] transition duration-200"
          >
            {t("navbar.home")}
          </Link>
          <span className="text-sm text-gray-500 dark:text-gray-400 hidden md:inline">
            {t("navbar.developer")}
          </span>
        </div>

        {/* Boutons et menu */}
        <div className="flex items-center gap-6">
          {/* Menu burger pour mobile */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200 hover:text-[#fa2f0b] text-2xl"
            onClick={toggleMenu}
          >
            {isOpen ? "✕" : "☰"}
          </button>

          {/* Liens de navigation */}
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-center gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-gray-800 md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none`}
          >
            <Link
              to="/about"
              className="text-gray-700 dark:text-gray-200 hover:text-[#fa2f0b] transition duration-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {t("navbar.cv")}
            </Link>
            <Link
              to="/projects"
              className="text-gray-700 dark:text-gray-200 hover:text-[#fa2f0b] transition duration-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {t("navbar.projects")}
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 dark:text-gray-200 hover:text-[#fa2f0b] transition duration-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {t("navbar.contact")}
            </Link>
          </div>

          {/* Drapeaux et thème */}
          <div className="flex items-center gap-4">
            <button onClick={() => toggleLanguage("fr")} className="hover:text-[#fa2f0b] transition duration-200">
              <img src={fr} alt="Français" className="w-6 h-6 rounded-full" />
            </button>
            <button onClick={() => toggleLanguage("en")} className="hover:text-[#fa2f0b] transition duration-200">
              <img src={usa} alt="English" className="w-6 h-6 rounded-full" />
            </button>
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-200 hover:text-[#fa2f0b] transition duration-200"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
