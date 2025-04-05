import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta name="description" content={t("footer.rights")} />
      </Helmet>
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-8 bg-gray-900 text-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-2">{t("contact.phone")}</h3>
            <p>{t("contact.phoneNumber")}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">{t("contact.email")}</h3>
            <p>{t("contact.emailAddress")}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">{t("footer.follow")}</h3>
            <p className="text-gray-400">{t("footer.followSoon")}</p>
          </div>
        </div>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 text-center text-gray-500 text-sm">
          {t("footer.rights")}
        </motion.div>
      </motion.footer>
    </>
  );
};

export default Footer;
