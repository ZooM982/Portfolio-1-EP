/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Pic from "../images/8d6173d7-4804-483b-b852-bb7b8fdf52e8.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="text-center py-[98px] md:px-[150px] flex flex-wrap justify-center items-center space-y-8 md:space-y-0 md:justify-between">
      {/* Section de l'image */}
      <div className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
        <img
          src={Pic}
          alt="Photo de profil de Revhieno Roll Haurly"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Section de présentation */}
      <div className="flex flex-col text-center space-y-6 max-w-[90%] md:max-w-lg ">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Salut 👋
        </h1>
        <p className="text-2xl text-start font-semibold text-gray-600">À propos de moi</p>
        <p className="text-left text-gray-500 leading-relaxed">
          Je suis{" "}
          <span className="font-bold text-red-500">Revhieno Roll Haurly</span>,
          développeur Web et designer UX/UI passionné. J'aide à créer des
          expériences numériques attrayantes et performantes.
        </p>

        {/* Boutons circulaires */}
        <div className="flex space-x-6 mt-4 md:max-w-lg">
          <div className="w-[100px] md:w-[120px] h-[100px] md:h-[120px] flex justify-center items-center rounded-full border border-gray-400 hover:bg-red-500 hover:text-white transition duration-300 shadow-md">
            <Link to="/about" className="text-lg transition transform duration-300 font-medium">CV</Link>
          </div>
          <div className="w-[100px] md:w-[120px] h-[100px] md:h-[120px] flex justify-center items-center rounded-full border border-gray-400 hover:bg-red-500 hover:text-white transition duration-300 shadow-md">
            <Link to="/projects" className="text-lg transition transform duration-300 font-medium">Projets</Link>
          </div>
          <div className="w-[100px] md:w-[120px] h-[100px] md:h-[120px] flex justify-center items-center rounded-full border border-gray-400 hover:bg-red-500 hover:text-white transition duration-300 shadow-md">
            <Link to="/contact" className="text-lg transition transform duration-300 font-medium">Contact</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
