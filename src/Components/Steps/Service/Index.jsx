import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Button from '../../Button/Index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './service.css';

const Service = ({ next, serviceInformation, setServiceInformation }) => {
  const { serviceType, deliveryDate, technology, description } = serviceInformation;

  console.log('serviceInformation', serviceInformation);

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
              <strong><Form.Label>Tipo de Servicio</Form.Label></strong>
              <Form.Control
                as="select"
                name="serviceType"
                value={serviceType}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona el tipo de servicio</option>
                <option value="Básico">Levantamiento básico</option>
                <option value="catastral">Levantamiento catastral</option>
                <option value="Levantamiento altimétrico">Levantamiento altimétrico/planimétrico</option>
                <option value="Drones">Fotogrametría con drones</option>
                <option value="Monitoreo geotécnico">Monitoreo geotécnico</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={100}>
            <Form.Group controlId="deliveryDate" className="form-group">
              <strong><Form.Label>Fecha objetivo de entrega (Opcional)</Form.Label></strong>
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
              <strong><Form.Label>Tecnología preferida</Form.Label></strong>
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
              <strong><Form.Label>Descripción adicional del proyecto</Form.Label></strong>
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
          <Button text="Siguiente" onClick={next} />
        </div>
      </Form>
    </div>
  );
};

Service.displayName = "Service";

export default Service;
