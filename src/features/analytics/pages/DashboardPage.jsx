// import { useState } from "react";

// import WebsiteSelector from "../../websites/components/WebsiteSelector";
// import { useSelectedWebsite } from "../../websites/context/SelectedWebsiteContext";

// import {
//   useAnalyticsSummary,
//   useTrafficData,
//   useTopPages,
//   useTopEvents,
//   useTopReferrers,
//   useTopCountries,
//   useSessionAnalytics
// } from "../hooks/useAnalytics";

// import { useLiveVisitors } from "../hooks/useLiveVisitors";
// import { useLivePages } from "../hooks/useLivePages";

// import { formatDuration } from "../utils/formatDuration";

// import AnalyticsCard from "../components/AnalyticsCard";
// import SkeletonCard from "../components/SkeletonCard";
// import SkeletonChart from "../components/SkeletonChart";

// import TrafficChart from "../components/TrafficChart";
// import TopPagesTable from "../components/TopPagesTable";
// import TopEventsTable from "../components/TopEventsTable";
// import TopReferrersTable from "../components/TopReferrersTable";
// import TopCountriesTable from "../components/TopCountriesTable";

// import LiveVisitorsCard from "../components/LiveVisitorsCard";
// import LivePagesTable from "../components/LivePagesTable";

// function DashboardPage() {

//   const { selectedWebsite } = useSelectedWebsite();
//   const trackingId = selectedWebsite?.trackingId;

//   const [days, setDays] = useState(7);

//   const { data: summary, isLoading: summaryLoading } =
//     useAnalyticsSummary(trackingId, days);

//   const { data: traffic, isLoading: trafficLoading } =
//     useTrafficData(trackingId, days);

//   const { data: pages } =
//     useTopPages(trackingId, days);

//   const { data: topEvents } =
//     useTopEvents(trackingId, days);

//   const { data: referrers } =
//     useTopReferrers(trackingId, days);

//   const { data: countries } =
//     useTopCountries(trackingId, days);

//   const { data: sessionStats } =
//     useSessionAnalytics(trackingId, days);


//   const liveVisitors = useLiveVisitors();
//   const livePages = useLivePages();



//   return (

//     <div className="space-y-8 max-w-7xl mx-auto fade-page">

//       {/* Header */}

//       <div className="flex items-center justify-between">

//         <h1 className="text-2xl font-bold">
//           Analytics Dashboard
//         </h1>

//         <WebsiteSelector />

//       </div>

//       {/* Date Filter */}

//       <div className="flex gap-3">

//         <button
//           onClick={() => setDays(1)}
//           className={`px-4 py-1.5 rounded-full text-sm font-medium transition
//           ${days === 1 ? "bg-black text-white shadow" : "bg-gray-100 hover:bg-gray-200"}`}
//         >
//           Today
//         </button>

//         <button
//           onClick={() => setDays(7)}
//           className={`px-4 py-1.5 rounded-full text-sm font-medium transition
//           ${days === 7 ? "bg-black text-white shadow" : "bg-gray-100 hover:bg-gray-200"}`}
//         >
//           7 Days
//         </button>

//         <button
//           onClick={() => setDays(30)}
//           className={`px-4 py-1.5 rounded-full text-sm font-medium transition
//           ${days === 30 ? "bg-black text-white shadow" : "bg-gray-100 hover:bg-gray-200"}`}
//         >
//           30 Days
//         </button>

//       </div>

//       {/* Core Metrics */}

//       {summaryLoading ? (

//         <div className="grid grid-cols-4 gap-6">
//           <SkeletonCard />
//           <SkeletonCard />
//           <SkeletonCard />
//           <SkeletonCard />
//         </div>

//       ) : summary && (

//         <div className="grid grid-cols-4 gap-6">

//           <AnalyticsCard title="Visitors" value={summary.visitors} />
//           <AnalyticsCard title="Sessions" value={summary.sessions} />
//           <AnalyticsCard title="Page Views" value={summary.pageViews} />
//           <AnalyticsCard title="Events" value={summary.events} />

//         </div>

//       )}

//       {/* Session Metrics */}

//       {sessionStats && (

//         <div className="grid grid-cols-3 gap-6">

//           <AnalyticsCard
//             title="Avg Session Duration"
//             value={formatDuration(sessionStats.avgSessionDuration)}
//           />

//           <AnalyticsCard
//             title="Bounce Rate"
//             value={`${sessionStats.bounceRate}%`}
//           />

//           <AnalyticsCard
//             title="Pages / Session"
//             value={sessionStats.pagesPerSession}
//           />

//         </div>

//       )}

//       {/* Live Metrics */}

//       <div className="grid grid-cols-2 gap-6">

//         <LiveVisitorsCard count={liveVisitors} />

//         <LivePagesTable pages={livePages} />

//       </div>

//       {/* Traffic Chart */}

//       {trafficLoading ? (
//         <SkeletonChart />
//       ) : (
//         traffic && <TrafficChart data={traffic} />
//       )}

//       {/* Tables */}

//       <div className="grid grid-cols-2 gap-6">

//         {pages && <TopPagesTable pages={pages} />}

//         {topEvents && <TopEventsTable events={topEvents} />}

//       </div>

//       <div className="grid grid-cols-2 gap-6">

//         {referrers && <TopReferrersTable referrers={referrers} />}

//         {countries && <TopCountriesTable countries={countries} />}

//       </div>

//     </div>

//   );

// }

// export default DashboardPage;



import { useState } from "react";

import WebsiteSelector from "../../websites/components/WebsiteSelector";
import { useSelectedWebsite } from "../../websites/hooks/useSelectedWebsite";
import { getAccessToken } from "../../auth/store/authStore";
import {
  useAnalyticsSummary,
  useTrafficData
} from "../hooks/useAnalytics";

import { useLiveVisitors } from "../hooks/useLiveVisitors";
import { useLivePages } from "../hooks/useLivePages";

import AnalyticsCard from "../components/AnalyticsCard";
import SkeletonCard from "../components/SkeletonCard";
import SkeletonChart from "../components/SkeletonChart";

import TrafficChart from "../components/TrafficChart";
import LiveVisitorsCard from "../components/LiveVisitorsCard";
import LivePagesTable from "../components/LivePagesTable";
import { getPreferences } from "../../../shared/utils/preferences";

function DashboardPage() {

  const { selectedWebsite, isLoaded } = useSelectedWebsite();
  const trackingId = selectedWebsite?.trackingId;

  const token = getAccessToken();
  const [days, setDays] = useState(() => getPreferences().defaultDays);

  // Queries (safe because enabled: !!trackingId)
  const { data: summary, isLoading: summaryLoading } =
    useAnalyticsSummary(trackingId, days);

  const { data: traffic, isLoading: trafficLoading } =
    useTrafficData(trackingId, days);

  const liveVisitors = useLiveVisitors();
  const livePages = useLivePages();

  if (!isLoaded || !token) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <div className="text-sm text-gray-500">Loading dashboard...</div>
      </div>
    );
  }

  return (

    <div className="dashboard-page space-y-8 fade-page">

      {/* ✅ ALWAYS VISIBLE */}
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="page-eyebrow mb-2">Performance workspace</p>
          <h1 className="page-heading text-3xl font-bold">Analytics overview</h1>
          <p className="page-subtitle mt-2 text-sm">Understand how your digital properties are performing.</p>
        </div>
        <WebsiteSelector />
      </div>

      {/* 🚨 NO WEBSITE SELECTED */}
      {!trackingId ? (
        <div className="empty-state p-8 text-sm">
          Please select a website to view analytics
        </div>
      ) : (
        <>

          {/* Date Filter */}
          <div className="range-switcher">
            {[1, 7, 30].map((d) => (
              <button
                key={d}
                onClick={() => setDays(d)}
                className={`range-button rounded-md px-4 py-2 text-xs font-semibold
                ${days === d ? "range-button-active" : ""}`}
              >
                {d === 1 ? "Today" : `${d} Days`}
              </button>
            ))}
          </div>

          {/* Core Metrics */}
          {summaryLoading ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          ) : summary && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <AnalyticsCard title="Visitors" value={summary.visitors} />
              <AnalyticsCard title="Sessions" value={summary.sessions} />
              <AnalyticsCard title="Page Views" value={summary.pageViews} />
              <AnalyticsCard title="Events" value={summary.events} />
            </div>
          )}

          {/* Live Metrics */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <LiveVisitorsCard count={liveVisitors} />
            <LivePagesTable pages={livePages} />
          </div>

          {/* Traffic Chart */}
          {trafficLoading ? (
            <SkeletonChart />
          ) : (
            traffic && <TrafficChart data={traffic} />
          )}

        </>
      )}

    </div>
  );
}

export default DashboardPage;