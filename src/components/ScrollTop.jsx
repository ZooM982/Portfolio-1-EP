import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Helmet><meta name="description" content="Composant de défilement automatique pour le portfolio." /></Helmet>;
};

export default ScrollToTop;
