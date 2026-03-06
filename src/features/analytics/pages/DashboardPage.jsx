import AnalyticsCard from "../components/AnalyticsCard";
import TrafficChart from "../components/TrafficChart";
import TopPagesTable from "../components/TopPagesTable";

function DashboardPage() {
  return (

    <div className="space-y-6">

      <div className="grid grid-cols-3 gap-6">

        <AnalyticsCard title="Visitors" value="1,245" />
        <AnalyticsCard title="Page Views" value="3,890" />
        <AnalyticsCard title="Events" value="923" />

      </div>

      <TrafficChart />

      <TopPagesTable />

    </div>

  );
}

export default DashboardPage;