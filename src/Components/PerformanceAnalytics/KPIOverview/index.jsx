import React from 'react';
import './KPIOverview.css';

function KPIOverview() {
  const KPIs = [
    { label: 'Proyectos Completados', value: '120' },
    { label: 'Tiempo Promedio por Proyecto', value: '15 días' },
    { label: 'Precisión de Mediciones', value: '98%' },
    { label: 'Índice de Satisfacción del Cliente', value: '92%' },
  ];

  return (
    <div className="kpi-overview-container">
      {KPIs.map((kpi, index) => (
        <div key={index} className="kpi-item">
          <h5 className="kpi-label">{kpi.label}</h5>
          <p className="kpi-value">{kpi.value}</p>
        </div>
      ))}
    </div>
  );
}

export default KPIOverview;
