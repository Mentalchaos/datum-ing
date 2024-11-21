import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const BudgetPieChart = ({ data, total, title }) => {
    return (
        <div className="pie-chart-container">
            <div className="apapapap">{title}</div>
            <PieChart width={500} height={300}>
                <Pie
                    data={data}
                    dataKey="amount"
                    nameKey="category"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={(entry) => 
                        `${entry.category}: ${((entry.amount / total) * 100).toFixed(1)}%`}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
};

export default BudgetPieChart;
