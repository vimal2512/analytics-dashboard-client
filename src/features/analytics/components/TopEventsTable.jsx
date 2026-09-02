function TopEventsTable({ events }) {

  if (!events || events.length === 0) {
  return (
    <div className="empty-state p-6 text-sm">
      No Events data yet
    </div>
  );
}

  return (

    <div className="data-panel p-5">

      <h2 className="panel-heading mb-4 font-semibold">
        Top Events
      </h2>

      <table className="w-full">

        <thead>
          <tr>
            <th className="p-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Event</th>
            <th className="p-2 text-right text-xs font-semibold uppercase tracking-wider text-slate-400">Count</th>
          </tr>
        </thead>

        <tbody>

          {events.map(e => (

            <tr key={e.event}>

              <td className="border-t p-2 text-sm text-slate-700">{e.event}</td>

              <td className="border-t p-2 text-right text-sm font-semibold text-slate-800">{e.count}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default TopEventsTable;