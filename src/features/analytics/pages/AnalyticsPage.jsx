import { useState } from "react";
import WebsiteSelector from "../../websites/components/WebsiteSelector";
import { useSelectedWebsite } from "../../websites/hooks/useSelectedWebsite";
import { getAccessToken } from "../../auth/store/authStore";
import {
  useAnalyticsSummary,
  useTrafficData,
  useTopPages,
  useTopEvents,
  useTopReferrers,
  useTopCountries,
  useSessionAnalytics
} from "../hooks/useAnalytics";
import { formatDuration } from "../utils/formatDuration";
import AnalyticsCard from "../components/AnalyticsCard";
import SkeletonCard from "../components/SkeletonCard";
import SkeletonChart from "../components/SkeletonChart";
import TrafficChart from "../components/TrafficChart";
import TopPagesTable from "../components/TopPagesTable";
import TopEventsTable from "../components/TopEventsTable";
import TopReferrersTable from "../components/TopReferrersTable";
import TopCountriesTable from "../components/TopCountriesTable";
import { getPreferences } from "../../../shared/utils/preferences";

function AnalyticsPage() {
  const { selectedWebsite, isLoaded } = useSelectedWebsite();
  const trackingId = selectedWebsite?.trackingId;
  const token = getAccessToken();
  const [days, setDays] = useState(() => getPreferences().defaultDays);

  const { data: summary, isLoading: summaryLoading } = useAnalyticsSummary(trackingId, days);
  const { data: traffic, isLoading: trafficLoading } = useTrafficData(trackingId, days);
  const { data: pages } = useTopPages(trackingId, days);
  const { data: topEvents } = useTopEvents(trackingId, days);
  const { data: referrers } = useTopReferrers(trackingId, days);
  const { data: countries } = useTopCountries(trackingId, days);
  const { data: sessionStats } = useSessionAnalytics(trackingId, days);

  if (!isLoaded || !token) {
    return <div className="flex min-h-[200px] items-center justify-center text-sm text-slate-500">Loading analytics...</div>;
  }

  return (
    <div className="dashboard-page space-y-8 fade-page">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="page-eyebrow mb-2">Detailed reporting</p>
          <h1 className="page-heading text-3xl font-bold">Analytics</h1>
          <p className="page-subtitle mt-2 text-sm">Explore the sources, behaviors, and patterns behind your traffic.</p>
        </div>
        <WebsiteSelector />
      </div>

      {!trackingId ? (
        <div className="empty-state p-8 text-sm">Please select a website to explore analytics</div>
      ) : (
        <>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="panel-heading font-semibold">Reporting period</p>
              <p className="panel-meta mt-1">Compare performance across your selected window.</p>
            </div>
            <div className="range-switcher">
              {[1, 7, 30].map((period) => (
                <button
                  key={period}
                  onClick={() => setDays(period)}
                  className={`range-button rounded-md px-4 py-2 text-xs font-semibold ${days === period ? "range-button-active" : ""}`}
                >
                  {period === 1 ? "Today" : `${period} Days`}
                </button>
              ))}
            </div>
          </div>

          {summaryLoading ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"><SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard /></div>
          ) : summary && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <AnalyticsCard title="Visitors" value={summary.visitors} />
              <AnalyticsCard title="Sessions" value={summary.sessions} />
              <AnalyticsCard title="Page views" value={summary.pageViews} />
              <AnalyticsCard title="Events" value={summary.events} />
            </div>
          )}

          {sessionStats && (
            <div>
              <div className="mb-4"><h2 className="panel-heading font-semibold">Session quality</h2><p className="panel-meta mt-1">How visitors move through your properties.</p></div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <AnalyticsCard title="Avg session duration" value={formatDuration(sessionStats.avgSessionDuration)} />
                <AnalyticsCard title="Bounce rate" value={`${sessionStats.bounceRate}%`} />
                <AnalyticsCard title="Pages / session" value={sessionStats.pagesPerSession} />
              </div>
            </div>
          )}

          {trafficLoading ? <SkeletonChart /> : traffic && <TrafficChart data={traffic} />}

          <div>
            <div className="mb-4"><h2 className="panel-heading font-semibold">Content and acquisition</h2><p className="panel-meta mt-1">The pages, events, sources, and regions driving activity.</p></div>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {pages?.length > 0 ? <TopPagesTable pages={pages} /> : <div className="empty-state p-6 text-sm">No page data</div>}
              {topEvents?.length > 0 ? <TopEventsTable events={topEvents} /> : <div className="empty-state p-6 text-sm">No event data</div>}
              {referrers?.length > 0 ? <TopReferrersTable referrers={referrers} /> : <div className="empty-state p-6 text-sm">No referrer data</div>}
              {countries?.length > 0 ? <TopCountriesTable countries={countries} /> : <div className="empty-state p-6 text-sm">No country data</div>}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AnalyticsPage;