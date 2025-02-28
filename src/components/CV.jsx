import React from "react";

// Composant pour les entrées d'expérience et de formation
const EntryItem = ({ date, title, description }) => (
  <div className="flex my-5">
    <div className="w-[30%] md:text-xl">{date}</div>
    <div className="w-[60%] ms-5 text-left">
      <p className="font-bold text-xl">{title}</p>
      <p>{description}</p>
    </div>
  </div>
);

// Composant pour les compétences (carte compacte avec animation)
const SkillCard = ({ skill }) => (
  <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
    <p className="text-gray-800 text-sm md:text-base">{skill}</p>
  </div>
);

const About = () => {
  const experienceData = [
    {
      date: "2025",
      title: "Développeur Full Stack - Teranga Holding",
      description:
        "Développement d'une application web avec React et NestJS, intégration d'une base de données Postgres.",
    },
    {
      date: "2025",
      title: "Développeur Full Stack - Hypermarche NOKO",
      description:
        "Développement d'une application web avec React et NodeJS et MongoDB.",
    },
    {
      date: "2025",
      title: "Développeur Full Stack - Aero Course",
      description:
        "Développement d'une application web avec React et NodeJS et MongoDB.",
    },
    {
      date: "2024 - 2025",
      title: "Développeur Full Stack - EK Shopping",
      description:
        "Développement d'une application web avec React NodeJS et MongoDB",
    },
    {
      date: "2024",
      title: "Développeur Full Stack - Easy Portfolio",
      description:
        "Développement d'une application web avec React et Laravel, intégration d'une base de données MySQL.",
    },
  ];

  const educationData = [
    {
      date: "2023-2024",
      title: "Formation en Développement WEB - Bakeli",
      description:
        "Spécialisation en développement web et bases de données (Node.js, MySQL).",
    },
    {
      date: "2022",
      title: "Licence 2 en Génie informatique - Confucius de l’UCAD",
      description: "Apprentissage des fondamentaux.",
    },
    {
      date: "2021",
      title: "Licence 1 en Génie informatique - AMDI",
      description:
        "Apprentissage des fondamentaux : HTML, CSS et des templates",
    },
    {
      date: "2018-2019",
      title: "Bac technique en électronique et électro-technique - I3p",
      description:
        "Apprentissage des fondamentaux : HTML, CSS, JavaScript, Git.",
    },
  ];

  const skills = [
    "React : Développement d'applications web dynamiques avec gestion des composants et hooks.",
    "Tailwind CSS : Création d'interfaces responsives avec un styling rapide et personnalisé.",
    "Bootstrap : Conception d'UI cohérentes et adaptatives via un framework CSS éprouvé.",
    "NestJS : Construction d'applications backend scalables avec TypeScript.",
    "Node.js : Développement de serveurs performants et full-stack JavaScript.",
    "Laravel : Réalisation d'applications PHP sécurisées avec un framework MVC.",
    "HTML & CSS : Maîtrise des fondamentaux pour des sites modernes et accessibles.",
    "Git : Gestion de versions et collaboration efficace sur des projets.",
    "PostgreSQL : Gestion de bases de données relationnelles performantes.",
    "MySQL : Conception et optimisation de bases de données pour le web.",
    "Postman : Test et documentation d'API RESTful pour un workflow backend.",
  ];

  return (
    <section className="py-[70px] mt-[100px] bg-gray-100 shadow-2xl rounded-xl mx-[20px] transition duration-500">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-left font-bold mb-4">CV</h2>

        {/* Section Expérience professionnelle */}
        <div className="md:flex border-b-2 border-red-500 mb-8">
          <div className="md:w-1/2 mb-5 font-bold text-2xl">
            Expérience professionnelle
          </div>
          <div className="md:w-1/2">
            {experienceData.map((item, index) => (
              <EntryItem key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Section Formations */}
        <div className="md:flex border-b-2 border-red-500 mb-8">
          <div className="md:w-1/2 mb-5 font-bold text-2xl">Formations</div>
          <div className="md:w-1/2">
            {educationData.map((item, index) => (
              <EntryItem key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Section Compétences et expertise (grille de cartes avec animations) */}
        <div className="md:flex">
          <div className="md:w-1/2 mb-5 font-bold text-2xl">
            Compétences et expertise
          </div>
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
