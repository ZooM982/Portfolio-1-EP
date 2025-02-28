import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    objet: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Récupération des variables d'environnement
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateIDToAdmin = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const templateIDToSender = process.env.REACT_APP_EMAILJS_SENDER_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // Vérification des valeurs pour débogage
    console.log("Service ID:", serviceID);
    console.log("Template ID (Admin):", templateIDToAdmin);
    console.log("Template ID (Sender):", templateIDToSender);
    console.log("Public Key:", publicKey);

    // Paramètres pour l'e-mail envoyé à toi (admin)
    const adminParams = {
      from_name: `${formData.prenom} ${formData.nom}`,
      from_email: formData.email,
      subject: formData.objet,
      message: formData.message,
      to_email: "haurlyroll@gmail.com",
    };

    // Paramètres pour l'e-mail envoyé à l’expéditeur
    const senderParams = {
      from_name: `${formData.prenom} ${formData.nom}`,
      subject: formData.objet,
      message: formData.message,
      to_email: formData.email, // E-mail de l’expéditeur
    };

    // Vérifie si la clé publique est définie
    if (!publicKey) {
      console.error("Public Key manquante !");
      alert("Erreur : Clé publique manquante. Contactez l'administrateur.");
      return;
    }

    // Envoi de l'e-mail à l'admin (toi)
    emailjs.send(serviceID, templateIDToAdmin, adminParams, publicKey)
      .then((response) => {
        console.log("E-mail envoyé à l'admin !", response.status, response.text);

        // Envoi de l'e-mail de confirmation à l’expéditeur
        return emailjs.send(serviceID, templateIDToSender, senderParams, publicKey);
      })
      .then((response) => {
        console.log("E-mail envoyé à l’expéditeur !", response.status, response.text);
        alert("Votre message a été envoyé avec succès ! Vous recevrez une confirmation par e-mail.");
        setFormData({
          prenom: "",
          nom: "",
          email: "",
          objet: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi :", error);
        alert("Une erreur est survenue. Veuillez réessayer.");
      });
  };

  return (
    <section className="py-[70px] mt-[100px] bg-gray-100 shadow-2xl rounded-xl mx-[20px] transition duration-500">
      <div className="grid md:flex md:justify-between max-w-4xl mx-auto px-6">
        <div className="grid md:w-[40%] text-left">
          <div className="mb-[25px]">
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="my-2">Nous avons hâte de vous lire</p>
          </div>
          <div className="mb-[25px]">
            <h2 className="text-3xl font-bold">Téléphone</h2>
            <p className="my-2">+221 78 597 50 58</p>
          </div>
          <div className="mb-[25px]">
            <h2 className="text-3xl font-bold">E-mail</h2>
            <p className="my-2">haurlyroll@gmail.com</p>
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 shadow-inner p-3 rounded-lg"
          >
            <div className="flex justify-between">
              <input
                type="text"
                name="prenom"
                placeholder="Votre prénom"
                value={formData.prenom}
                onChange={handleChange}
                className="w-[48%] p-4 border rounded-lg outline-none focus:outline-red-500"
                required
              />
              <input
                type="text"
                name="nom"
                placeholder="Votre nom de famille"
                value={formData.nom}
                onChange={handleChange}
                className="w-[48%] p-4 border rounded-lg outline-none focus:outline-red-500"
                required
              />
            </div>
            <div className="flex justify-between">
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                className="w-[48%] p-4 border rounded-lg outline-none focus:outline-red-500"
                required
              />
              <input
                type="text"
                name="objet"
                placeholder="Votre objet"
                value={formData.objet}
                onChange={handleChange}
                className="w-[48%] p-4 border rounded-lg outline-none focus:outline-red-500"
                required
              />
            </div>
            <div className="flex justify-between">
              <textarea
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                className="w-[65%] h-[150px] p-4 border rounded-lg outline-none focus:outline-red-500"
                required
              ></textarea>
              <button
                type="submit"
                className="w-[70px] md:w-[120px] h-[70px] md:h-[120px] bg-yellow-700 rounded-full text-white m-auto py-3 px-auto shadow-md hover:bg-yellow-500 transition duration-500"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
