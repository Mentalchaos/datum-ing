import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import "./generalMarketGraphs.css";

const GeneralMarketGraphs = ({ data }) => {
  console.log("Data received:", data);

  return (
    <div className="general-market-graphs">
      <div className="general-market-title">Vista general de datos</div>

      <div className="general-market-chart">
        <div className="general-market-subtitle">Conteo de tecnologías</div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.techGeneral}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" name="Empresa" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="general-market-chart">
        <div className="general-market-subtitle">Conteo de servicios</div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.serviceGeneral}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" name="Empresa" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="general-market-chart">
        <div className="general-market-subtitle">Conteo de áreas de Operación</div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.areaGeneral}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#ffc658" name="Empresa" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GeneralMarketGraphs;
