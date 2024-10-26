import React, { useState } from 'react';
import { companies } from '../../Data/companies';
import './marketAnalysis.css';

const MarketAnalysis = () => {
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  const [activeSection, setActiveSection] = useState("Tecnologías");

  const renderSectionContent = () => {
    switch (activeSection) {
      case "Tecnologías":
        return (
          <ul className="market-data-list">
            {Object.entries(selectedCompany.tecnologias).map(([tech, available]) => (
              <li key={tech}>
                {tech}: {available ? "Si" : "No/No especificado"}
              </li>
            ))}
          </ul>
        );
      case "Servicios":
        return (
          <ul className="market-data-list">
            {Object.entries(selectedCompany.servicios).map(([service, available]) => (
              <li key={service}>
                {service}: {available ? "Si" : "No/No especificado"}
              </li>
            ))}
          </ul>
        );
      case "Operation Areas":
        return (
          <ul className="market-operation-list">
            {selectedCompany.areas_operacion.map((area, idx) => (
              <li key={idx}>{area}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="market-container">
      <div className="market-content">
        {/* Sidebar */}

        <div className="right-market-content">
          {/* Info Box */}
          <div className="market-info-box">
            <div className="company-card">
              <h2 className="market-company-name">{selectedCompany.nombre_empresa}</h2>
              <div className="market-contact-info">
                <p><strong>Phone:</strong> {selectedCompany.contacto.telefono}</p>
                <p><strong>Email:</strong> {selectedCompany.contacto.correo}</p>
                <p><strong>Location:</strong> {selectedCompany.contacto.localizacion}</p>
              </div>
            </div>

            <div className="market-info-box-content">
              <div className="market-info-box-header">
                <button
                  className={`market-option ${activeSection === "Tecnologías" ? "active" : ""}`}
                  onClick={() => setActiveSection("Tecnologías")}
                >
                  Tecnologías
                </button>
                <button
                  className={`market-option ${activeSection === "Servicios" ? "active" : ""}`}
                  onClick={() => setActiveSection("Servicios")}
                >
                  Servicios
                </button>
                <button
                  className={`market-option ${activeSection === "Operation Areas" ? "active" : ""}`}
                  onClick={() => setActiveSection("Operation Areas")}
                >
                  Áreas de operación
                </button>
              </div>


              <div className="market-data-section">
                {/* <h3 className="market-data-heading">{activeSection}</h3> */}
                {renderSectionContent()}
              </div>
            </div>
          </div>
        </div>
        <div className="left-market-content">
          <aside className="market-sidebar">
            <h2 className="market-sidebar-title">Seleccionar compañia</h2>
            <ul className="market-company-list">
              {companies.map((company, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedCompany(company)}
                  className={company.nombre_empresa === selectedCompany.nombre_empresa ? 'market-company-item active' : 'market-company-item'}
                >
                  {company.nombre_empresa}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysis;
