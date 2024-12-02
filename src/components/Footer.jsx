const Footer = () => {
  return (
    <section className="transition-all">
      <div className="grid md:flex border-t-[2px] border-red-500 mt-[10px] w-[90%] mx-auto ">
        <div className="md:w-[33%] mx-auto flex md:justify-between">
          <div className="my-[20px] mx-auto w-[50%] ">
            <h1 className="font-bold text-[20px] ">Telephone</h1>
            <p>+221 785975058</p>
          </div>
          <div className="my-[20px] mx-auto w-[50%] ">
            <h1 className="font-bold text-[20px] ">E-mail</h1>
            <p>haurlyroll@gmail.com</p>
          </div>
        </div>
        <div className="md:w-[34%] mx-auto flex md:justify-between">
          <div className="my-[20px] mx-auto w-[50%] ">
            <h1 className="font-bold text-[20px] ">Suivez moi</h1>
            <p></p>
          </div>
          <div className="my-[20px] mx-auto w-[50%] ">
            <p>Politique de confidentialité</p>
            <p>Politique de cookies</p>
            <p>Mentions légales</p>
          </div>
        </div>
        <div className="md:w-[32%] my-[20px] mx-auto flex md:grid ">
          <p className="w-[50%] md:w-[100%] md:ms-[50px] ">© 2024 par Revhieno Roll Haurly.</p>
          <p className="w-[50%] md:ms-[50px] ">Créé avec Easy Portfolio</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
