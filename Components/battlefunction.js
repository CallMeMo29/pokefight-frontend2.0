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