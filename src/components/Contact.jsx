import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({ prenom: "", nom: "", email: "", objet: "", message: "" });
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateIDToAdmin = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const templateIDToSender = process.env.REACT_APP_EMAILJS_SENDER_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const adminParams = { from_name: `${formData.prenom} ${formData.nom}`, from_email: formData.email, subject: formData.objet, message: formData.message, to_email: "haurlyroll@gmail.com" };
    const senderParams = { from_name: `${formData.prenom} ${formData.nom}`, subject: formData.objet, message: formData.message, to_email: formData.email };

    if (!publicKey) {
      alert(t("contact.keyError"));
      return;
    }

    emailjs.send(serviceID, templateIDToAdmin, adminParams, publicKey)
      .then(() => emailjs.send(serviceID, templateIDToSender, senderParams, publicKey))
      .then(() => {
        alert(t("contact.success"));
        setFormData({ prenom: "", nom: "", email: "", objet: "", message: "" });
      })
      .catch((error) => {
        console.error("Erreur :", error);
        alert(t("contact.error"));
      });
  };

  return (
    <>
      <Helmet>
        <title>{t("contact.title")} - Revhieno Roll Haurly</title>
        <meta name="description" content={t("contact.messageDescription")} />
      </Helmet>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12 text-center">{t("contact.title")}</motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{t("contact.message")}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{t("contact.messageDescription")}</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{t("contact.phone")}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{t("contact.phoneNumber")}</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{t("contact.email")}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{t("contact.emailAddress")}</p>
              </div>
            </motion.div>
            <motion.form
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              onSubmit={handleSubmit}
              className="space-y-6 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="prenom" placeholder={t("contact.firstName")} value={formData.prenom} onChange={handleChange} className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-600 dark:text-white" required />
                <input type="text" name="nom" placeholder={t("contact.lastName")} value={formData.nom} onChange={handleChange} className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-600 dark:text-white" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="email" name="email" placeholder={t("contact.email")} value={formData.email} onChange={handleChange} className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-600 dark:text-white" required />
                <input type="text" name="objet" placeholder={t("contact.subject")} value={formData.objet} onChange={handleChange} className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-600 dark:text-white" required />
              </div>
              <textarea name="message" placeholder={t("contact.yourMessage")} value={formData.message} onChange={handleChange} className="w-full p-3 h-32 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-600 dark:text-white" required />
              <button type="submit" className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300">{t("contact.submit")}</button>
            </motion.form>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
