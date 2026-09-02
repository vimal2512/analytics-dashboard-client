function TopCountriesTable({ countries }) {

  if (!countries || countries.length === 0) {
  return (
    <div className="empty-state p-6 text-sm">
      No page data yet
    </div>
  );
}

  return (

    <div className="data-panel p-5">

      <h2 className="panel-heading mb-4 font-semibold">
        Top Countries
      </h2>

      <table className="w-full">

        <thead>
          <tr>
            <th className="p-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Country</th>
            <th className="p-2 text-right text-xs font-semibold uppercase tracking-wider text-slate-400">Visits</th>
          </tr>
        </thead>

        <tbody>

          {countries.map(c => (

            <tr key={c.country}>
              <td className="border-t p-2 text-sm text-slate-700">{c.country}</td>
              <td className="border-t p-2 text-right text-sm font-semibold text-slate-800">{c.visits}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default TopCountriesTable;