import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./PokemonList.css";

function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8001/pokemon");
        const allPokemon = response.data;

        const pokemonWithImages = allPokemon.filter((pokemon) =>
          [1, 2, 4, 7, 10, 17, 19, 21, 23, 26, 28, 30].includes(pokemon.id)
        );

        setPokemonData(pokemonWithImages);
      } catch (error) {
        console.error(`Error fetching Pokémon data: ${error}`);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pokemon-list">
      <h2 className="main-title">Choose Your Pokémon</h2>
      <ul className="pokemon-list">
        {pokemonData.map((pokemon) => (
          <li key={pokemon._id} className="pokemon-item">
            <span className="pokemon-name">{pokemon.name.english}</span>
            <Link to={`/battle/${pokemon.id}`}>
              {" "}
              <img
                className="pokemon-img"
                src={pokemon.image_url}
                alt={pokemon.name.english}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
