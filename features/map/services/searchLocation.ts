export async function searchLocation(query: string) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`
  );

  if (!response.ok) {
    throw new Error("Failed to search location");
  }

  return response.json();
}
