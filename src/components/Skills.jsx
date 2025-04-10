import React from 'react';
import { FaReact, FaBootstrap, FaNodeJs, FaLaravel, FaHtml5, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiPostgresql, SiMysql, SiPostman } from 'react-icons/si';

const skills = [
    { type: 'icon', icon: <FaReact />, name: "React" },
    { type: 'icon', icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { type: 'icon', icon: <FaBootstrap />, name: "Bootstrap" },
    { type: 'icon', icon: <FaNodeJs />, name: "Node.js" },
    { type: 'icon', icon: <FaLaravel />, name: "Laravel" },
    { type: 'icon', icon: <FaHtml5 />, name: "HTML5" },
    { type: 'icon', icon: <FaGitAlt />, name: "Git" },
    { type: 'icon', icon: <SiPostgresql />, name: "PostgreSQL" },
    { type: 'icon', icon: <SiMysql />, name: "MySQL" },
    { type: 'icon', icon: <SiPostman />, name: "Postman" },
    { type: 'icon', icon: <FaNodeJs />, name: "NestJS" },
];

const Skills = () => {
    return (
        <div className="overflow-hidden py-5 ">
            <div className="relative">
                <div className="flex animate-scroll whitespace-nowrap">
                    {/* Double la liste pour un défilement continu */}
                    {[...skills, ...skills].map((skill, index) => (
                        <div
                            key={index}
                            className="inline-flex items-center justify-center mx-6"
                        >
                            {skill.type === 'icon' ? (
                                <div className="grid gap-2 content-center w-[120px] boxshadow h-[120px] shadow-lg rounded-lg bg-white items-center justify-center">
                                    <span className="text-[#fa2f0b] text-[50px]">{skill.icon}</span>
                                    <span className="text-center text-sm font-medium text-gray-700">{skill.name}</span>
                                </div>
                            ) : (
                                <img
                                    src={skill.icon}
                                    alt="Skill"
                                    className="p-5 w-[100px] h-[100px] shadow-lg rounded-lg bg-white"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 20s linear infinite;
                }
                .relative:hover .animate-scroll {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default Skills;
