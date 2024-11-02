import React, { useState } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineClockCircle,
  AiOutlineTeam,
  AiOutlineFileSearch,
  AiOutlineEnvironment,
  AiOutlineCalendar,
} from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { SlArrowDown } from "react-icons/sl";
import "./tracking.css";

const Tracking = () => {
  const [expandedStepId, setExpandedStepId] = useState(null);

  const toggleStepDetails = (id) => {
    setExpandedStepId(expandedStepId === id ? null : id);
  };

  const steps = [
    {
      id: 1,
      name: "Planificación Inicial",
      description: "Definir el alcance del proyecto, requisitos y objetivos.",
      icon: <AiOutlineFileSearch />,
      status: "completado",
      substeps: [
        "Identificar los requisitos del cliente",
        "Definir el presupuesto",
        "Establecer el equipo de trabajo",
      ],
      comments: "Reunión inicial completada con éxito.",
      estimatedCompletion: "1 de abril, 2024",
      actualCompletion: "1 de abril, 2024",
    },
    {
      id: 2,
      name: "Reconocimiento del Sitio",
      description: "Evaluación del sitio para la preparación de la encuesta.",
      icon: <AiOutlineEnvironment />,
      status: "completado",
      substeps: ["Visita al sitio", "Revisión del terreno", "Análisis inicial"],
      comments: "El terreno estaba en condiciones óptimas.",
      estimatedCompletion: "5 de abril, 2024",
      actualCompletion: "5 de abril, 2024",
    },
    {
      id: 3,
      name: "Configuración de Equipos",
      description: "Configurar GPS, estación total y otros equipos.",
      icon: <FiSettings />,
      status: "en-progreso",
      substeps: ["Configurar GPS", "Configurar estación total"],
      comments: "Equipos listos, falta calibración.",
      estimatedCompletion: "10 de abril, 2024",
      actualCompletion: null,
    },
    {
      id: 4,
      name: "Recolección de Datos",
      description: "Recopilar datos topográficos del sitio de la encuesta.",
      icon: <AiOutlineClockCircle />,
      status: "pendiente",
      substeps: ["Establecer puntos de referencia", "Tomar medidas"],
      comments: "Listo para iniciar.",
      estimatedCompletion: "15 de abril, 2024",
      actualCompletion: null,
    },
    {
      id: 5,
      name: "Procesamiento de Datos",
      description: "Procesar los datos en un formato utilizable.",
      icon: <AiOutlineClockCircle />,
      status: "pendiente",
      substeps: ["Limpiar datos", "Convertir a formatos GIS"],
      comments: "Esperando recolección de datos.",
      estimatedCompletion: "20 de abril, 2024",
      actualCompletion: null,
    },
    {
      id: 6,
      name: "Control de Calidad",
      description: "Revisar la precisión de los datos y control de calidad.",
      icon: <AiOutlineCheckCircle />,
      status: "pendiente",
      substeps: ["Verificar precisión", "Validar consistencia de datos"],
      comments: "Por iniciar después del procesamiento.",
      estimatedCompletion: "25 de abril, 2024",
      actualCompletion: null,
    },
    {
      id: 7,
      name: "Generación de Reporte",
      description: "Generar un informe topográfico detallado y mapas.",
      icon: <AiOutlineFileSearch />,
      status: "pendiente",
      substeps: ["Crear informe", "Generar mapas"],
      comments: "Dependerá de la calidad de los datos.",
      estimatedCompletion: "1 de mayo, 2024",
      actualCompletion: null,
    },
    {
      id: 8,
      name: "Entrega Final",
      description: "Entregar informe completo al cliente.",
      icon: <AiOutlineCheckCircle />,
      status: "pendiente",
      substeps: ["Presentación al cliente", "Revisión final"],
      comments: "Preparar para presentación.",
      estimatedCompletion: "15 de mayo, 2024",
      actualCompletion: null,
    },
  ];

  const licitations = [
    { id: 1, name: "Licitación #1234", status: "En Progreso" },
    { id: 2, name: "Licitación #1235", status: "Completada" },
    { id: 3, name: "Licitación #1236", status: "Cancelada" },
    { id: 4, name: "Licitación #1237", status: "Pendiente" },
    { id: 5, name: "Licitación #1238", status: "En Revisión" },
    { id: 6, name: "Licitación #1239", status: "En Progreso" },
    { id: 7, name: "Licitación #1240", status: "Completada" },
    { id: 8, name: "Licitación #1241", status: "Cancelada" },
    { id: 9, name: "Licitación #1242", status: "Pendiente" },
    { id: 10, name: "Licitación #1243", status: "En Revisión" },
    { id: 11, name: "Licitación #1244", status: "En Progreso" },
    { id: 12, name: "Licitación #1245", status: "Completada" },
    { id: 13, name: "Licitación #1246", status: "Cancelada" },
    { id: 14, name: "Licitación #1247", status: "Pendiente" },
    { id: 15, name: "Licitación #1248", status: "En Revisión" },
    { id: 16, name: "Licitación #1249", status: "En Progreso" },
    { id: 17, name: "Licitación #1250", status: "Completada" },
    { id: 18, name: "Licitación #1251", status: "Cancelada" },
    { id: 19, name: "Licitación #1252", status: "Pendiente" },
    { id: 20, name: "Licitación #1253", status: "En Revisión" },
    { id: 1, name: "Licitación #1234", status: "En Progreso" },
    { id: 2, name: "Licitación #1235", status: "Completada" },
    { id: 3, name: "Licitación #1236", status: "Cancelada" },
    { id: 4, name: "Licitación #1237", status: "Pendiente" },
    { id: 5, name: "Licitación #1238", status: "En Revisión" },
    { id: 6, name: "Licitación #1239", status: "En Progreso" },
    { id: 7, name: "Licitación #1240", status: "Completada" },
    { id: 8, name: "Licitación #1241", status: "Cancelada" },
    { id: 9, name: "Licitación #1242", status: "Pendiente" },
    { id: 10, name: "Licitación #1243", status: "En Revisión" },
    { id: 11, name: "Licitación #1244", status: "En Progreso" },
    { id: 12, name: "Licitación #1245", status: "Completada" },
    { id: 13, name: "Licitación #1246", status: "Cancelada" },
    { id: 14, name: "Licitación #1247", status: "Pendiente" },
    { id: 15, name: "Licitación #1248", status: "En Revisión" },
    { id: 16, name: "Licitación #1249", status: "En Progreso" },
    { id: 17, name: "Licitación #1250", status: "Completada" },
    { id: 18, name: "Licitación #1251", status: "Cancelada" },
    { id: 19, name: "Licitación #1252", status: "Pendiente" },
    { id: 20, name: "Licitación #1253", status: "En Revisión" }
  ];


  return (
    <div className="topographic-tracker-wrapper">
      <div className="licitation-sidebar">
        <h3>Licitaciones</h3>
        <ul className="licitation-list">
          {licitations.map((licit) => (
            <li key={licit.id} className={`licit-item ${licit.status.toLowerCase()}`}>
              <span>{licit.name}</span>
              <span className="status">{licit.status}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="topographic-tracker-container">
      <div className="proyect-number">Licitación N#123456789</div>
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
                    <h5>Subpasos:</h5>
                    <ul>
                      {step.substeps.map((substep, index) => (
                        <li key={index}>{substep}</li>
                      ))}
                    </ul>
                    <p><strong>Comentarios:</strong> {step.comments}</p>
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
          <p><AiOutlineCalendar /> <strong>Plazo Estimado:</strong> 1 de abril, 2024 - 15 de mayo, 2024</p>
          <p><AiOutlineTeam /> <strong>Equipo:</strong> Juan Pérez (Topógrafo Jefe), María Gómez (Analista de Datos), Carlos Ortega (Técnico)</p>

          <h4>Actividad Reciente</h4>
          <ul>
            <li>1 de abril, 2024 - Planificación Inicial completada</li>
            <li>5 de abril, 2024 - Reconocimiento del Sitio completado</li>
            <li>10 de abril, 2024 - Configuración de Equipos en progreso</li>
          </ul>

          <h4>Documentos</h4>
          <ul className="document-list">
            <li><a href="#">Acta de Constitución</a></li>
            <li><a href="#">Plan de Proyecto</a></li>
            <li><a href="#">Informe de Reconocimiento del Sitio</a></li>
            <li><a href="#">Reporte de Configuración de Equipos</a></li>
            <li><a href="#">Informe de Control de Calidad</a></li>
            <li><a href="#">Informe Final de Topografía</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
