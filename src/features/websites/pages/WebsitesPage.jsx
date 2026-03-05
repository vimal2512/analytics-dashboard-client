import AddWebsiteForm from "../components/AddWebsiteForm";
import WebsiteTable from "../components/WebsitesTable";

function WebsitesPage() {
    return(
        <div>
            <h1 className="text-2xl font-bold mb-6">Websites</h1>
            
            <AddWebsiteForm/>

            <WebsiteTable/>
        </div>
    )
}

export default WebsitesPage;