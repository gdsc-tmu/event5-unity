export const BASE_URL =
	"https://script.google.com/macros/s/AKfycbyeuRHlmi_VnkroeddGOyCoq7oS2E_yP-xhoh6PZv8_AozBohc6Zs4MAPMl9C4GDMElYw/exec";

export function useGAS(route, id) {
	let url = BASE_URL + "?route=" + route;
	if (id) {
		url = url + "&id=" + id;
	}
	return url;
}
