import React, { useState } from "react";
import EASY from "../images/ep.png";
import EK from "../images/ek.png";
import TH from "../images/th.png";
import AC from "../images/ac.png";
import HN from "../images/noko.png";
import { CiGlobe } from "react-icons/ci";

// Liste des projets avec des images valides
const projects = [
  {
    name: "Teranga Holding",
    result: "Application pour acheter ou vendre ses biens immobiliers comme des véhicules",
    link: "",
    image: TH,
  },
  {
    name: "Hypermarché Noko",
    result: "Boutique en ligne pour des produits alimentaires",
    link: "https://hypermarche-noko.vercel.app/",
    image: HN,
  },
  {
    name: "Aero Course",
    result: "Application de réservation des courses pour AIBD",
    link: "https://aero-course.vercel.app/",
    image: AC,
  },
  {
    name: "EK Shopping",
    result: "Boutique de vêtements en ligne",
    link: "https://haurly-shop.vercel.app/",
    image: EK,
  },
  {
    name: "Easy Portfolio",
    result: "Application pour créer facilement un portfolio en ligne",
    link: "",
    image: EASY,
  },
];

const Projects = () => {
  // État pour gérer l'image agrandie
  const [selectedImage, setSelectedImage] = useState(null);

  // Fonction pour ouvrir l'image en grand
  const openImage = (image) => {
    setSelectedImage(image);
  };

  // Fonction pour fermer la modale
  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-[70px] mt-[100px] bg-gray-100 shadow-2xl rounded-xl mx-[20px] transition duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Projets Réalisés
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group md:flex rounded-lg text-gray-800 shadow-md overflow-hidden transition transform hover:scale-105 hover:bg-red-500 hover:text-white"
            >
              <div className="p-6 md:w-[50%]">
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <p className="mt-4">{project.result}</p>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center text-red-500 hover:underline group-hover:text-white"
                  >
                    <CiGlobe className="mr-2 content-center" /> Visiter le site
                  </a>
                ) : (
                  <p className="mt-5 text-gray-500">Site non disponible</p>
                )}
              </div>
              <div className="md:p-6">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full md:w-[200px] h-[200px] rounded-b-lg md:rounded-lg object-cover cursor-pointer"
                  onClick={() => openImage(project.image)} // Ouvre l'image au clic
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modale pour afficher l'image en grand */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <img
            src={selectedImage}
            alt="Agrandissement"
            className="max-w-[90%] max-h-[90%] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 text-white text-2xl bg-red-500 rounded-full w-10 h-10 flex items-center justify-center"
            onClick={closeImage}
          >
            X
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
