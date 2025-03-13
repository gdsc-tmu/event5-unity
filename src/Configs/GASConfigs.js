export const BASE_URL =
	"https://script.google.com/macros/s/AKfycbyiCFi5t_QlSGTHO8FiX3rCCpH-ttmvYycN9D_-Y4krCaV8azvGHrB8FLQDWQhCMcF8/exec";

export function useGAS(route, id) {
	let url = BASE_URL + "?route=" + route;
	if (id) {
		url = url + "&id=" + id;
	}
	console.log(url);
	return url;
}
