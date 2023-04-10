import React, { useState, useEffect } from "react";
import livros from "./images/livros.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBalanceScale,
  faFileInvoice,
  faPassport,
  faGavel,
  faHome,
  faHeart,
  faBuilding,
  faFileSignature,
  faUserFriends,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

import Footer from "./reusable/Footer";
import areas from "./areas/arasatuacao.json";
import { Outlet } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import "./css/styles.css";

function description(description) {
  // every new line add - at the begining, new lines are separeted by ";"
  const lines = description.split(";").map((line) => `- ${line.trim()}`);
  return (
    <ul>
      {lines.map((line) => (
        <li key={line}>{line}</li>
      ))}
    </ul>
  );
}

const AreasAtuacao = () => {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const handleClick = () => {
    setHovered(!hovered);
  };

  return (
    <>
      <Outlet />
      <div className="flex flex-col w-full md:flex-row">
        <div className="w-full md:w-1/2 ">
          {/* title */}
          <div className="flex items-center justify-center w-full h-24">
            <p className="text-4xl text-gray-900 advocateSlim">
              Áreas de atuação
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 p-4">
            {areas["Áreas de atuação"].map((area) => (
              <div
                key={area.nome}
                className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-lg"
                onClick={handleClick}
              >
                <div key={area.nome}>
                  <FontAwesomeIcon
                    icon={["fa", area.icon]}
                    size="4x"
                    className="mt-12 text-gray-900 opacity-90 "
                  />

                  <p className="mt-4 font-bold advocate">{area.nome}</p>
                  {/* Descrição do ponto, quando se clica em cima abre a descrição do ponto, ou quando se passa o rato por cima faz slide para baixo */}
                  <div className="text-left">
                    {description(area.description)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-full h-full ">
            <img
              src={livros}
              alt="Imagem de livros"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AreasAtuacao;
