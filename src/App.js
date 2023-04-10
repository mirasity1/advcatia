import React from "react";
import { Outlet } from "react-router-dom";
import image from "./images/JusticeAndLaw.jpg";
import nationalday from "./images/Nationalday.jpg";
import Footer from "./reusable/Footer";

function App() {
  // set de um arrey com as áreas de atuação
  const areas = [
    "Direito Civil",
    "Recuperação de Crédito",
    "Aquisição de Nacionalidade Portuguesa",
    "Direito Penal",
    "Direito Imobiliário",
    "Direito da Família e das Sucessões",
    "Direito Comercial",
    "Insolvências",
    "Condomínios",
    "Autenticação de Documentos",
    "Assessoria a Estrangeiros",
    "Pareceres Jurídicos",
  ];

  return (
    <div className="App">
      <Outlet />
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          width: "1680px",
          height: "740px",
          objectFit: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundPosition: "0px -100px",
        }}
        className="justify-center items-center"
      >
        <div className="text-center">
          <h1 className=" text-7xl text-white advocate">
            Cátia Teixeira <br /> Gomes
          </h1>
          <p className=" text-white mt-12 text-lg advocate">Advogada</p>
        </div>
      </div>
      {/* now we add bg-gray-900 with some text justifyed  */}
      <div className="bg-gray-800 opacity-90 text-white text-justify p-10 flex w-full">
        <div className="w-2/3 m-auto p-24 advocate italic">
          <p className=" text-center justify-center">
            O Advogado tem a função social de colaborar na administração da
            justiça, devendo cumprir a lei, defender os direitos dos seus
            clientes, assim como, executar o seu trabalho com zelo,
            responsabilidade e ética profissional e social.
          </p>
          <p className="text-center justify-center mt-6">
            E é tendo presente a responsabilidade desta função e a forma de a
            cumprir, que estou na advocacia há mais 10 anos, tendo experiência
            em trabalhar num contexto quer de prática individual, quer em
            contexto de sociedade de advogados.
          </p>
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-1/2">
          <img
            src={nationalday}
            alt="Imagem de um martelo em cima de documentos"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-1/2 items-center justify-center">
          <h2 className="text-center text-4xl advocate mt-24 mb-12">
            Áreas de Atuação
          </h2>
          <div class="h-full grid grid-rows-6 grid-cols-2 gap-4 max-h-[50rem]">
            {areas.map((area) => (
              <div className="row-span-1 col-span-1 flex items-center text-center justify-center ">
                <p className=" text-center advocate w-1/2 text-xl">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
