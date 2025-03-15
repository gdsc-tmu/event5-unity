export const BASE_URL =
	"https://script.google.com/macros/s/AKfycbx9TwQzPuBkNDuCrLLl-bRfZb3Jj2fmM6NiGYjI7j8-CUPtMWTEEkbcTmM-diZdkfJwNw/exec";

export function useGAS(route, id) {
	let url = BASE_URL + "?route=" + route;
	if (id) {
		url = url + "&id=" + id;
	}
	return url;
}
