import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../Assets/Animations/CuteBot.json";
import Button from "../../Button/Index";
import "./marketModalContent.css";

const MarketModalContent = ({ onClick }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="market-modal-content">
      <div className="market-modal-text">
        <div className="market-modal-title">
          ¿Qué es el Análisis de Mercado?
        </div>
        <p>
          La información que verás en esta sección es un ejemplo de cómo
          utilizamos herramientas automatizadas, como scrapers, para extraer
          datos públicos de manera precisa y detallada. Esto nos permite
          analizar compañías y otros temas sin intervención manual, asegurando
          datos actualizados y relevantes.
        </p>
      </div>
      <div
        className="market-modal-animation"
        onClick={(e) => e.stopPropagation()}
      >
        <Lottie
          options={defaultOptions}
          height={500}
          width={500}
          isClickToPauseDisabled={true}
        />
        <Button text="¡Entendido!" className="modal-button" onClick={onClick} />
      </div>
    </div>
  );
};

export default MarketModalContent;
