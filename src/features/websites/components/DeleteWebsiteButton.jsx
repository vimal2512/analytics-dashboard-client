import { deleteWebsite } from "../services/websitesApi";

function DeleteWebsiteButton({ id }) {

  const handleDelete = async () => {

    if (!confirm("Delete this website?")) return;

    await deleteWebsite(id);

    window.location.href = "/websites";

  };

  return (

    <div className="bg-red-50 border border-red-200 p-6 rounded-xl">

      <p className="text-red-600 font-semibold mb-3">
        Danger Zone
      </p>

      <button
        onClick={handleDelete}
        className="px-4 py-2 bg-red-600 text-white rounded"
      >
        Delete Website
      </button>

    </div>

  );

}

export default DeleteWebsiteButton;