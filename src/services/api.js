import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?limit=200&offset=0",
});

export async function getPokemon(name) {
  try {
    const response = await api.get(`/pokemon/${name}`);
    return response.data.results;
  } catch (error) {}
}
