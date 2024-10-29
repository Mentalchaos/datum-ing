import Button from '../../Button/Index';
import './success.css';

const Success = ({ estimatedValue = 0, estimatedTime = 10 }) => {
  return (
    <div className="cotizacion-container">
      <p className="cotizacion-header">
        Esta es la información de la cotización aproximada de su proyecto. Recuerde que este valor y tiempo están sujetos a revisión por parte de la empresa, según detalles y disponibilidad.
      </p>

      <div className="cotizacion-info">
        <p><strong>Valor estimado:</strong> ${estimatedValue}</p>
        <p><strong>Tiempo de entrega estimado:</strong> {estimatedTime} días hábiles</p>
      </div>

      <div className="button-container">
        <Button 
          className={'send-button'}
          text={'Enviar resumen a mi correo'}
        />
      </div>
    </div>
  );
};

Success.displayName = 'Success';

export default Success;
