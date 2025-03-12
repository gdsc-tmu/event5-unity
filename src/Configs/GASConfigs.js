export const BASE_URL =
	"https://script.google.com/macros/s/AKfycbyjibC9Ff-BEB8JD-YlLmGjtoJwFm1xywB7_pFk8hQTpWlrl8Nei8fhpIBKDTr4ryESaw/exec";

export function useGAS(route, id) {
	let url = BASE_URL + "?route=" + route;
	if (id) {
		url = url + "&id=" + id;
	}
	console.log(url);
	return url;
}
