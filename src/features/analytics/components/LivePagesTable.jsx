function LivePagesTable({ pages }) {

  if (!pages.length) {
    return null;
  }

  return (

    <div className="data-panel p-5">

      <div className="mb-4 flex items-center justify-between">
        <h2 className="panel-heading font-semibold">Active pages</h2>
        <span className="panel-meta">Live now</span>
      </div>

      <table className="w-full text-sm">

        <thead>
          <tr>
            <th className="p-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Page</th>
            <th className="p-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Users</th>
          </tr>
        </thead>

        <tbody>

          {pages.map((p) => (
            <tr key={p.page}>
              <td className="border-t p-2 text-slate-700">{p.page}</td>
              <td className="border-t p-2 font-semibold text-slate-800">{p.users}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>

  );

}

export default LivePagesTable;