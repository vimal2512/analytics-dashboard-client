function LiveVisitorsCard({ count }) {

  return (
    <div className="data-panel p-5">

      <div className="flex items-center gap-2">
        <span className="live-indicator" />
        <h3 className="metric-label">Live visitors</h3>
      </div>

      <p className="metric-value mt-4 text-4xl font-bold">
        {count}
      </p>
      <p className="panel-meta mt-1">Active across your properties</p>

    </div>
  );

}

export default LiveVisitorsCard;