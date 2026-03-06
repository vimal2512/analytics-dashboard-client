import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { day: "Mon", visitors: 120 },
  { day: "Tue", visitors: 210 },
  { day: "Wed", visitors: 180 },
  { day: "Thu", visitors: 250 },
  { day: "Fri", visitors: 300 },
  { day: "Sat", visitors: 280 },
  { day: "Sun", visitors: 350 }
];

function TrafficChart() {
  return (
    <div className="bg-white rounded shadow p-6">

      <h2 className="font-bold mb-4">
        Traffic
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="visitors" stroke="#111827" />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default TrafficChart;