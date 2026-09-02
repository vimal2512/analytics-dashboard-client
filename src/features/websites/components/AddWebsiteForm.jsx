import { useState } from "react";
import { useCreateWebsite } from "../hooks/useWebsites";

function AddWebsiteForm() {
    const[domain, setDomain] = useState("");
    const createWebsite = useCreateWebsite();

    const handleSubmit = (e) => {
        e.preventDefault();

        createWebsite.mutate({
            domain,
            userId: "user_1"
        });

        setDomain("")
    }
    return(
          <form action="" onSubmit={handleSubmit} className="data-panel mb-6 flex flex-wrap items-end gap-3 p-5">
              <div className="mr-auto">
                 <h2 className="panel-heading font-semibold">Connect a website</h2>
                 <p className="panel-meta mt-1">Start collecting data from a new property.</p>
              </div>

           <input 
            type="text"
            placeholder="example.com"
            className="rounded-md border bg-slate-50 px-3 py-2 text-sm outline-none focus:border-teal-700" 
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            />

                     <button className="rounded-md bg-teal-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-900">
                         Add website
           </button>
        </form>
    )
}

export default AddWebsiteForm;