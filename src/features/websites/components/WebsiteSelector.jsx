import { useWebsites } from "../hooks/useWebsites";
import { useSelectedWebsite } from "../hooks/useSelectedWebsite";

function WebsiteSelector() {

  const { data, isLoading } = useWebsites();

  const { selectedWebsite, setSelectedWebsite } = useSelectedWebsite();

  const websites = data || [];

  if (isLoading) return <p className="text-xs text-slate-500">Loading workspace...</p>;

  return (

    <select
      className="site-select px-3 py-2 text-sm font-medium"
      value={selectedWebsite?._id || ""}
      onChange={(e) => {

        const site = websites.find(
          (w) => w._id === e.target.value
        );

        setSelectedWebsite(site);

      }}
    >

      <option value="">Select Website</option>

      {websites.map((site) => (
        <option key={site._id} value={site._id}>
          {site.domain}
        </option>
      ))}

    </select>

  );

}

export default WebsiteSelector;