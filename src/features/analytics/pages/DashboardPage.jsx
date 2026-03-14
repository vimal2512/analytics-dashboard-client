import WebsiteSelector from "../../websites/components/WebsiteSelector";
import { useSelectedWebsite } from "../../websites/context/SelectedWebsiteContext";

import {
  useAnalyticsSummary,
  useTrafficData,
  useTopPages,
  useTopEvents,
  useTopReferrers,
  useTopCountries,
} from "../hooks/useAnalytics";

import { useLiveVisitors } from "../hooks/useLiveVisitors";

import AnalyticsCard from "../components/AnalyticsCard";
import TrafficChart from "../components/TrafficChart";
import TopPagesTable from "../components/TopPagesTable";
import TopEventsTable from "../components/TopEventsTable";
import TopReferrersTable from "../components/TopReferrersTable";
import TopCountriesTable from "../components/TopCountriesTable";
import LiveVisitorsCard from "../components/LiveVisitorsCard";

function DashboardPage() {

  const { selectedWebsite } = useSelectedWebsite();

  const trackingId = selectedWebsite?.trackingId;

  const { data: summary } = useAnalyticsSummary(trackingId);
  const { data: traffic } = useTrafficData(trackingId);
  const { data: pages } = useTopPages(trackingId);
  const { data: topEvents } = useTopEvents(trackingId);
  const { data: referrers } = useTopReferrers(trackingId);
  const { data: countries } = useTopCountries(trackingId);

  const liveVisitors = useLiveVisitors();

  return (

    <div className="space-y-6">

      <h1 className="text-2xl font-bold">
        Analytics Dashboard
      </h1>

      <WebsiteSelector />

      {/* Analytics Cards */}

      {summary && (

        <div className="grid grid-cols-3 gap-6">

          <AnalyticsCard
            title="Visitors"
            value={summary.visitors}
          />

          <AnalyticsCard
            title="sessions"
            value={summary.sessions} />

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

      {/* Top Events */}

      {topEvents && (
        <TopEventsTable events={topEvents} />
      )}

      {/* Top Referrers */}

      {referrers && (
        <TopReferrersTable referrers={referrers} />
      )}

      {/* Top countries */}

      {countries && (
        <TopCountriesTable countries={countries} />
      )}

       <LiveVisitorsCard count={liveVisitors} />
    </div>

  );

}

export default DashboardPage;