import Button from '../../Button/Index';
import './resume.css';

const Resume = ({ next, userInformation, serviceInformation, terrainInformation }) => {
  return (
    <div className="resumen-container">
      <h2>Aquí tienes un resumen de la información proporcionada:</h2>

      <div className="resumen-section">
        <h3>Contacto:</h3>
        <div className="resumen-content">
          <p><strong>Nombre:</strong> {userInformation.username || 'No especifica'}</p>
          <p><strong>Empresa:</strong> {userInformation.company || 'No especifica'}</p>
          <p><strong>Teléfono:</strong> {userInformation.phoneNumber || 'No especifica'}</p>
          <p><strong>Correo:</strong> {userInformation.email || 'No especifica'}</p>
          <i className="edit-icon"></i>
        </div>
      </div>

      <div className="resumen-section">
        <h3>Detalles del servicio:</h3>
        <div className="resumen-content">
          <p><strong>Tipo de servicio:</strong> {serviceInformation.serviceType || 'No especifica'}</p>
          <p><strong>Fecha objetivo entrega:</strong> {serviceInformation.deliveryDate || 'No especifica'}</p>
          <p><strong>Tecnología preferida:</strong> {serviceInformation.technology || 'No especifica'}</p>
          <p><strong>Descripción del proyecto:</strong> {serviceInformation.description.slice(0,20) + '...' || 'No especifica'}</p>
          <i className="edit-icon"></i>
        </div>
      </div>

      <div className="resumen-section">
        <h3>Terreno:</h3>
        <div className="resumen-content">
          <p><strong>Área del terreno:</strong> {terrainInformation.terrainArea || 'No especifica'}</p>
          <p><strong>Tipo de terreno:</strong> {terrainInformation.terrainType || 'No especifica'}</p>
          <p><strong>Accesibilidad de terreno:</strong> {terrainInformation.accesibility || 'No especifica'}</p>
          <i className="edit-icon"></i>
        </div>
      </div>

      <div className="button-container">
        <Button
          text={'Siguiente'}
          onClick={next}
        />
      </div>
    </div>
  );
};

Resume.displayName = 'Resume';

export default Resume;
