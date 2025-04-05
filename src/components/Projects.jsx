import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import EASY from "../images/ep.png";
import HS from "../images/HS.png";
import TH from "../images/TH.png";
import AC from "../images/AC.png";
import HN from "../images/HN.png";
import { CiGlobe } from "react-icons/ci";

const projects = [
  { name: "Teranga Holding", resultKey: "projects.terangaHolding", link: "https://www.teranga-holding.com/", image: TH },
  { name: "Hypermarché Noko", resultKey: "projects.hypermarcheNoko", link: "https://hypermarche-noko.vercel.app/", image: HN },
  { name: "Aero Course", resultKey: "projects.aeroCourse", link: "https://aero-course.com/", image: AC },
  { name: "HS Shopping", resultKey: "projects.hsShopping", link: "https://haurly-shop.vercel.app/", image: HS },
  { name: "Easy Portfolio", resultKey: "projects.easyPortfolio", link: "", image: EASY },
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("projects.title")} - Revhieno Roll Haurly</title>
        <meta name="description" content={t("hero.description")} />
      </Helmet>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12 text-center">{t("projects.title")}</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="group bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative">
                  <img src={project.image} alt={project.name} className="w-full h-56 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105" onClick={() => setSelectedImage(project.image)} />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-600">{project.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{t(project.resultKey)}</p>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-red-600 hover:text-red-800 transition duration-200">
                      <CiGlobe className="mr-2" /> {t("projects.visit")}
                    </a>
                  ) : (
                    <p className="text-gray-400 text-sm italic">{t("projects.inProgress")}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <img src={selectedImage} alt="Agrandie" className="w-full h-auto rounded-lg shadow-2xl" />
              <button className="absolute top-2 right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200" onClick={() => setSelectedImage(null)}>✕</button>
            </div>
          </motion.div>
        )}
      </motion.section>
    </>
  );
};

export default Projects;
