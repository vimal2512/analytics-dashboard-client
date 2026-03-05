let websites = [];

function generateTrackingId() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let id = "trk_";

  for (let i = 0; i < 10; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }

  return id;
}

export async function getWebsites() {
  await new Promise((resolve) => setTimeout(resolve, 500)); // simulate network
  return websites;
}

export async function createWebsite(data) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const newWebsite = {
    _id: crypto.randomUUID(),
    domain: data.domain,
    trackingId: generateTrackingId(),
    createdAt: new Date()
  };

  websites.push(newWebsite);

  return newWebsite;
}

export async function deleteWebsite(id) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  websites = websites.filter((site) => site._id !== id);

  return { success: true };
}