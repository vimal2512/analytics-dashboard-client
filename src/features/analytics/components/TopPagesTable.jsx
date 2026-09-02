function TopPagesTable({ pages }) {

  if (!pages || pages.length === 0) {
    return (
      <div className="data-panel p-5">
        <h2 className="panel-heading mb-4 font-semibold">
          Top Pages
        </h2>

        <p className="panel-meta">
          No page data yet
        </p>
      </div>
    );
  }

  return (
    <div className="data-panel p-5">

      <h2 className="panel-heading mb-4 font-semibold">
        Top Pages
      </h2>

      <table className="w-full">

        <thead>
          <tr className="border-b">
            <th className="p-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Page</th>
            <th className="p-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Views</th>
          </tr>
        </thead>

        <tbody>

          {pages.map((page) => (
            <tr key={page.path} className="border-b">

              <td className="border-t p-2 text-sm text-slate-700">
                {page.path}
              </td>

              <td className="border-t p-2 text-sm font-semibold text-slate-800">
                {page.views}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TopPagesTable;