function SkeletonChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
      <div className="h-64 bg-gray-200 rounded"></div>
    </div>
  );
}

export default SkeletonChart;