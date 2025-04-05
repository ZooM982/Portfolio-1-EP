import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import fr from "../images/fr.webp";
import usa from "../images/usa.png";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
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
        className={`fixed top-0 left-0 w-full z-50 py-4 px-6 flex items-center justify-between transition duration-300 ${scrolled ? "bg-white dark:bg-gray-800 shadow-lg" : "bg-transparent"}`}
      >
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded-full bg-red-600"></div>
          <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-red-600 transition duration-200">{t("navbar.home")}</Link>
          <span className="text-sm text-gray-500 dark:text-gray-300 hidden md:inline">{t("navbar.developer")}</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-red-600 transition duration-200">{t("navbar.cv")}</Link>
          <Link to="/projects" className="text-gray-700 dark:text-gray-200 hover:text-red-600 transition duration-200">{t("navbar.projects")}</Link>
          <Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:text-red-600 transition duration-200">{t("navbar.contact")}</Link>
          <button onClick={() => toggleLanguage("fr")} className="text-gray-700 dark:text-gray-200 hover:text-red-600"><img src={fr} alt="fr" className="w-6" /></button>
          <button onClick={() => toggleLanguage("en")} c alt="fr"lassName="text-gray-700 dark:text-gray-200 hover:text-red-600"><img src={usa} alt="eng" className="w-6" /></button>
          <button onClick={toggleTheme} className="text-gray-700 dark:text-gray-200 hover:text-red-600">{darkMode ? <FaSun /> : <FaMoon />}</button>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
