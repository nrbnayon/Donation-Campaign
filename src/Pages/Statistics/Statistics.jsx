import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import useDonationData from "../../Hooks/useDonationData";
import useLocalStorage from "../../Hooks/useLocalStorage";

const Statistics = () => {
  const { data: chartData } = useDonationData();
  const { localData } = useLocalStorage();
  const COLORS = ["#FFBB28", "#0088FE", "#00C49F"];
  const data = [
    { name: "Your Donation", value: localData.length },
    { name: "Available Donation", value: chartData.length - localData.length },
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, value } = payload[0];
      return (
        <div className="custom-tooltip">
          <p className="label">{`${name} : ${value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full min-h-screen">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="none"
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
