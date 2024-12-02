import React from "react";

const Contact = () => {
  return (
    <section className="py-[70px] mt-[100px] bg-gray-100 shadow-2xl rounded-xl mx-[20px] transition duration-500 ">
      <div className="grid md:flex md:justify-between max-w-4xl mx-auto px-6">
        <div className="grid md:w-[40%] text-left ">
          <div className="mb-[25px] ">
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="my-2">Nous avons hâte de vous lire</p>
          </div>
          <div className="mb-[25px] ">
            <h2 className="text-3xl font-bold">Téléphone</h2>
            <p className="my-2">+221 78 597 50 58</p>
          </div>
          <div className="mb-[25px] ">
            <h2 className="text-3xl font-bold">E-mail</h2>
            <p className="my-2">haurlyroll@gmail.com</p>
          </div>
        </div>
        <div>
          <form className="space-y-6 shadow-inner p-3 rounded-lg ">
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Votre prenom"
                className="w-[48%] p-4 border rounded-lg outline-none focus:outline-red-500"
              />
              <input
                type="text"
                placeholder="Votre nom de famille"
                className="w-[48%] p-4 border rounded-lg outline-none focus:outline-red-500"
              />
            </div>
            <div className="flex justify-between">
              <input
                type="email"
                placeholder="Votre email"
                className="w-[48%] p-4 border rounded-lg outline-none focus:outline-red-500"
              />
              <input
                type="text"
                placeholder="Votre objet"
                className="w-[48%] p-4 border rounded-lg outline-none focus:outline-red-500"
              />
            </div>
            <div className="flex justify-between">
              <textarea
                placeholder="Votre message"
                className="w-[65%] h-[150px] p-4 border rounded-lg outline-none focus:outline-red-500"
              ></textarea>
              <button className="w-[70px] md:w-[120px] h-[70px] md:h-[120px] bg-yellow-700 rounded-full text-white m-auto py-3 px-auto shadow-md hover:bg-yellow-500 transition duration-500">
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
