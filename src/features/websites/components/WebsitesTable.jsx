import { useState } from "react";
import { useWebsites, useDeleteWebsite } from "../hooks/useWebsites";
import TrackingScriptModal from "./TrackingScriptModal";

function WebsiteTable() {
    
    
    const { data, isLoading } = useWebsites();
    console.log("websites data:", data);
    const deleteWebsite = useDeleteWebsite();

    const [selectedTrackingId, setSelectedTrackingId] = useState(null);

    if(isLoading) return <p>Loading...</p>

    const websites = data || [];

    return(
       
    <div>
              <table className="w-full bg-white rounded shadow">
    <thead>
      <tr className="border-b">
        <th className="p-3 text-left">Domain</th>
        <th className="p-3 text-left">Tracking ID</th>
        <th className="p-3 text-center">Actions</th>
      </tr>
    </thead>

    <tbody>
      {websites.map((site) => (
        <tr key={site._id} className="border-b">

          <td className="p-3">{site.domain}</td>

          <td className="p-3 font-mono text-sm">
            {site.trackingId}
          </td>

          <td className="p-3 text-center">

            <button
              onClick={() => setSelectedTrackingId(site.trackingId)}
              className="text-blue-600 mr-4"
            >
              Install
            </button>

            <button
              onClick={() => deleteWebsite.mutate(site._id)}
              className="text-red-600"
            >
              Delete
            </button>

          </td>

        </tr>
      ))}
    </tbody>
  </table>

  {selectedTrackingId && (
    <TrackingScriptModal
      trackingId={selectedTrackingId}
      onClose={() => setSelectedTrackingId(null)}
    />
  )}

</div>
         
    )
}

export default WebsiteTable;