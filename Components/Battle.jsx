

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Battle() {
  const { id } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [opponentPokemon, setOpponentPokemon] = useState(null);

  /*
  const performBattle = () => {
    if (selectedPokemon && opponentPokemon) {
      
      const selectedSpeed = Math.floor(Math.random() * selectedPokemon.base.Speed);
      const selectedAttack = Math.floor(Math.random() * selectedPokemon.base.Attack);
      const selectedDefense = Math.floor(Math.random() * selectedPokemon.base.Defense);

      
      const opponentSpeed = opponentPokemon.base.Speed;
      const opponentAttack = opponentPokemon.base.Attack;
      const opponentDefense = opponentPokemon.base.Defense;

      
      let winner = "None";

      if (selectedSpeed > opponentSpeed) {
        winner = selectedPokemon.name.english;
      } else if (selectedSpeed < opponentSpeed) {
        winner = opponentPokemon.name.english;
      } else {
        
        if (selectedAttack > opponentAttack) {
          winner = selectedPokemon.name.english;
        } else if (selectedAttack < opponentAttack) {
          winner = opponentPokemon.name.english;
        } else {
          
          if (selectedDefense > opponentDefense) {
            winner = selectedPokemon.name.english;
          } else if (selectedDefense < opponentDefense) {
            winner = opponentPokemon.name.english;
          }
        }
      }

      alert(`${winner} wins the battle!`);
    }
  };
  */

  const performBattle = () => {
    if (selectedPokemon && opponentPokemon) {
     
      const randomAttribute = Math.floor(Math.random() * 3); 
  
      let selectedAttribute, opponentAttribute;
      
      if (randomAttribute === 0) {
        selectedAttribute = selectedPokemon.base.Speed;
        opponentAttribute = opponentPokemon.base.Speed;
      } else if (randomAttribute === 1) {
        selectedAttribute = selectedPokemon.base.Attack;
        opponentAttribute = opponentPokemon.base.Attack;
      } else {
        selectedAttribute = selectedPokemon.base.Defense;
        opponentAttribute = opponentPokemon.base.Defense;
      }
  
      
      let winner = "No one";
  
      if (selectedAttribute > opponentAttribute) {
        winner = selectedPokemon.name.english;
      } else if (selectedAttribute < opponentAttribute) {
        winner = opponentPokemon.name.english;
      }
  
      alert(`${winner} wins the battle with ${selectedAttribute} against ${opponentAttribute}!`);
    }
  };

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
      <button onClick={performBattle}>Start Battle</button>
      {/* battle :)*/}
    </div>
  );
}

export default Battle;

