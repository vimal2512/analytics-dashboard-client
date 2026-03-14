function LiveVisitorsCard({ count }) {

  return (
    <div className="bg-white p-6 rounded shadow">

      <h3 className="text-sm text-gray-500">
        Live Visitors
      </h3>

      <p className="text-3xl font-bold">
        {count}
      </p>

    </div>
  );

}

export default LiveVisitorsCard;