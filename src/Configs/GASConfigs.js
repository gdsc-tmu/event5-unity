export const BASE_URL =
	"https://script.google.com/macros/s/AKfycby5hFs4fZkhL0P82CCPJ_jkG72fhr7_rb2lYEGMRLpxsxXeMYpa3SV3Z12Y45pNYBiD6Q/exec";

export function useGAS(route, id) {
	let url = BASE_URL + "?route=" + route;
	if (id) {
		url = url + "&id=" + id;
	}
	return url;
}
