import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { useWebsites, useUpdateWebsite } from "../hooks/useWebsites";
import WebsiteScript from "../components/WebsiteScript";

function WebsiteSettingsPage() {

  const { id } = useParams();

  const { data, isLoading } = useWebsites(id);
  const updateWebsite = useUpdateWebsite();

  const [form, setForm] = useState({
    timezone: "UTC",
    retentionDays: 30,
    isActive: true
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (data) {
      setForm({
        timezone: data.timezone || "UTC",
        retentionDays: data.retentionDays || 30,
        isActive: data.isActive ?? true
      });
    }
  }, [data]);

  const handleSave = () => {
    setSaved(false);

    updateWebsite.mutate(
      { id, data: form },
      {
        onSuccess:() => setSaved(true)
      }
    );
  };

  if (isLoading) {
    return <p className="text-gray-500">Loading settings...</p>;
  }

  return (

    <div className="max-w-4xl space-y-6">

      <h1 className="text-2xl font-bold">
        Website Settings
      </h1>

      {/* SETTINGS PANEL */}
      <div className="bg-white rounded-xl shadow p-6 space-y-4">

        <h2 className="text-lg font-semibold">
          General Settings
        </h2>

        {/* Domain */}
        <div>
          <label className="text-sm text-gray-500">Domain</label>
          <p className="font-medium">{data.domain}</p>
        </div>

        {/* Tracking ID */}
        <div>
          <label className="text-sm text-gray-500">Tracking ID</label>
          <p className="font-mono text-sm">{data.trackingId}</p>
        </div>

        {/* Timezone */}
        <div>
          <label className="text-sm text-gray-500">Timezone</label>
          <input
            className="border p-2 w-full rounded"
            value={form.timezone}
            onChange={(e) =>
              setForm({ ...form, timezone: e.target.value })
            }
          />
        </div>

        {/* Retention */}
        <div>
          <label className="text-sm text-gray-500">
            Data Retention (days)
          </label>
          <input
            type="number"
            className="border p-2 w-full rounded"
            value={form.retentionDays}
            onChange={(e) =>
              setForm({
                ...form,
                retentionDays: Number(e.target.value)
              })
            }
          />
        </div>

        {/* Enable Tracking */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={form.isActive}
            onChange={(e) =>
              setForm({ ...form, isActive: e.target.checked })
            }
          />
          <label>Enable Tracking</label>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="bg-black text-white px-4 py-2 rounded"
        >
          {updateWebsite.isPending ? "Saving..." : "Save Changes"}
        </button>

        {/* Success Message */}
        {saved && (
          <p className="text-green-600 text-sm">
            Settings updated successfully
          </p>
        )}

      </div>

      {/* TRACKING SCRIPT PANEL */}
      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-lg font-semibold mb-4">
          Install Tracking Script
        </h2>

        <WebsiteScript websiteId={id} />

      </div>

    </div>
  );
}

export default WebsiteSettingsPage;