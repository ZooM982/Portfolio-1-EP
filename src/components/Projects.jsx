import React from "react";

// Liste des projets avec des images valides
const projects = [
  {
    name: "Projet 1",
    result:
      "Diam eros turpis ac per maecenas dui eu. Suspendisse senectus diam potenti viverra; efficitur conubia risus.",
    image: "https://deepai.org/static/images/dolphin1.svg",
  },
  {
    name: "Projet 2",
    result:
      "Diam eros turpis ac per maecenas dui eu. Suspendisse senectus diam potenti viverra; efficitur conubia risus.",
    image:
      "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_640.jpg",
  },
  {
    name: "Projet 3",
    result: "Diam eros turpis ac per maecenas dui eu. Suspendisse senectus diam potenti viverra; efficitur conubia risus.",
    image:
      "https://img.freepik.com/free-photo/view-steel-hammer-with-other-construction-elements-tools_23-2150576384.jpg?size=626&ext=jpg",
  },
  {
    name: "Projet 4",
    result: "Diam eros turpis ac per maecenas dui eu. Suspendisse senectus diam potenti viverra; efficitur conubia risus.",
    image:
      "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
  },
];

const Projects = () => {
  return (
    <section className="py-[70px] mt-[100px] bg-gray-100 shadow-2xl rounded-xl mx-[20px] transition duration-500 ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Projets Réalisés
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="md:flex rounded-lg text-gray-800 shadow-md overflow-hidden transition transform hover:scale-105 hover:bg-red-500 hover:text-white"
            >
              <div className="p-6 md:w-[50%] ">
                <h3 className="text-2xl font-semibold ">
                  {project.name}
                </h3>
                <p className="mt-4">{project.result}</p>
              </div>
              <div className="md:p-6">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full md:w-[200px] h-[200px] rounded-b-lg md:rounded-lg object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
