export function useDate(d) {
	const date = new Date(d);
	return `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${(
		"0" + date.getMinutes()
	).slice(-2)}`;
}
