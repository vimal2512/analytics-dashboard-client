import { useState } from "react";

function TrackingScriptModal ({trackingId, onClose}) {

    const script = `<script src="https://analytics.yourapp.com/tracker.js"></script>

    <script>
    analytics.init("${trackingId})
    </script>`;

   

    const [copied, setCopied] = useState(false);

    const copyScript = () => {
        navigator.clipboard.writeText(script);
        setCopied(true)

        setTimeout(() => setCopied(false), 2000)
    }

    return(
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded w-[600px]">

            <h2 className="text-xl font-bold mb-4">
                Install Tracking Script
            </h2>

            <p className="mb-4 text-gray-600">
                Copy and paste this script inside your website &lt;head&gt; tag.
            </p>

            <textarea
               readOnly
               value={script}
               className="w-full h-32 border p-2 font-mono text-sm"
            />

            <div className="flex justify-between mt-4">

                <button 
                  onClick={copyScript}
                  className="bg-gray-900 text-white px-4 py-2 rounded"
                >
                  {copied ? "copied!" : "Copy Script"}
                </button>

                <button
                  onClick={onClose}
                  className="border px-4 py-2 rounded"
                >
                    Close
                </button>
            </div>
          </div>
        </div>
    )
}

export default TrackingScriptModal;