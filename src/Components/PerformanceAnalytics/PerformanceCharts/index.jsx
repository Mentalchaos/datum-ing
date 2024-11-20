import React from 'react';
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';
import './performanceCharts.css';

function PerformanceCharts() {
  const lineData = [
    { month: 'Ene', Ganancias: 120000000 },
    { month: 'Feb', Ganancias: 130000000 },
    { month: 'Mar', Ganancias: 125000000 },
    { month: 'Abr', Ganancias: 145000000 },
    { month: 'May', Ganancias: 150000000 },
    { month: 'Jun', Ganancias: 170000000 },
  ];

  const pieData = [
    { name: 'Levantamientos topográficos', value: 130000000 },
    { name: 'Levantamientos catastrales', value: 150000000 },
    { name: 'Levantamientos batimétricos', value: 110000000 },
    { name: 'Estudios geodésicos', value: 59000000 }
  ];

  const barData = [
    { quarter: 'Q1', Ventas: 120000000 },
    { quarter: 'Q2', Ventas: 125000000 },
    { quarter: 'Q3', Ventas: 130000000 },
    { quarter: 'Q4', Ventas: 140000000 },
  ];

  const formatYAxis = (value) => `${(value / 1000000).toFixed(1)}M`;

  const pieColors = ['#8884d8', '#82ca9d', '#ffc658', '#f67272'];

  return (
    <div className="performance-charts-container">
      <div className="line-chart-container">
        <h4 className="chart-title">Crecimiento de Ingresos Mensuales</h4>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={formatYAxis} />
            <Tooltip formatter={(value) => `${(value / 1000000).toFixed(1)}M`} />
            <Legend />
            <Line type="monotone" dataKey="Ganancias" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="pie-chart-container">
        <h4 className="chart-title">Ingresos por Servicio</h4>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${(value / 1000000).toFixed(1)}M`} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bar-chart-container">
        <h4 className="chart-title">Ventas por Trimestre</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="quarter" />
            <YAxis tickFormatter={formatYAxis} />
            <Tooltip formatter={(value) => `${(value / 1000000).toFixed(1)}M`} />
            <Legend />
            <Bar dataKey="Ventas" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PerformanceCharts;
