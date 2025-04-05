import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Teranga from "../images/teranga.png";
import Noko from "../images/noko.png";
import Aerocourse from "../images/aerocourse.png";
import Haurlyshop from "../images/haurlyshop.png";
import EASY from "../images/easyportfolio.png";
import { CiGlobe } from "react-icons/ci";

const projects = [
  { name: "Teranga Holding", resultKey: "projects.terangaHolding", link: "https://www.teranga-holding.com/", image: Teranga },
  { name: "Hypermarché Noko", resultKey: "projects.hypermarcheNoko", link: "https://hypermarche-noko.vercel.app/", image: Noko },
  { name: "Aero Course", resultKey: "projects.aeroCourse", link: "https://aero-course.com/", image: Aerocourse },
  { name: "HS Shopping", resultKey: "projects.hsShopping", link: "https://haurly-shop.vercel.app/", image: Haurlyshop },
  { name: "Easy Portfolio", resultKey: "projects.easyPortfolio", link: "", image: EASY },
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { t } = useTranslation();

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

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
        className="py-20 bg-white dark:bg-gray-900"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            {t("projects.title")}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="relative rounded-lg shadow-md overflow-hidden group h-64" // Hauteur fixe pour les cartes
              >
                {/* Image de fond */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40"
                  onClick={() => handleImageClick(project.image)} // Clic pour ouvrir la modale
                />

                {/* Contenu affiché au survol */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                  <p className="text-gray-200 text-sm text-center mb-4">{t(project.resultKey)}</p>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-red-600 hover:text-red-500 transition duration-200"
                    >
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

        {/* Modale pour afficher l'image en grand */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-6"
            onClick={handleCloseModal}
          >
            <div className="relative max-w-4xl w-full">
              <motion.img
                src={selectedImage}
                alt="Agrandie"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <button
                className="absolute top-4 right-4 bg-white text-gray-900 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition duration-200"
                onClick={handleCloseModal}
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </motion.section>
    </>
  );
};

export default Projects;
