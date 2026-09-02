const PREFERENCES_KEY = "pulseboard_preferences";

const defaultPreferences = {
  defaultDays: 7,
  timezone: "UTC",
  defaultWebsiteId: ""
};

export function getPreferences() {
  try {
    const saved = JSON.parse(localStorage.getItem(PREFERENCES_KEY));
    return { ...defaultPreferences, ...(saved || {}) };
  } catch {
    return defaultPreferences;
  }
}

export function savePreferences(preferences) {
  localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences));
}
