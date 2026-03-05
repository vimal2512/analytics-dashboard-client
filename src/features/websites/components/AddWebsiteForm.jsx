import { useState } from "react";
import { useCreateWebsite } from "../hooks/useWebsites";

function AddWebsiteForm() {
    const[domain, setDomain] = useState("");
    const createWebsite = useCreateWebsite();

    const handleSubmit = (e) => {
        e.preventDefault();

        createWebsite.mutate({
            domain
        });

        setDomain("")
    }
    return(
        <form action="" onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
           <h2 className="text-lg font-semibold mb-3">Add Website</h2>

           <input 
            type="text"
            placeholder="example.com"
            className="border p-2 mr-2" 
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            />

           <button className="bg-gray-900 text-white px-4 py-2 rounded">
             Add
           </button>
        </form>
    )
}

export default AddWebsiteForm;