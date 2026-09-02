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

    <div className="data-panel overflow-hidden">

      <table className="w-full">

        <thead className="border-b bg-slate-50">
          <tr>
            <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Domain</th>
            <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Tracking ID</th>
            <th className="p-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-400">Actions</th>
          </tr>
        </thead>

        <tbody>

          {websites.map((site) => (

            <tr key={site._id} className="border-b">

              <td className="border-t p-4 text-sm font-semibold text-slate-700">{site.domain}</td>

              <td className="border-t p-4 font-mono text-xs text-slate-500">
                {site.trackingId}
              </td>

              <td className="space-x-4 border-t p-4 text-center">

                {/* Install Script */}
                <button
                  onClick={() => setSelectedTrackingId(site.trackingId)}
                  className="text-xs font-semibold text-teal-700 hover:text-teal-900"
                >
                  Install
                </button>

                {/* ✅ FIXED: Use trackingId instead of _id */}
                <button
                  onClick={() =>
                    navigate(`/websites/${site._id}/settings`)
                  }
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Settings
                </button>

                {/* Delete */}
                <button
                  onClick={() => deleteWebsite.mutate(site._id)}
                  className="text-xs font-semibold text-rose-600 hover:text-rose-800"
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