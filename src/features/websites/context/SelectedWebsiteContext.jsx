// import { createContext, useContext, useState } from "react";

// const SelectedWebsiteContext = createContext();

// export function SelectedWebsiteProvider({ children }) {

//   const [selectedWebsite, setSelectedWebsite] = useState(null);

//   return (
//     <SelectedWebsiteContext.Provider
//       value={{
//         selectedWebsite,
//         setSelectedWebsite
//       }}
//     >
//       {children}
//     </SelectedWebsiteContext.Provider>
//   );

// }

// export function useSelectedWebsite() {
//   return useContext(SelectedWebsiteContext);
// }




// import { createContext, useContext, useState, useEffect } from "react";

// const SelectedWebsiteContext = createContext();

// export function SelectedWebsiteProvider({ children }) {

//   const [selectedWebsite, setSelectedWebsite] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false); // 🔥 important

//   // ✅ LOAD SAFELY
//   useEffect(() => {
//     try {
//       const saved = localStorage.getItem("selectedWebsite");

//       if (saved) {
//         setSelectedWebsite(JSON.parse(saved));
//       }
//     } catch (err) {
//       console.error("LocalStorage parse error:", err);
//     } finally {
//       setIsLoaded(true);
//     }
//   }, []);

//   // ✅ SAVE SAFELY
//   useEffect(() => {
//     if (selectedWebsite) {
//       localStorage.setItem(
//         "selectedWebsite",
//         JSON.stringify(selectedWebsite)
//       );
//     }
//   }, [selectedWebsite]);

//   return (
//     <SelectedWebsiteContext.Provider
//       value={{
//         selectedWebsite,
//         setSelectedWebsite,
//         isLoaded // 🔥 expose this
//       }}
//     >
//       {children}
//     </SelectedWebsiteContext.Provider>
//   );
// }

// export function useSelectedWebsite() {
//   return useContext(SelectedWebsiteContext);
// }



import { useState, useEffect } from "react";
import { useWebsites } from "../hooks/useWebsites";
import { SelectedWebsiteContext } from "./selectedWebsiteContext";

export function SelectedWebsiteProvider({ children }) {

  const [selectedWebsite, setSelectedWebsite] = useState(() => {
    try {
      const saved = localStorage.getItem("selectedWebsite");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const { data: websites } = useWebsites();

  const effectiveSelectedWebsite = websites
    ? websites.find(
      (website) => website.trackingId === selectedWebsite?.trackingId
    ) || websites[0] || null
    : null;

  // 🔥 SAVE
  useEffect(() => {
    if (effectiveSelectedWebsite) {
      localStorage.setItem(
        "selectedWebsite",
        JSON.stringify(effectiveSelectedWebsite)
      );
    } else if (websites) {
      localStorage.removeItem("selectedWebsite");
    }
  }, [effectiveSelectedWebsite, websites]);

  return (
    <SelectedWebsiteContext.Provider
      value={{
        selectedWebsite: effectiveSelectedWebsite,
        setSelectedWebsite,
        isLoaded: true
      }}
    >
      {children}
    </SelectedWebsiteContext.Provider>
  );
}

