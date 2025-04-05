import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Pic from "../images/8d6173d7-4804-483b-b852-bb7b8fdf52e8.jpg";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("hero.about")} - {t("navbar.developer")}</title>
        <meta name="description" content={t("hero.description")} />
      </Helmet>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-[83.5px] bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 flex items-center justify-center"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl"
          >
            <img src={Pic} alt={t("hero.about")} className="w-full h-full object-cover" />
          </motion.div>
          <div className="text-center md:text-left space-y-6 max-w-lg">
            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">{t("hero.greeting")}</motion.h1>
            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="text-xl font-semibold text-gray-700 dark:text-gray-200">{t("hero.about")}</motion.p>
            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="text-gray-600 dark:text-gray-300">{t("hero.description")}</motion.p>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }} className="flex justify-center md:justify-start gap-4">
              <Link to="/about" className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300">{t("navbar.cv")}</Link>
              <Link to="/projects" className="px-6 py-3 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-gray-700 transition duration-300">{t("navbar.projects")}</Link>
              <Link to="/contact" className="px-6 py-3 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-gray-700 transition duration-300">{t("navbar.contact")}</Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
