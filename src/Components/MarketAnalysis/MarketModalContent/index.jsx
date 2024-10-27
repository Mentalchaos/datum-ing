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
          La información que verás en esta sección es un ejemplo de cómo aprovechamos
          herramientas automatizadas, como scrapers o "bots", para recopilar grandes
          volúmenes de datos disponibles en fuentes públicas. Estas tecnologías nos
          permiten extraer información precisa y detallada sobre una amplia variedad
          de temas, desde el análisis de mercado y la comparación de servicios hasta tendencias
          sectoriales y otros datos accesibles públicamente. En este caso, los datos de las compañías
          son solo una demostración de nuestras capacidades de extracción. Gracias a este
          enfoque, podemos ofrecer análisis completos y constantemente actualizados, eliminando la necesidad
          de intervención manual y asegurando que los datos reflejen los últimos cambios.
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
