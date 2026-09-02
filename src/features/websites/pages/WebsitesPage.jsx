import AddWebsiteForm from "../components/AddWebsiteForm";
import WebsiteTable from "../components/WebsitesTable";

function WebsitesPage() {
    return(
        <div className="dashboard-page space-y-6 fade-page">
            <div>
                <p className="page-eyebrow mb-2">Workspace assets</p>
                <h1 className="page-heading text-3xl font-bold">Websites</h1>
                <p className="page-subtitle mt-2 text-sm">Manage the properties connected to your analytics workspace.</p>
            </div>
            
            <AddWebsiteForm/>

            <WebsiteTable/>
        </div>
    )
}

export default WebsitesPage;