import React, { useState } from 'react';

// Components
import Welcome from './Welcome/Index';
import UserData from './UserData/Index';
import Service from './Service/Index';
import Modal from './Modal/Index';
import Terrain from './Terrain/Index';
import Resume from './Resume/Index.jsx';
import Success from './Success/Index.jsx';
import StepIndicator from './StepIndicator/Index';

// CSS
import './steps.css';

const stepsData = {
  0: "Bienvenida",
  1: "Información del usuario",
  2: "Servicio",
  3: "Terreno",
  4: "Resumen de informacion",
  5: "Resultado"
};

const Steps = () => {
  const [actualStep, setActualStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const markAsCompleted = () => {
    setIsCompleted(true);
  };

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

  const [terrainInformation, setTerrainInformation] = useState({
    terrainArea: '',
    terrainType: '',
    accesibility: ''
  });

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
        return (
          <UserData
            next={next}
            userInformation={userInformation}
            setUserInformation={setUserInformation}
          />
        );
      case 2:
        return (
          <Service
            next={next}
            serviceInformation={serviceInformation}
            setServiceInformation={setServiceInformation}
          />
        );
      case 3:
        return (
          <Terrain
            next={next}
            terrainInformation={terrainInformation}
            setTerrainInformation={setTerrainInformation}
          />);
      case 4:
        return (
          <Resume
            next={next}
            terrainInformation={terrainInformation}
            serviceInformation={serviceInformation}
            userInformation={userInformation}
          />
        );
      case 5:
        return (
          <Success
            markAsCompleted={markAsCompleted}
          />
        );
    }
  };

  return (
    <div className="steps-container">
      <div className="steps-content">
        <Modal>{stepsByNumber()}</Modal>
      </div>
      <StepIndicator actualStep={actualStep} isCompleted={isCompleted} />
    </div>
  );
};

Steps.displayName = "Steps";

export default Steps;
