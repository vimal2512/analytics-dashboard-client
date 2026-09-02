import { useState, useEffect } from "react";
import { useWebsites } from "../hooks/useWebsites";
import { WebsiteSelectionContext } from "./websiteSelectionContext";

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
    ? websites.find((website) => website.trackingId === selectedWebsite?.trackingId) || websites[0] || null
    : null;

  useEffect(() => {
    if (effectiveSelectedWebsite) {
      localStorage.setItem("selectedWebsite", JSON.stringify(effectiveSelectedWebsite));
    } else if (websites) {
      localStorage.removeItem("selectedWebsite");
    }
  }, [effectiveSelectedWebsite, websites]);

  return (
    <WebsiteSelectionContext.Provider
      value={{ selectedWebsite: effectiveSelectedWebsite, setSelectedWebsite, isLoaded: true }}
    >
      {children}
    </WebsiteSelectionContext.Provider>
  );
}
