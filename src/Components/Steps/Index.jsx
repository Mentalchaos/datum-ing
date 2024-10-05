import React, { useState, useEffect } from 'react';
import Welcome from './Welcome/Index';
import UserData from './UserData/Index';
import Presition from './Presition/Index';
import './steps.css';

const stepsData = {
  0: "Bienvenida",
  1: "Información del usuario",
  2: "Precisión",
  3: "Tiempo del proyecto",
  4: "Tipo de servicio",
  5: "Terreno"
};

const Steps = () => {
  const [actualStep, setActualStep] = useState(0);
  const [userInformation, setUserInformation] = useState({
    name: '',
    email: ''
  });
  const [isAnimating, setIsAnimating] = useState(false); // Nuevo estado para la animación

  console.log('userInformation', userInformation);

  useEffect(() => {
    // Aplicar animación en cada cambio de paso
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false); // Desactivar la animación después de 0.5s (duración de la animación)
    }, 1000);

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
  }, [actualStep]);

  const next = () => {
    if (actualStep < Object.keys(stepsData).length - 1) {
      setActualStep(prevStep => prevStep + 1);
    }
  };

  const stepsByNumber = () => {
    switch (actualStep) {
      case 0:
        return <Welcome next={next} />;
      case 1:
        return <UserData next={next} userInformation={userInformation} setUserInformation={setUserInformation} />;
      case 2:
        return <Presition next={next} />;
      case 3:
        return <div>Este es el paso 3: Tiempo del proyecto</div>;
      case 4:
        return <div>Este es el paso 4: Tipo de servicio</div>;
      case 5:
        return <div>Este es el paso 5: Terreno</div>;
      default:
        return <div>Paso no encontrado</div>;
    }
  };

  return (
    <div className="steps-container">
      {/* Barra lateral */}
      <div className="steps-sidebar">
        <h3>Progreso</h3>
        <ul>
          {Object.keys(stepsData).map((step) => (
            <li key={step} className={`step-item ${parseInt(step) === actualStep ? 'active' : parseInt(step) < actualStep ? 'completed' : ''}`}>
              {stepsData[step]}
            </li>
          ))}
        </ul>
      </div>

      {/* Contenido del paso con animación */}
      <div className={`steps-content ${isAnimating ? 'animated-content' : ''}`}>
        {stepsByNumber()}
      </div>
    </div>
  );
};

Steps.displayName = "Steps";

export default Steps;
