import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./battle.css";
import swal from "sweetalert";

function Battle() {
  const { id } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [opponentPokemon, setOpponentPokemon] = useState(null);

  // const performBattle = () => {
  //   if (selectedPokemon && opponentPokemon) {
  //     const randomAttribute = Math.floor(Math.random() * 3);

  //     let selectedAttribute, opponentAttribute;

  //     if (randomAttribute === 0) {
  //       selectedAttribute = selectedPokemon.base.Speed;
  //       opponentAttribute = opponentPokemon.base.Speed;
  //     } else if (randomAttribute === 1) {
  //       selectedAttribute = selectedPokemon.base.Attack;
  //       opponentAttribute = opponentPokemon.base.Attack;
  //     } else {
  //       selectedAttribute = selectedPokemon.base.Defense;
  //       opponentAttribute = opponentPokemon.base.Defense;
  //     }

  //     let winner = "No one";

  //     if (selectedAttribute > opponentAttribute) {
  //       winner = selectedPokemon.name.english;
  //     } else if (selectedAttribute < opponentAttribute) {
  //       winner = opponentPokemon.name.english;
  //     }

  //     swal({
  //       title: `Good job! ${winner} wins the battle with ${selectedAttribute} against ${opponentAttribute}!`,
  //       text: "",
  //       icon: "success",
  //       button: "OK!",
  //     });
  //   }
  // };

  const performBattle = () => {
    if (selectedPokemon && opponentPokemon) {
      const selectedSpeed = selectedPokemon.base.Speed;
      const selectedAttack = selectedPokemon.base.Attack;
      const selectedDefense = selectedPokemon.base.Defense;

      const opponentSpeed = opponentPokemon.base.Speed;
      const opponentAttack = opponentPokemon.base.Attack;
      const opponentDefense = opponentPokemon.base.Defense;

      let winner = "No one";

      if (selectedSpeed > opponentSpeed) {
        winner = selectedPokemon.name.english;
      } else if (selectedSpeed < opponentSpeed) {
        winner = opponentPokemon.name.english;
      } else if (selectedAttack > opponentAttack) {
        winner = selectedPokemon.name.english;
      } else if (selectedAttack < opponentAttack) {
        winner = opponentPokemon.name.english;
      } else if (selectedDefense > opponentDefense) {
        winner = selectedPokemon.name.english;
      } else if (selectedDefense < opponentDefense) {
        winner = opponentPokemon.name.english;
      }

      swal({
        title: `Good job! ${winner} wins the battle!`,
        text: "",
        icon: "success",
        button: "OK!",
      });
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

        let randomOpponent;
        do {
          randomOpponent = selectRandomOpponent(newPokemon);
        } while (randomOpponent.id === selectedPokemon?.id);

        setOpponentPokemon(randomOpponent);
      } catch (error) {
        console.error(`Error fetching data for the random opponent: ${error}`);
      }
    };

    if (selectedPokemon) {
      fetchOpponentData();
    }
  }, [selectedPokemon]);

  return (
    <>
      <div className="title">
        <img src="/components/img/battlefinal.png" alt="Battlemon" />
      </div>
      <div className="battle-container">
        <button className="button-play" onClick={performBattle}>
          Start Battle
        </button>

        {selectedPokemon && opponentPokemon ? (
          <div className="pokemon-container">
            <div className="pokemon-box">
              <img
                className="pokemon-img-battle"
                src={selectedPokemon.image_url}
                alt={selectedPokemon.name.english}
              />
              <div className="pokemon-info">
                <div className="pokemon-name-battle">
                  <h3>{selectedPokemon.name.english}</h3>
                  <p>HP: {selectedPokemon.base.HP}</p>
                </div>
                <div className="pokemon-stats">
                  <div className="stat">
                    <div className="stat-title">Attack</div>
                    <div className="stat-value">
                      {selectedPokemon.base.Attack}
                    </div>
                  </div>
                  <div className="stat">
                    <div className="stat-title">Speed</div>
                    <div className="stat-value">
                      {selectedPokemon.base.Speed}
                    </div>
                  </div>
                  <div className="stat">
                    <div className="stat-title">Defense</div>
                    <div className="stat-value">
                      {selectedPokemon.base.Speed}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="vs-icon">
              <img src="/Components/img/VSFINAL.png" alt="vs-icon" />
            </div>

            <div className="pokemon-box">
              <img
                className="pokemon-img-battle"
                src={opponentPokemon.image_url}
                alt={opponentPokemon.name.english}
              />
              <div className="pokemon-info">
                <div className="pokemon-name-battle">
                  <h3>{opponentPokemon.name.english}</h3>
                  <p>HP: {opponentPokemon.base.HP}</p>
                </div>
                <div className="pokemon-stats">
                  <div className="stat">
                    <div className="stat-title">Attack</div>
                    <div className="stat-value">
                      {opponentPokemon.base.Attack}
                    </div>
                  </div>
                  <div className="stat">
                    <div className="stat-title">Speed</div>
                    <div className="stat-value">
                      {opponentPokemon.base.Speed}
                    </div>
                  </div>
                  <div className="stat">
                    <div className="stat-title">Defense</div>
                    <div className="stat-value">
                      {opponentPokemon.base.Defense}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}

export default Battle;
