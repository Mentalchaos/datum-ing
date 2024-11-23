import React, { useState } from "react";
import {
  AiOutlineTeam,
  AiOutlineEnvironment,
  AiOutlineCalendar,
} from "react-icons/ai";
import { SlArrowDown, SlArrowRight, SlArrowUp } from "react-icons/sl";
import { licitations } from "../../Data/licitations";
import { steps } from "../../Data/trackingSteps";
import { TiClipboard } from "react-icons/ti";
import { FaHome } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { RiListCheck } from "react-icons/ri";
import { FaChartPie } from "react-icons/fa";
import "./tracking.css";

const Tracking = () => {
  const [expandedStepId, setExpandedStepId] = useState(null);
  const [isLicitationExpanded, setIsLicitationExpanded] = useState(false);
  const [isDocumentsExpanded, setIsDocumentsExpanded] = useState(false);

  const toggleLicitationList = () => {
    setIsLicitationExpanded(!isLicitationExpanded);
    setIsDocumentsExpanded(false);
  };

  const toggleDocumentsList = () => {
    setIsDocumentsExpanded(!isDocumentsExpanded);
    setIsLicitationExpanded(false);
  };

  const toggleStepDetails = (id) => {
    setExpandedStepId(expandedStepId === id ? null : id);
  };

  const [searchInput, setSearchInput] = useState("");
  const [showLicitation, setShowLicitation] = useState(false);

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const shouldShowTrackerContainer = searchInput === "123";
  const oeoe = () => {
    if (shouldShowTrackerContainer) {
      setShowLicitation(true);
    } else {
      setShowLicitation(false);
    }
  }

  return (
    <div className="topographic-tracker-wrapper">
      <div className="licitation-sidebar">
        <div className="licitation-header">
          <div className="sidebar-option-name">
            <FaHome className="sidebar-option-icon" />
            Inicio
          </div>
        </div>

        <div className="licitation-header" onClick={() => window.location.href = 'datum-ing/#/metrics'}>
          <div className="sidebar-option-name">
            <BsGraphUp className="sidebar-option-icon" />
            Métricas Anuales
          </div>
        </div>


        {showLicitation && (
          <div className="licitation-header" onClick={() => window.location.href = 'datum-ing/#/licitation'}>
            <div className="sidebar-option-name">
              <FaChartPie className="sidebar-option-icon" />
              Métricas de Licitación
            </div>
          </div>
        )}

        <div className="licitation-header" onClick={toggleLicitationList}>
          <div className="sidebar-option-name">
            <RiListCheck className="sidebar-option-icon" />
            Licitaciones
          </div>
          <div className="sidebar-option-caret">
            {isLicitationExpanded ? <SlArrowUp /> : <SlArrowDown />}
          </div>
        </div>

        <div className="sidebar-icon">
          <SlArrowRight />
        </div>

        <ul className={`licitation-list ${isLicitationExpanded ? "expanded" : ""}`}>
          {licitations.map((licit) => (
            <li key={licit.id} className={`licit-item ${licit.status.toLowerCase()}`}>
              <span>{licit.name}</span>
              <span className="status">{licit.status}</span>
            </li>
          ))}
        </ul>

        {showLicitation && (
          <div className="licitation-header" onClick={toggleDocumentsList}>
            <div className="sidebar-option-name">
              <TiClipboard className="sidebar-option-icon" />
              Documentos
            </div>
            <div className="sidebar-option-caret">
              {isDocumentsExpanded ? <SlArrowUp /> : <SlArrowDown />}
            </div>
          </div>
        )}

        <ul className={`licitation-list ${isDocumentsExpanded ? "expandedd" : ""}`}>
          <li className="licit-item"><a href="#">Acta de Constitución</a></li>
          <li className="licit-item"><a href="#">Plan de Proyecto</a></li>
          <li className="licit-item"><a href="#">Informe de Reconocimiento del Sitio</a></li>
          <li className="licit-item"><a href="#">Reporte de Configuración de Equipos</a></li>
          <li className="licit-item"><a href="#">Informe de Control de Calidad</a></li>
          <li className="licit-item"><a href="#">Informe Final de Topografía</a></li>
        </ul>
      </div>

      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Ingresa código de licitación"
          value={searchInput}
          onChange={handleSearch}
          className="search-bar"
        />
        <button className="a" onClick={() => oeoe()}>Buscar</button>
      </div>

      {showLicitation && (
        <div className="topographic-tracker-container">
          <div className="proyect-number">Licitación N#123</div>
          <div className="tracker-header">
            <div className="tracker-title">Levantamiento Topográfico</div>
            <p><strong>Cliente:</strong> XYZ Construcciones S.A.</p>
            <p><strong>Estado del Proyecto:</strong> En Progreso</p>
          </div>

          <div className="progress-overview">
            <h3>Progreso del Proyecto</h3>
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: "25%" }}>
                25% Completado
              </div>
            </div>
          </div>

          <div className="project-description">
            <h3>Descripción</h3>
            <div>
              Este proyecto de levantamiento topográfico cubre un área de 50 hectáreas,
              donde se realizarán mediciones detalladas para la construcción de una
              nueva autopista. Los datos topográficos obtenidos serán cruciales para
              el diseño de estructuras de soporte y la planificación de drenajes,
              asegurando precisión y eficiencia en cada fase de la obra.
            </div>
          </div>

          <div className="steps-section-container">
            <h3>Pasos del Servicio</h3>
            {steps.map((step) => (
              <div key={step.id} className={`step-item ${step.status}`}>
                <div className="step-header" onClick={() => toggleStepDetails(step.id)}>
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-info">
                    <h4>{step.name}</h4>
                    <p>{step.description}</p>
                    <span className={`status-label ${step.status}`}>
                      {step.status === "completado"
                        ? "Completado"
                        : step.status === "en-progreso"
                          ? "En Progreso"
                          : "Pendiente"}
                    </span>
                  </div>
                  <div className={`caret ${expandedStepId === step.id ? 'caret-rotated' : ''}`}>
                    <SlArrowDown style={{ fontSize: '20px' }} />
                  </div>
                </div>

                <div className={`step-details ${expandedStepId === step.id ? 'expanded' : ''}`}>
                  {expandedStepId === step.id && (
                    <>
                      <h5>Tareas:</h5>
                      <ul className="substeps-list">
                        <div className="substep-item-header">
                          <span className="substep-title s-info s-title">título</span>
                          <span className="substep-date s-info s-title">Fecha estimada</span>
                          <span className="substep-person s-info s-title">Encargado</span>
                          <span className="substep-state s-info s-title">Status</span>
                          <span className="substep-priority s-info s-title">Prioridad</span>
                        </div>
                      </ul>
                      <ul className="substeps-list">
                        {step.substeps.map((substep, index) => (
                          <li key={index} className="substep-item">
                            <span className="substep-title s-info">{substep.title}</span>
                            <span className="substep-date s-info">{substep.estimatedDate}</span>
                            <span className="substep-person s-info">{substep.personInCharge}</span>
                            <span className={`status-label s-info s ${step.status}`}>
                              {step.status === "completado"
                                ? "Completado"
                                : step.status === "en-progreso"
                                  ? "En Progreso"
                                  : "Pendiente"}
                            </span>
                            <span className="substep-priority s-info">{substep.priority}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="steps-aditional-info"><strong>Comentarios:</strong> {step.comments}</p>
                      <p><strong>Fecha Estimada de Finalización:</strong> {step.estimatedCompletion}</p>
                      {step.actualCompletion && (
                        <p><strong>Fecha Real de Finalización:</strong> {step.actualCompletion}</p>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="additional-info-container">
            <h3>Información Adicional</h3>
            <p><AiOutlineEnvironment /> <strong>Ubicación:</strong> Santiago, Chile</p>
            <p><AiOutlineCalendar /> <strong>Plazo Estimado:</strong> 1 de abril, 2025 - 15 de mayo, 2025</p>
            <p><AiOutlineTeam /> <strong>Equipo:</strong> Juan Pérez (Topógrafo Jefe), María Gómez (Analista de Datos), Carlos Ortega (Técnico)</p>

            <h4>Actividad Reciente</h4>
            <ul>
              <li>1 de abril, 2025 - Planificación Inicial completada</li>
              <li>5 de abril, 2025 - Reconocimiento del Sitio completado</li>
              <li>10 de abril, 2025 - Configuración de Equipos en progreso</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tracking;
