function TopReferrersTable({ referrers }) {

  if (!referrers || referrers.length === 0) {
  return (
    <div className="empty-state p-6 text-sm">
      No page data yet
    </div>
  );
}

  return (

    <div className="data-panel p-5">

      <h2 className="panel-heading mb-4 font-semibold">
        Top Referrers
      </h2>

      <table className="w-full">

        <thead>
          <tr>
            <th className="p-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Source</th>
            <th className="p-2 text-right text-xs font-semibold uppercase tracking-wider text-slate-400">Visits</th>
          </tr>
        </thead>

        <tbody>

          {referrers.map(r => (

            <tr key={r.source}>
              <td className="border-t p-2 text-sm text-slate-700">{r.source}</td>
              <td className="border-t p-2 text-right text-sm font-semibold text-slate-800">{r.visits}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default TopReferrersTable;