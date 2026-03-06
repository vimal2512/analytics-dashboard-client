const pages = [
  { path: "/", views: 340 },
  { path: "/pricing", views: 210 },
  { path: "/blog", views: 180 }
];

function TopPagesTable() {
  return (
    <div className="bg-white rounded shadow p-6">

      <h2 className="font-bold mb-4">
        Top Pages
      </h2>

      <table className="w-full">

        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Page</th>
            <th className="text-left p-2">Views</th>
          </tr>
        </thead>

        <tbody>
          {pages.map((page) => (
            <tr key={page.path} className="border-b">

              <td className="p-2">{page.path}</td>
              <td className="p-2">{page.views}</td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default TopPagesTable;