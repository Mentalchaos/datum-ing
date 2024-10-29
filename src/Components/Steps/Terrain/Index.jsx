import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Button from '../../Button/Index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './terrain.css';

const Terrain = ({ next, terrainInformation, setTerrainInformation }) => {
  console.log('terrainInformation', terrainInformation);
  const { terrainArea, terrainType, accesibility } = terrainInformation;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTerrainInformation({
      ...terrainInformation,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="terrain-cont">
      <Form onSubmit={handleSubmit} className="topography-form">
        <Row>
          <Col md={100}>
            <Form.Group controlId="terrainArea" className="form-group">
              <Form.Label>Área del terreno (m²)</Form.Label>
              <Form.Control
                type="text"
                name="terrainArea"
                value={terrainArea}
                onChange={handleChange}
                placeholder="Ingresa el área en metros cuadrados"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={100}>
            <Form.Group controlId="terrainType" className="form-group">
              <Form.Label>Tipo de Terreno</Form.Label>
              <Form.Control
                as="select"
                name="terrainType"
                value={terrainType}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona el tipo de terreno</option>
                <option value="Urbano">Urbano</option>
                <option value="Rural">Rural</option>
                <option value="Bosque">Bosque</option>
                <option value="Montaña">Montaña</option>
                <option value="Costero">Costero</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={100}>
            <Form.Group controlId="accesibility" className="form-group">
              <Form.Label>Accesibilidad</Form.Label>
              <Form.Control
                as="select"
                name="accesibility"
                value={accesibility}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona el nivel de accesibilidad</option>
                <option value="Fácil">Fácil</option>
                <option value="Moderado">Moderado</option>
                <option value="Difícil">Difícil</option>
                <option value="Remoto">Remoto</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <div className="button-cont">
          <Button onClick={next} text="Siguiente" />
        </div>
      </Form>
    </div>
  );
};

Terrain.displayName = 'Terrain';

export default Terrain;
