import React from 'react';
import './KPIOverview.css';

function KPIOverview() {
  const KPIs = [
    { label: 'Tasa de Rebote', value: '35%' },
    { label: 'Duración Promedio de Sesión', value: '3m 25s' },
    { label: 'Páginas por Sesión', value: '4.5' },
    { label: 'Clientes Recurrentes', value: '68%' },
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
