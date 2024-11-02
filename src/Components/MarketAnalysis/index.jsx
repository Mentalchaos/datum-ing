import React, { useState } from 'react';
import { companies } from '../../Data/companies';
import Modal from '../Modal/Modal';
import { IoIosConstruct } from "react-icons/io";
import { GiMining } from "react-icons/gi";
import { MdElectricBolt, MdForest, MdCellTower } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";
import { BiSolidCity } from "react-icons/bi";
import { HiOutlineArrowsPointingOut } from "react-icons/hi2";

import MarketModalContent from './MarketModalContent';
import GeneralMarketGraphs from './GeneralMarketGraphs';
import './marketAnalysis.css';

const MarketAnalysis = () => {
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  const [activeSection, setActiveSection] = useState("Tecnologías");
  const [isModalOpen, setModalOpen] = useState(true);
  const [isGraphModalOpen, setGraphModalOpen] = useState(false);
  const [isGeneralGraphModalOpen, setGeneralGraphModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [dataType, setDataType] = useState(null);
  const [comparisonData, setComparisonData] = useState([]);

  const calculateGeneralData = (module, ocurrence) => {
    const comparisonData = companies.map(company => {
      const serviceCount = Object.entries(company[module] || {}).reduce((count, [key, value]) => {
        return value === ocurrence ? count + 1 : count;
      }, 0);

      return {
        name: company.nombre_empresa,
        value: serviceCount,
      };
    });

    return comparisonData;
  };

  const calculateAreaGeneralData = () => {
    const comparisonData = companies.map(company => {
      const areasCount = company.areas_operacion.length
      return {
        name: company.nombre_empresa,
        value: areasCount,
      };
    });

    return comparisonData;
  }

  const generalData = () => {
    const techGeneral = calculateGeneralData("tecnologias", true);
    const serviceGeneral = calculateGeneralData("servicios", true);
    const areaGeneral = calculateAreaGeneralData();
    return {
      techGeneral,
      serviceGeneral,
      areaGeneral
    }
  };

  const tecnologias = Object.keys(companies[0].tecnologias);

  const areaIcon = (area) => {
    switch (area) {
      case "construcción":
        return <IoIosConstruct style={{ color: '#e8a543', marginRight: '5px' }} />
      case "minería":
        return <GiMining style={{ color: '#f5716e', marginRight: '5px' }} />
      case "energía":
        return <MdElectricBolt style={{ color: '#dfbb21', marginRight: '5px' }} />
      case "agricultura":
        return <PiPlantFill style={{ color: '#34ce74', marginRight: '5px' }} />
      case "forestal":
        return <MdForest style={{ color: '#23bf9f', marginRight: '5px' }} />
      case "telecomunicaciones":
        return <MdCellTower style={{ color: 'rgb(52 133 185)', marginRight: '5px' }} />
      case "urbanismo":
        return <BiSolidCity style={{ color: '#829091', marginRight: '5px' }} />
      default:
        return null;
    }
  };

  const handleItemClick = (dataType, dataKey) => {
    setDataType(dataType);
    setSelectedData(dataKey);

    if (dataType === 'areas_operacion') {
      const comparisonData = companies.map(company => ({
        name: company.nombre_empresa,
        value: company.areas_operacion.includes(dataKey) ? 1 : 0
      }));
      setGraphModalOpen(true);
      setComparisonData(comparisonData);
    } else {
      setComparisonData(companies.map(company => ({
        name: company.nombre_empresa,
        value: company[dataType][dataKey] ? 1 : 0
      })));
      setGraphModalOpen(true);
    }
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case "Tecnologías":
        return (
          <ul className="market-data-list">
            {Object.entries(selectedCompany.tecnologias).map(([tech, available]) => (
              <li
                className='market-item tech-item market-list-item'
                key={tech}
              >
                {tech}: {available === true ? "Si" : available === "no especificado" ? "No especificado" : "No"}
              </li>
            ))}
          </ul>
        );
      case "Servicios":
        return (
          <ul className="market-data-list">
            {Object.entries(selectedCompany.servicios).map(([service, available]) => (
              <li
                className='market-item market-list-item'
                key={service}
                onClick={() => handleItemClick('servicios', service)}
              >
                {service}: {available === true ? "Si" : available === "no especificado" ? "No especificado" : "No"}
              </li>
            ))}
          </ul>
        );
      case "Operation Areas":
        return (
          <ul className="market-operation-list">
            {selectedCompany.areas_operacion.map((area, idx) => (
              <li
                className='market-areas market-list-item'
                key={idx}
                onClick={() => handleItemClick('areas_operacion', area)}
              >
                {areaIcon(area)}{area}
              </li>
            ))}
          </ul>
        );
      case "Certifications":
        return (
          <ul className="market-data-list">
            {Object.entries(selectedCompany.certificaciones).map(([cert, value]) => (
              <li
                className="market-item cert-item"
                key={cert}
              >
                {cert}: {value === true ? "Si" : value === "no especificado" ? "No/No especificado" : value}
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="market-container">
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <MarketModalContent onClick={() => setModalOpen(false)} />
      </Modal>
      <Modal minWidth={'65%'} isOpen={isGraphModalOpen} onClose={() => setGraphModalOpen(!isGraphModalOpen)}>
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <div className="general-market-title">Resumen de tecnologias</div>
          <table style={{ width: '100%', borderCollapse: 'collapse', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <thead>
              <tr>
                <th style={{
                  padding: '12px',
                  backgroundColor: '#2c3e50',
                  color: '#fff',
                  textAlign: 'left',
                  borderRadius: '8px 0 0 8px'
                }}>
                  Empresa
                </th>
                {tecnologias.map(tecnologia => (
                  <th
                    key={tecnologia}
                    style={{
                      padding: '12px',
                      backgroundColor: '#2c3e50',
                      color: '#fff',
                      writingMode: 'vertical-lr',
                      transform: 'rotate(180deg)',
                      textAlign: 'center',
                      fontSize: '12px',
                      borderLeft: '1px solid #34495e',
                    }}
                  >
                    {tecnologia}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {companies.map(company => (
                <tr key={company.nombre_empresa} style={{ borderBottom: '1px solid #ecf0f1' }}>
                  <td style={{
                    padding: '12px',
                    backgroundColor: '#ecf0f1',
                    fontWeight: 'bold'
                  }}>
                    {company.nombre_empresa}
                  </td>
                  {tecnologias.map(tecnologia => (
                    <td
                      key={tecnologia}
                      style={{
                        padding: '10px',
                        textAlign: 'center',
                        borderLeft: '1px solid #ecf0f1',
                      }}
                    >
                      {company.tecnologias[tecnologia] == true ? (
                        <span style={{ color: 'green' }}>✔️</span>
                      ) : (
                        <span style={{ color: 'red' }}>❌</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal>

      {/* modal info general */}
      <Modal
        minWidth={'80%'}
        isOpen={isGeneralGraphModalOpen}
        onClose={() => setGeneralGraphModalOpen(false)}
        padding='2em 2.5em'
      >
        <GeneralMarketGraphs
          data={generalData()}
        />
      </Modal>

      <div className="market-content">
        <div className="right-market-content">
          <div className="market-info-box">
            <div className="company-card">
              <h2 className="market-company-name">{selectedCompany.nombre_empresa}</h2>
              <div className="market-contact-info">
                <p><strong>Teléfono:</strong> {selectedCompany.contacto.telefono}</p>
                <p><strong>Email:</strong> {selectedCompany.contacto.correo}</p>
                <p><strong>Ubicación:</strong> {selectedCompany.contacto.localizacion}</p>
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
                <button
                  className={`market-option ${activeSection === "Certifications" ? "active" : ""}`}
                  onClick={() => setActiveSection("Certifications")}
                >
                  Certificaciones
                </button>
              </div>
              <div style={{display: 'flex'}}>
                <div className="market-info-box-general" onClick={() => setGeneralGraphModalOpen(true)}>
                  Datos generales <HiOutlineArrowsPointingOut />
                </div>
                <div className="market-info-box-general-test" onClick={() => setGraphModalOpen(true)}>
                  Resumen <HiOutlineArrowsPointingOut />
                </div>
              </div>
              <div className="market-data-section">
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
