import { useContext } from "react";
import { WebsiteSelectionContext } from "../context/websiteSelectionContext";

export function useSelectedWebsite() {
  return useContext(WebsiteSelectionContext);
}