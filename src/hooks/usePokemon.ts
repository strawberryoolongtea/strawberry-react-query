import axios from "axios";
import { useQuery } from "react-query";

async function pokemonApi(id?: string) {
  return await axios.get(`https://pokeapi.co/api/v2/pokemon/${id || ""}`, {
    params: { limit: 151 },
  });
}

export default function usePokemon(id?: string) {
  return useQuery(id ? ["pokemon", id] : ["pokemon"], () => {
    return pokemonApi(id);
  });
}
