

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Battle() {
  const { id } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [opponentPokemon, setOpponentPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8001/pokemon/${id}`);
        setSelectedPokemon(response.data);
      } catch (errorPokemon) {
        console.error(
          `Error fetching data for Pokémon with ID ${id}: ${errorPokemon}`
        );
      }
    };

    fetchData();
  }, [id]);

  const selectRandomOpponent = (availablePokemon) => {
    const randomIndex = Math.floor(Math.random() * availablePokemon.length);
    return availablePokemon[randomIndex];
  };

  useEffect(() => {
    const fetchOpponentData = async () => {
      try {
        const response = await axios.get("http://localhost:8001/pokemon");
        const allPokemon = response.data;

        const newPokemon = allPokemon.filter((pokemon) =>
          [1, 2, 4, 7, 10, 17, 19, 21, 23, 26, 28, 30].includes(pokemon.id)
        );

        const randomOpponent = selectRandomOpponent(newPokemon);

        setOpponentPokemon(randomOpponent);
      } catch (error) {
        console.error(`Error fetching data for the random opponent: ${error}`);
      }
    };

    fetchOpponentData();
  }, []);
  return (
    <div>
      <h2>Battle Page</h2>
      {selectedPokemon && opponentPokemon ? (
        <div>
          <div>
            <h3 className="pokemon-name-battle">
              {selectedPokemon.name.english}
            </h3>
            <img
              className="pokemon-img"
              src={selectedPokemon.image_url}
              alt={selectedPokemon.name.english}
            />

            <div>
              <p>HP: {selectedPokemon.base.HP}</p>
              <p>Attack: {selectedPokemon.base.Attack}</p>
              <p>Defense: {selectedPokemon.base.Defense}</p>
              <p>Speed: {selectedPokemon.base.Speed}</p>
            </div>
          </div>

          <div>
            <h3 className="pokemon-name-battle">
              {opponentPokemon.name.english}
            </h3>
            <img
              className="pokemon-img"
              src={opponentPokemon.image_url}
              alt={opponentPokemon.name.english}
            />

            <div>
              <p>HP: {opponentPokemon.base.HP}</p>
              <p>Attack: {opponentPokemon.base.Attack}</p>
              <p>Defense: {opponentPokemon.base.Defense}</p>
              <p>Speed: {opponentPokemon.base.Speed}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      {/* battle :)*/}
    </div>
  );
}

export default Battle;

