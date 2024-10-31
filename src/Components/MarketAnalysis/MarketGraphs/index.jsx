import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const MarketGraphs = ({ data, chartType = 'bar' }) => (
  <ResponsiveContainer width="100%" height={300}>
    {chartType === 'bar' ? (
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis domain={[0, 1]} allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>
    ) : (
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    )}
  </ResponsiveContainer>
);

export default MarketGraphs;
