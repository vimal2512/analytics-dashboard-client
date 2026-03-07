import { createContext, useContext, useState } from "react";

const SelectedWebsiteContext = createContext();

export function SelectedWebsiteProvider({ children }) {

  const [selectedWebsite, setSelectedWebsite] = useState(null);

  return (
    <SelectedWebsiteContext.Provider
      value={{
        selectedWebsite,
        setSelectedWebsite
      }}
    >
      {children}
    </SelectedWebsiteContext.Provider>
  );

}

export function useSelectedWebsite() {
  return useContext(SelectedWebsiteContext);
}