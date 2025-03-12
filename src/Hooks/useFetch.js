export async function useFetch(url) {
	const response = await fetch(url, { method: "GET", redirect: "follow" });
	const data = await response.json();
	return data;
}
