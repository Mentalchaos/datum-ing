import React from "react";
import { Line } from "react-chartjs-2";
import "./licitationMetrics.css";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import BudgetPieChart from "./BudgetPieChart";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LicitationMetrics = () => {
    const burndownData = {
        labels: ["Día 1", "Día 5", "Día 10", "Día 15", "Día 20"],
        datasets: [
            {
                label: "Progreso planeado (% completado)",
                data: [0, 20, 40, 60, 100],
                borderColor: "#4CAF50",
                backgroundColor: "rgba(76, 175, 80, 0.2)",
                tension: 0.4,
            },
            {
                label: "Progreso real (% completado)",
                data: [0, 15, 30, 50, 70],
                borderColor: "#FF5722",
                backgroundColor: "rgba(255, 87, 34, 0.2)",
                tension: 0.4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: "bottom" },
            title: {
                display: true,
                text: "Progreso del Cronograma",
                color: "#606060",
                font: {
                    size: 18,
                    weight: "bold",
                    family: "Roboto, sans-serif",
                },
            },
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: "Porcentaje Completado (%)",
                },
                ticks: {
                    callback: (value) => `${value}%`,
                },
                max: 100,
                min: 0,
            },
        },
    };

    const budgetData = [
        { category: "Personal", amount: 15000000, color: "#8884d8" },
        { category: "Equipamiento", amount: 9900000, color: "#82ca9d" },
        { category: "Transporte", amount: 3000000, color: "#ffc658" },
        { category: "Varios", amount: 700000, color: "#f67272" },
        { category: "Insumos", amount: 1500000, color: "#d884b5" },
    ];

    const plannedCosts = [
        { category: "Personal", amount: 11000000, color: "#8884d8" },
        { category: "Equipamiento", amount: 10000000, color: "#82ca9d" },
        { category: "Transporte", amount: 3500000, color: "#ffc658" },
        { category: "Varios", amount: 1000000, color: "#f67272" },
        { category: "Insumos", amount: 1000000, color: "#d884b5" },
    ];


    const delayData = [
        { reason: "Condiciones climáticas inesperadas", date: "2024-11-01", days: 3 },
        { reason: "Retraso en la entrega del proveedor", date: "2024-11-05", days: 5 },
        { reason: "Problemas con la aprobación de permisos", date: "2024-11-10", days: 7 },
        { reason: "Fallas en el equipamiento", date: "2024-11-15", days: 2 },
    ];

    const totalDaysDelayed = delayData.reduce((total, delay) => total + delay.days, 0);

    const currentBudget = budgetData.reduce((total, item) => total + item.amount, 0);
    const plannedBudget = plannedCosts.reduce((total, item) => total + item.amount, 0);
    const totalExpenses = currentBudget - plannedBudget;

    return (
        <div className="metrics-wrapper">
            <div className="metrics-header">
                <div className="metrics-title">Métricas de Licitación </div>
                <p>Resumen detallado del progreso, presupuesto y otros aspectos clave.</p>
            </div>

            <div className="metrics-section">
                <h3>Cronograma</h3>
                <p>
                    Este gráfico muestra el porcentaje completado de la licitación en comparación con el plan original.
                </p>
                <div className="burn-chart-container">
                    <Line data={burndownData} options={chartOptions} height={387} width={575} />
                    {/* <p className="chart-note">
            * El porcentaje completado refleja el progreso acumulativo basado en tareas y metas establecidas.
          </p> */}
                    <div className="delay-list">
                        <h4>Factores que causaron retrasos:</h4>
                        <ul className="delayed-data">
                            {delayData.map((delay, index) => (
                                <li key={index}>
                                    <strong>Razón:</strong> {delay.reason} <br />
                                    <strong>Fecha:</strong> {delay.date} <br />
                                    <strong>Días retrasados:</strong> {delay.days} días
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="delay-summary">
                        <div>Total de días retrasados:</div>
                        <div className="delay-summary-number">{totalDaysDelayed} días</div>
                    </div>
                </div>
            </div>

            <div className="metrics-section">
                <h3>Presupuesto</h3>
                <p>Desglose del presupuesto asignado y gasto hasta ahora (CLP).</p>

                <div className="budget-metrics">

                    <div className="budget-metrics-graph">
                        {/* <div className="budget-summary">
                        <p><strong>Presupuesto Planeado:</strong> {plannedBudget.toLocaleString("es-CL")} CLP</p>
                        <p><strong>Presupuesto Gastado:</strong> {currentBudget.toLocaleString("es-CL")} CLP</p>
                    </div> */}
                        <div className="pie-chart-container">
                            <BudgetPieChart data={plannedCosts} total={plannedBudget} title={`Presupuesto proyecto: ${plannedBudget.toLocaleString("es-CL")} CLP`} />
                        </div>
                        <div className="pie-chart-container">
                            <BudgetPieChart data={budgetData} total={currentBudget} title={`Total gastado: ${currentBudget.toLocaleString("es-CL")} CLP`} />
                        </div>
                    </div>
                    <div className="desglose">Desglose de gastos</div>
                    <div className="budget-list">
                        {budgetData.map((item, index) => (
                            <div
                                key={index}
                                className={`budget-item ${item.category === "Sobregasto" ? "overbudget" : ""}`}
                            >
                                <span>{item.category}</span>
                                <span>{item.amount.toLocaleString("es-CL")} CLP</span>
                            </div>
                        ))}
                        <div
                            className="budget-item overbudget"
                        >
                            <span>Total</span>
                            <span>{currentBudget.toLocaleString("es-CL")} CLP</span>
                        </div>
                    </div>
                    <div className="budget-footer">
                        <div style={{margin: '0 5px'}}>Esta licitación se ha pasado del presupuesto en: </div>
                        <div style={{color: '#e74c3c', fontWeight: 600, margin: 0}}>${totalExpenses.toLocaleString("es-CL")} CLP</div>
                    </div>
                </div>
            </div>

            <div className="metrics-section">
                <h3>Equipo Involucrado</h3>
                <p>Lista de las personas clave y sus roles en la licitación.</p>
                <ul className="team-list">
                    <li>
                        <strong>Juan Pérez:</strong> Jefe de Proyecto
                    </li>
                    <li>
                        <strong>María Gómez:</strong> Analista de Datos
                    </li>
                    <li>
                        <strong>Carlos Ortega:</strong> Técnico de Campo
                    </li>
                    <li>
                        <strong>Laura Martínez:</strong> Supervisora de Calidad
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default LicitationMetrics;
