import React from 'react';
import './performanceSummary.css';

function PerformanceSummary() {
  const summaryData = [
    { title: 'Ingresos Totales', value: 'CLP $750M', growth: '+12% desde el año pasado' },
    { title: 'Nuevos Clientes', value: '200', growth: '+8% desde el año pasado' },
    { title: 'Tasa de Conversión', value: '5.2%', growth: '-1% desde el año pasado' },
    { title: 'Satisfacción del Cliente', value: '92%', growth: '+2% desde el año pasado' },
  ];

  return (
    <div className="performance-summary-container">
      {summaryData.map((item, index) => (
        <div key={index} className="summary-item">
          <h4 className="summary-title">{item.title}</h4>
          <p className="summary-value">{item.value}</p>
          <span className={`summary-growth ${item.growth.includes('+') ? 'growth-positive' : 'growth-negative'}`}>{item.growth}</span>
        </div>
      ))}
    </div>
  );
}

export default PerformanceSummary;
