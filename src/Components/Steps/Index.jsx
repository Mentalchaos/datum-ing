import Welcome from './Welcome/Index';
import UserData from './UserData/Index';
import { useState } from 'react';

const stepsData = {
  0: "welcome",
  1: "location",
  2: "presition",
  3: "project-time",
  4: "service-type",
  5: "terrain"
}

const Steps = () => {
  const [actualStep, setActualStep] = useState(0);

  const next = () => {
    return setActualStep(prevStep => prevStep + 1);
  };

  const stepsByNumber = () => {
    switch (actualStep) {
      case 0:
        return <Welcome next={next} />;
      case 1:
        return <UserData next={next} />;
      case 2:
        return <div>Este es el paso 2: Presición</div>;
      case 3:
        return <div>Este es el paso 3: Tiempo de proyecto</div>;
      case 4:
        return <div>Este es el paso 4: Tipo de servicio</div>;
      case 5:
        return <div>Este es el paso 5: Terreno</div>;
      default:
        return <div>Paso no encontrado</div>;
    }
  }

  return (
    <div>
      {stepsByNumber()}
    </div>
  );
}

Steps.displayName = "Steps";

export default Steps;
