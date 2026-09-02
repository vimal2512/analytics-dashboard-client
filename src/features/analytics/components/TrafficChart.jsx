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
    <div className="data-panel p-5">

      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="panel-heading font-semibold">Traffic overview</h2>
          <p className="panel-meta mt-1">Visitors and page views over time</p>
        </div>
        <span className="panel-meta">Last selected period</span>
      </div>

      <ResponsiveContainer width="100%" height={300}>

        <LineChart data={data}>

          <CartesianGrid stroke="#e5edef" strokeDasharray="3 3" vertical={false} />

          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#8797a0", fontSize: 12 }} />

          <YAxis axisLine={false} tickLine={false} tick={{ fill: "#8797a0", fontSize: 12 }} />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="visitors"
            stroke="#0f766e"
            strokeWidth={3}
            dot={false}
            name="Visitors"
          />

          <Line
            type="monotone"
            dataKey="pageViews"
            stroke="#e39b3d"
            strokeWidth={3}
            dot={false}
            name="Page Views"
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );

}

export default TrafficChart;