import { useWebsites } from "../hooks/useWebsites";
import { useSelectedWebsite } from "../context/SelectedWebsiteContext";

function WebsiteSelector() {

  const { data, isLoading } = useWebsites();

  const { selectedWebsite, setSelectedWebsite } = useSelectedWebsite();

  const websites = data || [];

  if (isLoading) return <p>Loading websites...</p>;

  return (

    <select
      className="border p-2 rounded"
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