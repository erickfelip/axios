import { useState, useEffect } from "react";
import { getPokemon } from "../src/services/api";

export function App() {
  const [pokemon, setPokemom] = useState([]);

  async function getPokemons() {
    const data = await getPokemon();
    setPokemom(data);
  }

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <h1>
      <ul>Lista de pokemons</ul>
      {pokemon.map(({ name }) => (
        <li key={name}>{name}</li>
      ))}
    </h1>
  );
}