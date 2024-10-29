import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Button from '../../Button/Index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './presition.css';

const Service = ({ serviceInformation, setServiceInformation }) => {
  console.log('serviceInformation', serviceInformation);
  console.log('setServiceInformation', setServiceInformation);

  const { serviceType, deliveryDate, technology, description } = serviceInformation;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceInformation({
      ...serviceInformation,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="presition-cont">
      <Form onSubmit={handleSubmit} className="topography-form">
        <Row>
          <Col md={100}>
            <Form.Group controlId="serviceType" className="form-group">
              <Form.Label>Tipo de Servicio</Form.Label>
              <Form.Control
                as="select"
                name="serviceType"
                value={serviceType}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona el tipo de servicio</option>
                <option value="basic">Levantamiento básico</option>
                <option value="cadastral">Levantamiento catastral</option>
                <option value="altimetric">Levantamiento altimétrico/planimétrico</option>
                <option value="drones">Fotogrametría con drones</option>
                <option value="geotechnical">Monitoreo geotécnico</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={100}>
            <Form.Group controlId="deliveryDate" className="form-group">
              <Form.Label>Fecha objetivo de entrega (Opcional)</Form.Label>
              <Form.Control
                type="date"
                name="deliveryDate"
                value={deliveryDate}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={100}>
            <Form.Group controlId="technology" className="form-group">
              <Form.Label>Tecnología preferida</Form.Label>
              <Form.Control
                as="select"
                name="technology"
                value={technology}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona la tecnología preferida</option>
                <option value="gps">GPS diferencial</option>
                <option value="totalStation">Estación total</option>
                <option value="drones">Drones (fotogrametría)</option>
                <option value="lidar">LIDAR</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Form.Group controlId="description" className="form-group">
              <Form.Label>Descripción adicional del proyecto</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={description}
                onChange={handleChange}
                placeholder="Describe los detalles adicionales del proyecto"
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="button-cont">
          <Button text="Continuar"></Button>
        </div>
      </Form>
    </div>
  );
};

Service.displayName = "Service";

export default Service;
