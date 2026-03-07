// import AnalyticsCard from "../components/AnalyticsCard";
// import TrafficChart from "../components/TrafficChart";
// import TopPagesTable from "../components/TopPagesTable";

// function DashboardPage() {
//   return (

//     <div className="space-y-6">

//       <div className="grid grid-cols-3 gap-6">

//         <AnalyticsCard title="Visitors" value="1,245" />
//         <AnalyticsCard title="Page Views" value="3,890" />
//         <AnalyticsCard title="Events" value="923" />

//       </div>

//       <TrafficChart />

//       <TopPagesTable />

//     </div>

//   );
// }

// export default DashboardPage;

import WebsiteSelector from "../../websites/components/WebsiteSelector";
import { useSelectedWebsite } from "../../websites/context/SelectedWebsiteContext";

import {
  useAnalyticsSummary,
  useTrafficData,
  useTopPages
} from "../hooks/useAnalytics";

import AnalyticsCard from "../components/AnalyticsCard";
import TrafficChart from "../components/TrafficChart";
import TopPagesTable from "../components/TopPagesTable";

function DashboardPage() {

  const { selectedWebsite } = useSelectedWebsite();

  const trackingId = selectedWebsite?.trackingId;

  const { data: summary } = useAnalyticsSummary(trackingId);

  const { data: traffic } = useTrafficData(trackingId);

  const { data: pages } = useTopPages(trackingId);

  return (

    <div className="space-y-6">

      <h1 className="text-2xl font-bold">
        Analytics Dashboard
      </h1>

      {/* Website selector */}

      <WebsiteSelector />

      {/* Analytics Cards */}

      {summary && (

        <div className="grid grid-cols-3 gap-6">

          <AnalyticsCard
            title="Visitors"
            value={summary.visitors}
          />

          <AnalyticsCard
            title="Page Views"
            value={summary.pageViews}
          />

          <AnalyticsCard
            title="Events"
            value={summary.events}
          />

        </div>

      )}

      {/* Traffic Chart */}

      {traffic && (
        <TrafficChart data={traffic} />
      )}

      {/* Top Pages */}

      {pages && (
        <TopPagesTable pages={pages} />
      )}

    </div>

  );

}

export default DashboardPage;