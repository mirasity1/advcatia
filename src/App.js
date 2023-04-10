import React from "react";
import { Outlet } from "react-router-dom";
import nationalday from "./images/Nationalday.jpg";
import Footer from "./reusable/Footer";
import Areas from "./areas/arasatuacao.json";
import "./App.css";

function App() {
  return (
    <div className="App force-overflow">
      <Outlet />
      <div className="items-center justify-center bg-image">
        <div className="text-center">
          <h1 className="text-white text-7xl advocate">
            Cátia Teixeira <br /> Gomes
          </h1>
          <p className="mt-12 text-lg text-white advocate">Advogada</p>
        </div>
      </div>
      {/* now we add bg-gray-900 with some text justifyed  */}
      <div className="flex w-full p-10 text-justify text-white bg-gray-900 opacity-80">
        <div className="w-2/3 p-4 m-auto italic md:p-24 advocate">
          <p className="justify-center text-center ">
            O Advogado tem a função social de colaborar na administração da
            justiça, devendo cumprir a lei, defender os direitos dos seus
            clientes, assim como, executar o seu trabalho com zelo,
            responsabilidade e ética profissional e social.
          </p>
          <p className="justify-center mt-6 text-center">
            E é tendo presente a responsabilidade desta função e a forma de a
            cumprir, que estou na advocacia há mais 10 anos, tendo experiência
            em trabalhar num contexto quer de prática individual, quer em
            contexto de sociedade de advogados.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            src={nationalday}
            alt="Imagem de um martelo em cima de documentos"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="items-center justify-center w-full md:w-1/2">
          <h2 className="mt-24 mb-12 text-4xl text-center advocate">
            Áreas de Atuação
          </h2>
          <div className="flex flex-wrap justify-center">
            {Areas["Áreas de atuação"].map((area, i) => (
              <div className="w-1/2 p-4" key={i}>
                <div className="flex items-center justify-center w-full h-24 p-4 text-2xl text-center advocate">
                  {area.nome}
                </div>
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
