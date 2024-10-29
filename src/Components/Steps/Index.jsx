import React, { useState } from 'react';

//Components
import Welcome from './Welcome/Index';
import UserData from './UserData/Index';
import Service from './Service/Index';
import Modal from './Modal/Index';

// CSS
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
    username: '',
    email: '',
    company: '',
    phoneNumber: ''
  });

  const [serviceInformation, setServiceInformation] = useState({
    serviceType: '',
    deliveryDate: '',
    technology: '',
    description: ''
  });

  const next = () => {
    if (actualStep < Object.keys(stepsData).length - 1) {
      setActualStep(prevStep => prevStep + 1);
    }
  };

  const stepsByNumber = () => {
    switch (actualStep) {
      case 0:
        return <Modal><Welcome next={next} /></Modal>;
      case 1:
        return (
          <Modal>
            <UserData
              next={next}
              userInformation={userInformation}
              setUserInformation={setUserInformation}
            />
          </Modal>
        );
      case 2:
        return (
          <Modal>
            <Service next={next}
              serviceInformation={serviceInformation}
              setServiceInformation={setServiceInformation}
            />
          </Modal>
        );
      case 3:
        return <div>Este es el paso 3: Terreno</div>;
      default:
        return <div>Paso no encontrado</div>;
    }
  };

  return (
    <div className="steps-container">
      <div className="steps-content">
        {stepsByNumber()}
      </div>
    </div>
  );
};

Steps.displayName = "Steps";

export default Steps;
