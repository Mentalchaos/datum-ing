import Button from '../../Button/Index';
import './welcome.css';

const welcometext = [
  "Bienvenido a nuestra calculadora de cotizaciones topográficas",
  "Este sistema te permitirá obtener una estimación aproximada del costo de nuestros servicios.",
  "Recuerda que para obtener una cotización final y detallada, deberás ponerte en contacto con nosotros a través de nuestro correo electrónico.",
  "Por favor, rellena todos los datos solicitados en cada paso para proporcionarte la mejor estimación posible.",
  "¡Comencemos!"
];

const Welcome = () => {
  return (
    <>
      <div className="welcome-text">
        {
          welcometext.map(data => <p className="welcome-paragraph" key={data}>{data}</p>)
        }
      </div>
      <div className="button-cont">
        <Button text="Siguiente" />
      </div>
    </>
  )
}

Welcome.displayName = "Welcome";

export default Welcome;
