import React, { useState } from 'react';

//Components
import Welcome from './Welcome/Index';
import UserData from './UserData/Index';
import Service from './Service/Index';
import Modal from './Modal/Index';
import Terrain from './Terrain/Index';
import Resume from './Resume/Index.jsx';
import Success from './Success/Index.jsx';

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
  })

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
            <Service
              next={next}
              serviceInformation={serviceInformation}
              setServiceInformation={setServiceInformation}
            />
          </Modal>
        );
      case 3:
        return (
          <Modal>
            <Terrain
              next={next}
              terrainInformation={terrainInformation}
              setTerrainInformation={setTerrainInformation}
            />
          </Modal>)
      case 4:
        return (
          <Modal>
            <Resume 
              next={next}
              terrainInformation={terrainInformation}
              serviceInformation={serviceInformation}
              userInformation={userInformation}
            />
          </Modal>
        )
      case 5:
        return (
          <Modal>
            <Success
              next={next}
            />
          </Modal>
        )
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
