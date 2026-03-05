import { useWebsites, useDeleteWebsite } from "../hooks/useWebsites";

function WebsiteTable() {
    const { data, isLoading } = useWebsites();
    const deleteWebsite = useDeleteWebsite();

    if(isLoading) return <p>Loading...</p>

    const websites = data || [];

    return(
       
            <table className="w-full bg-white rounded shadow">
                <thead>
                    <tr className="border-b">
                        <th className="p-3 text-left">Domain</th>
                        <th className="p-3 text-left">Tracking ID</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>

                <tbody>
                   {websites.map((site) => (
                    <tr key={site._id} className="border-b">
                        <td className="p-3">{site.domain}</td>
                        <td className="p-3">{site.trackingId}</td>

                        <td className="p-3 text-center">
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
        
    )
}

export default WebsiteTable;