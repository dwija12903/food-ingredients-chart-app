import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white p-2 border border-gray-300 rounded shadow">
        <p className="label font-semibold">{`${payload[0].name} : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
  const radius = outerRadius + 10; // Place label outside the pie
  const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
  const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

  return (
    <text
      x={x}
      y={y}
      fill="#333"
      fontSize={14}
      fontWeight="bold"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${name}: ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const FoodIngredientsChart = ({ food, colors }) => {
  const data = Object.keys(food)
    .filter((key) => key !== "name" && key !== "calories" && key !== "protein")
    .map((key, index) => ({
      name: key,
      value: food[key],
      fill: colors[index % colors.length],
    }));

  return (
    <div className="food-ingredients-chart bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">{food.name} Ingredients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Bar Chart Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Bar Chart</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Pie Chart Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Pie Chart</h3>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={120}
                label={renderCustomizedLabel} // External labels
                labelLine={false}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default FoodIngredientsChart;
