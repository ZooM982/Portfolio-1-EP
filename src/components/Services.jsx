import React from "react";

const services = [
  { title: "Stratégies marketing", description: "Création de plans marketing sur mesure." },
  { title: "Gestion des réseaux sociaux", description: "Augmentez votre audience et votre engagement." },
  { title: "SEO", description: "Optimisation pour les moteurs de recherche." },
  { title: "Publicité digitale", description: "Campagnes Google Ads et Facebook Ads." },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Mes Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
