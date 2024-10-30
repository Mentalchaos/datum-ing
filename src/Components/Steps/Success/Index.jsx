import React, { useState } from 'react';
import Button from '../../Button/Index';
import Lottie from 'react-lottie';
import animationData from '../../../Assets/Animations/MailSent.json';
import './success.css';

const Success = ({ estimatedValue = 0, estimatedTime = 10 }) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSendEmail = () => {
    setShowAnimation(true);
    setShowSuccessMessage(false);

    setTimeout(() => {
      setShowSuccessMessage(true);
    }, 1500);
  };

  const animationOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="cotizacion-container">
      {showAnimation ? (
        <div className="animation-container">
          <Lottie options={animationOptions} height={300} width={300} isClickToPauseDisabled={true} />
          {showSuccessMessage && (
            <p className="fade-in-message">Correo enviado exitosamente</p>
          )}
        </div>
      ) : (
        <>
          <p className="cotizacion-header">
            Esta es la información de la cotización aproximada de su proyecto. Recuerde que este valor y tiempo están sujetos a revisión por parte de la empresa, según detalles y disponibilidad.
          </p>

          <div className="cotizacion-info">
            <p><strong>Valor estimado:</strong> ${estimatedValue}</p>
            <p><strong>Tiempo de entrega estimado:</strong> {estimatedTime} días hábiles</p>
          </div>

          <div className="button-container">
            <Button 
              className="send-button"
              text="Enviar resumen a mi correo"
              onClick={handleSendEmail}
            />
          </div>
        </>
      )}
    </div>
  );
};

Success.displayName = 'Success';

export default Success;
