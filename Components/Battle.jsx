// import React from "react";
// import "./battle.css";
// import { ReactDOM } from "react";
// import { Link } from "react-router-dom";

// function Battle() {
//   return (
//     <div className="layer">
//       <h1 id="BattleTitle">BATTLEMON</h1>
//       <br />
//       <div className="orange">
//         <img
//           className="Player"
//           src="https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png"
//           alt="PLayer Pokemon"
//         />
//         <img
//           className="VS"
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Wh9u0_5GpwFrXeoY9sWrNlqx7Wz-pkDlSw&usqp=CAU"
//           alt="VS"
//         />
//         <img
//           className="COM"
//           src="https://images.secretlab.co/theme/common/collab_pokemon_catalog_charizard-min.png"
//           alt="Computer"
//         />
//       </div>
//       <div className="blue">
//         {/* This is where the battle will be rendered */}
//         <div className="red">
//           <div className="green">
//             <div className="PokeName"></div>
//             <div className="Hp"></div>
//           </div>
//           <div className="violett">
//             <div className="Attack"></div>
//             <div className="Defense"></div>
//             <div className="Speed"></div>
//           </div>
//         </div>
//         <div className="red">
//           <div className="green">
//             <div className="PokeName"></div>
//             <div className="Hp"></div>
//           </div>
//           <div className="violett">
//             <div className="Attack"></div>
//             <div className="Defense"></div>
//             <div className="Speed"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Battle;

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
