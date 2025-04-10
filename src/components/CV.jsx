import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaReact, FaBootstrap, FaNodeJs, FaLaravel, FaHtml5, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiPostgresql, SiMysql, SiPostman } from "react-icons/si";

const EntryItem = ({ date, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col sm:flex-row py-4 border-b border-gray-200 dark:border-gray-600 last:border-0"
  >
    <div className="w-full sm:w-1/3 text-gray-600 dark:text-gray-300">{date}</div>
    <div className="w-full sm:w-2/3">
      <p className="font-semibold text-gray-900 dark:text-white">{title}</p>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </motion.div>
);

const SkillCard = ({ skill, icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md flex items-center gap-2"
  >
    {icon}
    <p className="text-gray-800 dark:text-white text-sm md:text-base">{skill}</p>
  </motion.div>
);

const About = () => {
  const { t } = useTranslation();

  const experienceData = [
    { date: "2025", title: "Développeur Front-end - PoinTech Invest", description: "Développement d'une application web avec React Router." },
    { date: "2025", title: "Développeur Full Stack - Africa Send", description: "Développement d'une application MERN." },
    { date: "2025", title: "Développeur Full Stack - Teranga Holding", description: "Développement d'une application web avec React et NestJS, intégration d'une base de données Postgres." },
    { date: "2025", title: "Développeur Full Stack - Hypermarche NOKO", description: "Développement d'une application MERN." },
    { date: "2025", title: "Développeur Full Stack - Aero Course", description: "Développement d'une application MERN." },
    { date: "2024 - 2025", title: "Développeur Full Stack - EK Shopping", description: "Développement d'une application MERN." },
    { date: "2024", title: "Développeur Full Stack - Easy Portfolio", description: "Développement d'une application web avec React et Laravel, intégration d'une base de données MySQL." },
  ];

  const educationData = [
    { date: "2023-2024", title: "Formation en Développement WEB - Bakeli", description: "Spécialisation en développement web et bases de données (Node.js, MySQL)." },
    { date: "2022", title: "Licence 2 en Génie informatique - Confucius de l’UCAD", description: "Apprentissage des fondamentaux." },
    { date: "2021", title: "Licence 1 en Génie informatique - AMDI", description: "Apprentissage des fondamentaux : HTML, CSS et templates." },
    { date: "2018-2019", title: "Bac technique en électronique et électro-technique - I3p", description: "Fondamentaux : HTML, CSS." },
  ];

  const skills = [
    { skill: "React : Applications web dynamiques avec composants et hooks.", icon: <FaReact className="text-[#fa2f0b] text-[35px]" /> },
    { skill: "Tailwind CSS : Interfaces responsives et personnalisées.", icon: <SiTailwindcss className="text-[#fa2f0b] text-[35px]" /> },
    { skill: "Bootstrap : UI cohérentes et adaptatives.", icon: <FaBootstrap className="text-[#fa2f0b] text-[35px]" /> },
    { skill: "NestJS : Backend scalable avec TypeScript.", icon: <FaNodeJs className="text-[#fa2f0b] text-[35px]" /> },
    { skill: "Node.js : Serveurs performants et full-stack JS.", icon: <FaNodeJs className="text-[#fa2f0b] text-[35px]" /> },
    { skill: "Laravel : Applications PHP sécurisées avec MVC.", icon: <FaLaravel className="text-[#fa2f0b] text-[35px]" /> },
    { skill: "HTML & CSS : Sites modernes et accessibles.", icon: <FaHtml5 className="text-[#fa2f0b] text-[35px]" /> },
    { skill: "Git : Gestion de versions et collaboration.", icon: <FaGitAlt className="text-[#fa2f0b] text-[35px]" /> },
    { skill: "PostgreSQL : Bases de données relationnelles.", icon: <SiPostgresql className="text-[#fa2f0b] text-[35px]" /> },
    { skill: "MySQL : Conception et optimisation de bases.", icon: <SiMysql className="text-[#fa2f0b] text-[35px]" /> },
    { skill: "Postman : Tests et documentation d'API RESTful.", icon: <SiPostman className="text-[#fa2f0b] text-[35px]" /> },
  ];

  return (
    <>
      <Helmet>
        <title>{t("about.title")} - Revhieno Roll Haurly</title>
        <meta name="description" content="Découvrez mon parcours, mes expériences professionnelles, formations et compétences en développement web." />
      </Helmet>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12 text-center">{t("about.title")}</motion.h2>
          <div className="space-y-12">
            <div>
              <motion.h3 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">{t("about.experience")}</motion.h3>
              {experienceData.map((item, index) => <EntryItem key={index} {...item} />)}
            </div>
            <div>
              <motion.h3 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">{t("about.education")}</motion.h3>
              {educationData.map((item, index) => <EntryItem key={index} {...item} />)}
            </div>
            <div>
              <motion.h3 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }} className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">{t("about.skills")}</motion.h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <SkillCard key={index} skill={skill.skill} icon={skill.icon} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
