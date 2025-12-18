const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token") || "Bearer test"}`,
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error("API Error");
  }

  if (response.status === 204) {
    return true;
  }

  return response.json();
};
