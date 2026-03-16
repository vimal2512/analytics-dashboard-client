function WebsiteScript({ websiteId }) {

  const script = `
<script src="https://analytics-dashboard-server.onrender.com/socket.io/socket.io.js"></script>
<script src="https://analytics-dashboard-server.onrender.com/tracker.js"></script>
<script>
analytics.init("${websiteId}");
</script>
`;

  return (

    <div className="space-y-4">

      <p className="text-gray-600">
        Add this script before the closing &lt;/body&gt; tag of your website.
      </p>

      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
        {script}
      </pre>

    </div>

  );
}

export default WebsiteScript;