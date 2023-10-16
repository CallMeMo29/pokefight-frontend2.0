const performBattle = () => {
    if (selectedPokemon && opponentPokemon) {
      // Randomly select the attributes for the first Pokémon
      const selectedSpeed = Math.floor(Math.random() * selectedPokemon.base.Speed);
      const selectedAttack = Math.floor(Math.random() * selectedPokemon.base.Attack);
      const selectedDefense = Math.floor(Math.random() * selectedPokemon.base.Defense);

      // Compare the attributes with the opponent's attributes
      const opponentSpeed = opponentPokemon.base.Speed;
      const opponentAttack = opponentPokemon.base.Attack;
      const opponentDefense = opponentPokemon.base.Defense;

      // Determine the winner based on the attributes
      let winner = "No one"; // Default to a tie

      if (selectedSpeed > opponentSpeed) {
        winner = selectedPokemon.name.english;
      } else if (selectedSpeed < opponentSpeed) {
        winner = opponentPokemon.name.english;
      } else {
        // If speed is tied, compare attack
        if (selectedAttack > opponentAttack) {
          winner = selectedPokemon.name.english;
        } else if (selectedAttack < opponentAttack) {
          winner = opponentPokemon.name.english;
        } else {
          // If attack is tied, compare defense
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