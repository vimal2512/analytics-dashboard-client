const STORAGE_KEY = "mock_websites";

function loadWebsites() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function saveWebsites(websites) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(websites));
}

function generateTrackingId() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let id = "trk_";

  for (let i = 0; i < 10; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }

  return id;
}

export async function getWebsites() {

  await new Promise((r) => setTimeout(r, 300));

  return loadWebsites();
}

export async function createWebsite(data) {

  await new Promise((r) => setTimeout(r, 300));

  const websites = loadWebsites();

  const newWebsite = {
    _id: crypto.randomUUID(),
    domain: data.domain,
    trackingId: generateTrackingId(),
    createdAt: new Date()
  };

  websites.push(newWebsite);

  saveWebsites(websites);

  return newWebsite;
}

export async function deleteWebsite(id) {

  await new Promise((r) => setTimeout(r, 300));

  const websites = loadWebsites().filter((site) => site._id !== id);

  saveWebsites(websites);

  return { success: true };
}