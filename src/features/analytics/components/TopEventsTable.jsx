function TopEventsTable({ events }) {

  return (

    <div className="bg-white p-6 rounded-lg shadow">

      <h2 className="text-lg font-semibold mb-4">
        Top Events
      </h2>

      <table className="w-full">

        <thead>
          <tr>
            <th className="text-left">Event</th>
            <th className="text-right">Count</th>
          </tr>
        </thead>

        <tbody>

          {events.map(e => (

            <tr key={e.event}>

              <td>{e.event}</td>

              <td className="text-right">{e.count}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default TopEventsTable;