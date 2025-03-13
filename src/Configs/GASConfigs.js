export const BASE_URL =
	"https://script.google.com/macros/s/AKfycbzZUQyEgqKvnG17bu8AnKJAr4GlOEP88LWp4ob74r6SCwYDlHq1k-5wvwnFY6Q6slSgqg/exec";

export function useGAS(route, id) {
	let url = BASE_URL + "?route=" + route;
	if (id) {
		url = url + "&id=" + id;
	}
	console.log(url);
	return url;
}
