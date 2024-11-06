import React from 'react';
import PerformanceSummary from './PerformanceSummary';
import PerformanceCharts from './PerformanceCharts';
import KPIOverview from './KPIOverview';
import GoalProgress from './GoalProgress';
import './performanceAnalytics.css';

function PerformanceAnalytics() {
  return (
    <section className="performance-analytics-container">
      <div className="performance-analytics-title">Analítica y Reporte de Desempeño Anual</div>

      <PerformanceSummary />
      <PerformanceCharts />
      <KPIOverview />
      <GoalProgress />
    </section>
  );
}

export default PerformanceAnalytics;
