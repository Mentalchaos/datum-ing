import React, { useState } from 'react';
import { Form, Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Button from '../../Button/Index';
import { FaInfoCircle } from 'react-icons/fa'; // Importa el icono
import 'bootstrap/dist/css/bootstrap.min.css';
import './presition.css';

const Presition = () => {
  const [formData, setFormData] = useState({
    serviceType: '',
    area: '',
    location: '',
    accessibility: '',
    precision: '',
    deliveryDate: '',
    terrainType: '',
    technology: '',
    projectDescription: ''
  });

  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  // Función para renderizar tooltips
  const renderTooltip = (msg) => (
    <Tooltip id="tooltip">{msg}</Tooltip>
  );

  return (
    <div className="presition-cont">
      <Form onSubmit={handleSubmit} className="topography-form">
        <Row>
          {/* Tipo de Servicio */}
          <Col md={6}>
            <Form.Group controlId="serviceType" className="form-group">
              <Form.Label>
                Tipo de Servicio{' '}
                <OverlayTrigger
                  placement="top"
                  overlay={renderTooltip("Selecciona el tipo de levantamiento topográfico que necesitas")}
                >
                  <span className="info-icon-wrapper">
                    <FaInfoCircle className="info-icon" />
                  </span>
                </OverlayTrigger>
              </Form.Label>
              <Form.Control
                as="select"
                name="serviceType"
                value={formData.serviceType}
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

          {/* Área del Terreno */}
          <Col md={6}>
            <Form.Group controlId="area" className="form-group">
              <Form.Label>
                Área del Terreno (m²){' '}
                <OverlayTrigger
                  placement="top"
                  overlay={renderTooltip("Indica el área aproximada en metros cuadrados")}
                >
                  <span className="info-icon-wrapper">
                    <FaInfoCircle className="info-icon" />
                  </span>
                </OverlayTrigger>
              </Form.Label>
              <Form.Control
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="Introduce la superficie aproximada del terreno"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          {/* Ubicación del Terreno */}
          <Col md={12}>
            <Form.Group controlId="location" className="form-group">
              <Form.Label>
                Ubicación del Terreno{' '}
                <OverlayTrigger
                  placement="top"
                  overlay={renderTooltip("Introduce la dirección o coordenadas del terreno")}
                >
                  <span className="info-icon-wrapper">
                    <FaInfoCircle className="info-icon" />
                  </span>
                </OverlayTrigger>
              </Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Introduce la dirección o coordenadas"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          {/* Accesibilidad */}
          <Col md={6}>
            <Form.Group controlId="accessibility" className="form-group">
              <Form.Label>
                Accesibilidad{' '}
                <OverlayTrigger
                  placement="top"
                  overlay={renderTooltip("Selecciona la facilidad o dificultad de acceso al terreno")}
                >
                  <span className="info-icon-wrapper">
                    <FaInfoCircle className="info-icon" />
                  </span>
                </OverlayTrigger>
              </Form.Label>
              <Form.Control
                as="select"
                name="accessibility"
                value={formData.accessibility}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona el nivel de accesibilidad</option>
                <option value="easy">Fácil acceso</option>
                <option value="moderate">Acceso moderado</option>
                <option value="difficult">Difícil acceso</option>
              </Form.Control>
            </Form.Group>
          </Col>

          {/* Precisión requerida */}
          <Col md={6}>
            <Form.Group controlId="precision" className="form-group">
              <Form.Label>
                Precisión requerida{' '}
                <OverlayTrigger
                  placement="top"
                  overlay={renderTooltip("Elige el nivel de precisión necesario para el levantamiento")}
                >
                  <span className="info-icon-wrapper">
                    <FaInfoCircle className="info-icon" />
                  </span>
                </OverlayTrigger>
              </Form.Label>
              <Form.Control
                as="select"
                name="precision"
                value={formData.precision}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona el nivel de precisión</option>
                <option value="low">Baja precisión</option>
                <option value="medium">Precisión media</option>
                <option value="high">Alta precisión</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          {/* Fecha objetivo de entrega */}
          <Col md={6}>
            <Form.Group controlId="deliveryDate" className="form-group">
              <Form.Label>
                Fecha objetivo de entrega (Opcional){' '}
                <OverlayTrigger
                  placement="top"
                  overlay={renderTooltip("Elige la fecha en la que prefieres tener el proyecto finalizado")}
                >
                  <span className="info-icon-wrapper">
                    <FaInfoCircle className="info-icon" />
                  </span>
                </OverlayTrigger>
              </Form.Label>
              <Form.Control
                type="date"
                name="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          {/* Tipo de terreno */}
          <Col md={6}>
            <Form.Group controlId="terrainType" className="form-group">
              <Form.Label>
                Tipo de Terreno{' '}
                <OverlayTrigger
                  placement="top"
                  overlay={renderTooltip("Selecciona el tipo de terreno")}
                >
                  <span className="info-icon-wrapper">
                    <FaInfoCircle className="info-icon" />
                  </span>
                </OverlayTrigger>
              </Form.Label>
              <Form.Control
                as="select"
                name="terrainType"
                value={formData.terrainType}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona el tipo de terreno</option>
                <option value="urban">Urbano</option>
                <option value="rural">Rural</option>
                <option value="mountainous">Montañoso</option>
                <option value="coastal">Costero</option>
                <option value="waterBodies">Con cuerpos de agua</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          {/* Tecnología preferida */}
          <Col md={12}>
            <Form.Group controlId="technology" className="form-group">
              <Form.Label>
                Tecnología preferida{' '}
                <OverlayTrigger
                  placement="top"
                  overlay={renderTooltip("Elige la tecnología preferida para realizar el levantamiento")}
                >
                  <span className="info-icon-wrapper">
                    <FaInfoCircle className="info-icon" />
                  </span>
                </OverlayTrigger>
              </Form.Label>
              <Form.Control
                as="select"
                name="technology"
                value={formData.technology}
                onChange={handleChange}
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
          {/* Descripción adicional */}
          <Col md={12}>
            <Form.Group controlId="projectDescription" className="form-group">
              <Form.Label>
                Descripción adicional del proyecto (Opcional){' '}
                <OverlayTrigger
                  placement="top"
                  overlay={renderTooltip("Añade cualquier detalle adicional que consideres importante")}
                >
                  <span className="info-icon-wrapper">
                    <FaInfoCircle className="info-icon" />
                  </span>
                </OverlayTrigger>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="projectDescription"
                value={formData.projectDescription}
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

export default Presition;
