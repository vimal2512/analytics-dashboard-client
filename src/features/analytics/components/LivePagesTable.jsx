function LivePagesTable({ pages }) {

  if (!pages.length) {
    return null;
  }

  return (

    <div className="bg-white rounded shadow p-6">

      <h2 className="font-bold mb-4">
        Active Pages
      </h2>

      <table className="w-full">

        <thead>
          <tr>
            <th className="text-left p-2">Page</th>
            <th className="text-left p-2">Users</th>
          </tr>
        </thead>

        <tbody>

          {pages.map((p) => (
            <tr key={p.page}>
              <td className="p-2">{p.page}</td>
              <td className="p-2">{p.users}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>

  );

}

export default LivePagesTable;