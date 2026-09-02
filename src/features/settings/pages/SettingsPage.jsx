import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWebsites } from "../../websites/hooks/useWebsites";
import { useSelectedWebsite } from "../../websites/hooks/useSelectedWebsite";
import { clearAccessToken } from "../../auth/store/authStore";
import { getPreferences, savePreferences } from "../../../shared/utils/preferences";
import apiClient from "../../../infrastructure/api/apiClient";

function SettingsPage() {
  const navigate = useNavigate();
  const { data: websites, isLoading } = useWebsites();
  const { selectedWebsite, setSelectedWebsite } = useSelectedWebsite();
  const [preferences, setPreferences] = useState(() => {
    const savedPreferences = getPreferences();

    return savedPreferences.defaultWebsiteId || !selectedWebsite?._id
      ? savedPreferences
      : { ...savedPreferences, defaultWebsiteId: selectedWebsite._id };
  });
  const [saved, setSaved] = useState(false);

  const handleSave = (event) => {
    event.preventDefault();
    savePreferences(preferences);

    const defaultWebsite = websites?.find(
      (website) => website._id === preferences.defaultWebsiteId
    );

    if (defaultWebsite) setSelectedWebsite(defaultWebsite);

    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  };

  const handleLogout = async () => {
    try {
      await apiClient.post("/auth/logout");
    } finally {
      clearAccessToken();
      navigate("/login");
    }
  };

  return (
    <div className="dashboard-page space-y-6 fade-page">
      <div>
        <p className="page-eyebrow mb-2">Workspace control</p>
        <h1 className="page-heading text-3xl font-bold">Settings</h1>
        <p className="page-subtitle mt-2 text-sm">Configure how Pulseboard presents and collects your analytics.</p>
      </div>

      <form onSubmit={handleSave} className="data-panel max-w-3xl p-6">
        <div className="mb-6 border-b pb-5">
          <h2 className="panel-heading font-semibold">Workspace preferences</h2>
          <p className="panel-meta mt-1">These preferences apply to your dashboard view.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="metric-label">Default website</span>
            <select
              value={preferences.defaultWebsiteId}
              onChange={(event) => setPreferences({ ...preferences, defaultWebsiteId: event.target.value })}
              disabled={isLoading}
              className="site-select mt-2 w-full px-3 py-2 text-sm"
            >
              <option value="">Select a website</option>
              {(websites || []).map((website) => (
                <option key={website._id} value={website._id}>{website.domain}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="metric-label">Default reporting period</span>
            <select
              value={preferences.defaultDays}
              onChange={(event) => setPreferences({ ...preferences, defaultDays: Number(event.target.value) })}
              className="site-select mt-2 w-full px-3 py-2 text-sm"
            >
              <option value={1}>Today</option>
              <option value={7}>Last 7 days</option>
              <option value={30}>Last 30 days</option>
            </select>
          </label>

          <label className="block sm:col-span-2">
            <span className="metric-label">Workspace timezone</span>
            <select
              value={preferences.timezone}
              onChange={(event) => setPreferences({ ...preferences, timezone: event.target.value })}
              className="site-select mt-2 w-full px-3 py-2 text-sm"
            >
              <option value="UTC">UTC</option>
              <option value="America/New_York">Eastern Time</option>
              <option value="America/Chicago">Central Time</option>
              <option value="America/Denver">Mountain Time</option>
              <option value="America/Los_Angeles">Pacific Time</option>
              <option value="Europe/London">London</option>
              <option value="Asia/Kolkata">India</option>
              <option value="Asia/Singapore">Singapore</option>
            </select>
          </label>
        </div>

        <div className="mt-6 flex items-center gap-4 border-t pt-5">
          <button type="submit" className="rounded-md bg-teal-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-900">
            Save preferences
          </button>
          {saved && <span className="text-sm font-medium text-teal-700">Preferences saved</span>}
        </div>
      </form>

      <section className="data-panel max-w-3xl p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="panel-heading font-semibold">Account access</h2>
            <p className="panel-meta mt-1">End this session on the current device.</p>
          </div>
          <button type="button" onClick={handleLogout} className="rounded-md border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-50">
            Log out
          </button>
        </div>
      </section>
    </div>
  );
}
export default SettingsPage;