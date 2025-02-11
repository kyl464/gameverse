// Fungsi helper untuk membuat header authorization
export function getAuthHeaders(apiKey) {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };
}

// Helper untuk handle fetch data
export async function fetchData(endpoint, options = {}) {
  try {
    const response = await fetch(endpoint, options);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
