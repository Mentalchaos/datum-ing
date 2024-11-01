import React, { useState } from 'react';
import { companies } from '../../Data/companies';
import Modal from '../Modal/Modal';
import MarketGraphs from './MarketGraphs';

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
                onClick={() => handleItemClick('tecnologias', tech)}
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
                /* Impide que se aprezcan los graficos para las certificaciones */
                /* onClick={() => handleItemClick("certificaciones", cert)} */
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
      {/* modificar aca */}
      <Modal minWidth={'65%'} isOpen={isGraphModalOpen} onClose={() => setGraphModalOpen(false)}>
        {dataType && selectedData && (
          <div className='graph-header'>
            <div className='graph-title'>
              <div className='graph-title-item'>Comparación de {dataType}: </div>
              <div className='graph-title-item' style={{ color: '#ef3333' }}>{selectedData}</div>
            </div>
            <MarketGraphs data={comparisonData} chartType='bar' />
          </div>
        )}
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
              <div className="market-info-box-general" onClick={() => setGeneralGraphModalOpen(true)}>
                Datos generales <HiOutlineArrowsPointingOut />
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
