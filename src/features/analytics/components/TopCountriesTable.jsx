function TopCountriesTable({ countries }) {

  return (

    <div className="bg-white p-6 rounded shadow">

      <h2 className="font-bold mb-4">
        Top Countries
      </h2>

      <table className="w-full">

        <thead>
          <tr>
            <th className="text-left">Country</th>
            <th className="text-right">Visits</th>
          </tr>
        </thead>

        <tbody>

          {countries.map(c => (

            <tr key={c.country}>
              <td>{c.country}</td>
              <td className="text-right">{c.visits}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default TopCountriesTable;