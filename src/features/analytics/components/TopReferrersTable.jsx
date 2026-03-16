function TopReferrersTable({ referrers }) {

  if (!referrers || referrers.length === 0) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm text-gray-500">
      No page data yet
    </div>
  );
}

  return (

    <div className="bg-white p-6 rounded-lg shadow">

      <h2 className="text-lg font-semibold mb-4">
        Top Referrers
      </h2>

      <table className="w-full">

        <thead>
          <tr>
            <th className="text-left">Source</th>
            <th className="text-right">Visits</th>
          </tr>
        </thead>

        <tbody>

          {referrers.map(r => (

            <tr key={r.source}>
              <td>{r.source}</td>
              <td className="text-right">{r.visits}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default TopReferrersTable;