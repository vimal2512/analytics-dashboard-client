import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWebsites, useDeleteWebsite } from "../hooks/useWebsites";
import TrackingScriptModal from "./TrackingScriptModal";

function WebsitesTable() {

  const { data, isLoading } = useWebsites();
  const deleteWebsite = useDeleteWebsite();
  const navigate = useNavigate();

  const [selectedTrackingId, setSelectedTrackingId] = useState(null);

  if (isLoading) return <p>Loading...</p>;

  const websites = data || [];

  return (

    <div className="bg-white rounded-xl shadow">

      <table className="w-full">

        <thead className="border-b bg-gray-50">
          <tr>
            <th className="p-4 text-left">Domain</th>
            <th className="p-4 text-left">Tracking ID</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>

          {websites.map((site) => (

            <tr key={site._id} className="border-b">

              <td className="p-4">{site.domain}</td>

              <td className="p-4 font-mono text-sm">
                {site.trackingId}
              </td>

              <td className="p-4 text-center space-x-4">

                <button
                  onClick={() => setSelectedTrackingId(site.trackingId)}
                  className="text-blue-600 hover:underline"
                >
                  Install
                </button>

                <button
                  onClick={() => navigate(`/websites/${site._id}/settings`)}
                  className="text-gray-700 hover:underline"
                >
                  Settings
                </button>

                <button
                  onClick={() => deleteWebsite.mutate(site._id)}
                  className="text-red-600 hover:underline"
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

  );
}

export default WebsitesTable;