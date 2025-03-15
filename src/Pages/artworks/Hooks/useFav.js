import { useGAS } from "../../../Configs/GASConfigs";
import { useFetch } from "../../../Hooks/useFetch";

export async function useFav(id, mode) {
	mode == "increment"
		? await useFetch(useGAS("incrementArtworkFav", id))
		: await useFetch(useGAS("decrementArtworkFav", id));
}
