import WebsiteSelector from "../../websites/components/WebsiteSelector";
import { useSelectedWebsite } from "../../websites/context/SelectedWebsiteContext";
import { useState } from "react";

import {
  useAnalyticsSummary,
  useTrafficData,
  useTopPages,
  useTopEvents,
  useTopReferrers,
  useTopCountries,
} from "../hooks/useAnalytics";

import { useLiveVisitors } from "../hooks/useLiveVisitors";
import { useSessionAnalytics } from "../hooks/useAnalytics";
import { formatDuration } from "../utils/formatDuration";
import AnalyticsCard from "../components/AnalyticsCard";
import TrafficChart from "../components/TrafficChart";
import TopPagesTable from "../components/TopPagesTable";
import TopEventsTable from "../components/TopEventsTable";
import TopReferrersTable from "../components/TopReferrersTable";
import TopCountriesTable from "../components/TopCountriesTable";
import LiveVisitorsCard from "../components/LiveVisitorsCard";
import { useLivePages } from "../hooks/useLivePages";
import LivePagesTable from "../components/LivePagesTable";

function DashboardPage() {

   const [days, setDays] = useState(7);

  const { selectedWebsite } = useSelectedWebsite();

  const trackingId = selectedWebsite?.trackingId;

  const { data: summary } = useAnalyticsSummary(trackingId, days);
  const { data: traffic } = useTrafficData(trackingId, days);
  const { data: pages } = useTopPages(trackingId, days);
  const { data: topEvents } = useTopEvents(trackingId, days);
  const { data: referrers } = useTopReferrers(trackingId, days);
  const { data: countries } = useTopCountries(trackingId, days);
  const { data: sessionStats } = useSessionAnalytics(trackingId, days);
  const liveVisitors = useLiveVisitors();
  const livePages = useLivePages();

 

  return (

    <div className="space-y-6">

      <h1 className="text-2xl font-bold">
        Analytics Dashboard
      </h1>

      <div className="flex gap-3">

  <button
    className={`px-3 py-1 rounded ${days === 1 ? "bg-black text-white" : "bg-gray-200"}`}
    onClick={() => setDays(1)}
  >
    Today
  </button>

  <button
    className={`px-3 py-1 rounded ${days === 7 ? "bg-black text-white" : "bg-gray-200"}`}
    onClick={() => setDays(7)}
  >
    7 Days
  </button>

  <button
    className={`px-3 py-1 rounded ${days === 30 ? "bg-black text-white" : "bg-gray-200"}`}
    onClick={() => setDays(30)}
  >
    30 Days
  </button>

</div>

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

          <LivePagesTable
            pages={livePages}
           />

        </div>

        

      )}

      {sessionStats && (

  <div className="grid grid-cols-3 gap-6">

    <AnalyticsCard
      title="Avg Session Duration"
      value={formatDuration(sessionStats.avgSessionDuration)}
    />

    <AnalyticsCard
      title="Bounce Rate"
      value={`${sessionStats.bounceRate}%`}
    />

    <AnalyticsCard
      title="Pages / Session"
      value={sessionStats.pagesPerSession}
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