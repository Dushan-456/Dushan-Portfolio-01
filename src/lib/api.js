const baseUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, "") || "";

async function request(path, options = {}) {
  const url = `${baseUrl}${path}`;
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(
      `API ${response.status}: ${errorText || response.statusText}`
    );
  }

  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return response.json();
  }
  return response.text();
}

export function getProfile() {
  return request("/api/profile");
}

export function getProjects() {
  return request("/api/projects");
}

export function sendContact(payload) {
  return request("/api/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export { baseUrl };
