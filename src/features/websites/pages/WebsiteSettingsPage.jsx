import { useParams } from "react-router-dom";
import WebsiteScript from "../components/WebsiteScript";

function WebsiteSettingsPage() {

  const { id } = useParams();

  return (

    <div className="max-w-4xl space-y-6">

      <h1 className="text-2xl font-bold">
        Website Settings
      </h1>

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