// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function PokemonList() {
//   const [pokemonData, setPokemonData] = useState([]);
//   const pokemonIds = [1, 2, 4, 7, 10, 17, 19, 21, 23, 26, 28, 30];

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await Promise.all(
//         pokemonIds.map(async (id) => {
//           try {
//             const response = await axios.get(
//               `http://localhost:8000/pokemon/${id}`
//             );
//             return response.data;
//           } catch (error) {
//             console.error(
//               `Error fetching data for Pokémon with ID ${id}: ${error}`
//             );
//             return null;
//           }
//         })
//       );
//       setPokemonData(data.filter((pokemon) => pokemon !== null));
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>List of Pokémons:</h2>
//       <ul className="pokemon-list">
//         {pokemonData.map((pokemon) => (
//           <li key={pokemon._id} className="pokemon-item">
//             <img
//               className="pokemon-img"
//               src={pokemon.image_url}
//               alt={pokemon.name.english}
//             />
//             <span className="pokemon-name">{pokemon.name.english}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default PokemonList;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./PokemonList.css";

// function PokemonList() {
//   const [pokemonData, setPokemonData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:8001/pokemon");
//         const allPokemon = response.data;

//         const pokemonWithImages = allPokemon.filter((pokemon) =>
//           [1, 2, 4, 7, 10, 17, 19, 21, 23, 26, 28, 30].includes(pokemon.id)
//         );

//         setPokemonData(pokemonWithImages);
//       } catch (error) {
//         console.error(`Error fetching Pokémon data: ${error}`);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="pokemon-list">
//       <h2 className="main-title">Choose Your Pokémon</h2>
//       <ul className="pokemon-list">
//         {pokemonData.map((pokemon) => (
//           <li key={pokemon._id} className="pokemon-item">
//             <span className="pokemon-name">{pokemon.name.english}</span>
//             <img
//               className="pokemon-img"
//               src={pokemon.image_url}
//               alt={pokemon.name.english}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default PokemonList;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import "./PokemonList.css";

// function PokemonList() {
//   const [pokemonData, setPokemonData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:8001/pokemon");
//         const allPokemon = response.data;

//         const pokemonWithImages = allPokemon.filter((pokemon) =>
//           [1, 2, 4, 7, 10, 17, 19, 21, 23, 26, 28, 30].includes(pokemon.id)
//         );

//         setPokemonData(pokemonWithImages);
//       } catch (error) {
//         console.error(`Error fetching Pokémon data: ${error}`);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="pokemon-list">
//       <h2 className="main-title">Choose Your Pokémon</h2>
//       <ul className="pokemon-list">
//         {pokemonData.map((pokemon) => (
//           <li key={pokemon._id} className="pokemon-item">
//             <Link
//               to={{
//                 pathname: "/battle",
//                 state: { selectedPokemon: pokemon },
//               }}
//             >
//               <img
//                 className="pokemon-img"
//                 src={pokemon.image_url}
//                 alt={pokemon.name.english}
//               />
//             </Link>
//             <span className="pokemon-name">{pokemon.name.english}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default PokemonList;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import "./PokemonList.css";
// import { useHistory } from "react-router";

// function PokemonList() {
//   const [pokemonData, setPokemonData] = useState([]);
//   const history = useHistory();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:8001/pokemon");
//         const allPokemon = response.data;

//         const pokemonWithImages = allPokemon.filter((pokemon) =>
//           [1, 2, 4, 7, 10, 17, 19, 21, 23, 26, 28, 30].includes(pokemon.id)
//         );

//         setPokemonData(pokemonWithImages);
//       } catch (error) {
//         console.error(`Error fetching Pokémon data: ${error}`);
//       }
//     };

//     fetchData();
//   }, []);

//   const getRandomOpponent = (pokemonData) => {
//     const randomIndex = Math.floor(Math.random() * pokemonData.length);
//     return pokemonData[randomIndex];
//   };

//   const handleSelectPokemon = (selectedPokemon) => {
//     const opponentPokemon = getRandomOpponent(pokemonData);

//     history.push("/battle", {
//       state: {
//         selectedPokemon,
//         opponentPokemon,
//       },
//     });
//   };

//   return (
//     <div className="pokemon-list">
//       <h2 className="main-title">Choose Your Pokémon</h2>
//       <ul className="pokemon-list">
//         {pokemonData.map((pokemon) => (
//           <li key={pokemon._id} className="pokemon-item">
//             <button
//               onClick={() => handleSelectPokemon(pokemon)}
//               className="pokemon-button"
//             >
//               <img
//                 className="pokemon-img"
//                 src={pokemon.image_url}
//                 alt={pokemon.name.english}
//               />
//             </button>
//             <span className="pokemon-name">{pokemon.name.english}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default PokemonList;

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
            <Link to={`/battle/${pokemon.id}`}>
              {" "}
              <img
                className="pokemon-img"
                src={pokemon.image_url}
                alt={pokemon.name.english}
              />
            </Link>
            <span className="pokemon-name">{pokemon.name.english}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
