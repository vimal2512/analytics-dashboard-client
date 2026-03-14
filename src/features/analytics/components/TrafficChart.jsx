import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend
} from "recharts";

function TrafficChart({ data }) {

  return (
    <div className="bg-white rounded shadow p-6">

      <h2 className="font-bold mb-4">
        Traffic
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="visitors"
            stroke="#2563eb"
            strokeWidth={2}
            name="Visitors"
          />

          <Line
            type="monotone"
            dataKey="pageViews"
            stroke="#16a34a"
            strokeWidth={2}
            name="Page Views"
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );

}

export default TrafficChart;