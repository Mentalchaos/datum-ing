import React from 'react';
import Lottie from 'react-lottie';
import './marketModalContent.css';
import animationData from '../../../Assets/Animations/CuteBot.json';

const MarketModalContent = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="market-modal-content">
      <div className="market-modal-text">
        <div className='market-modal-title'>¿Qué es el Análisis de Mercado?</div>
        <p>
          La información que ves en esta sección se obtiene automáticamente mediante el uso de 
          scrapers o "bots", herramientas programadas para recolectar datos de fuentes públicas. 
          Esto permite analizar tecnologías, servicios y áreas de operación de diversas empresas 
          de manera rápida y precisa. Es una forma eficiente de mantener el análisis actualizado 
          sin intervención manual.
        </p>
      </div>
      <div className="market-modal-animation" onClick={(e) => e.stopPropagation()}>
        <Lottie 
          options={defaultOptions}
          height={500}
          width={500}
          isClickToPauseDisabled={true}
        />
      </div>
    </div>
  );
};

export default MarketModalContent;
