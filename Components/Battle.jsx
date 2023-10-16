import React from 'react';
import './battle.css';
import { ReactDOM } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

// Import other necessary modules here

function Battle () {
    return (
        
        <div className="layer">
            <h1 id = "BattleTitle" >BATTLEMON</h1><br/>
            <div className='orange'>
                <img className='Player' src='https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png' alt='PLayer Pokemon' />
                <img className='VS' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Wh9u0_5GpwFrXeoY9sWrNlqx7Wz-pkDlSw&usqp=CAU' alt='VS' />
                <img className='COM' src="https://images.secretlab.co/theme/common/collab_pokemon_catalog_charizard-min.png" alt="Computer" />
            </div>

 <div className="battle-container" alt='blue'>
  <div className="battle-info" alt='red'>
    <div className="player-stats">
      <div id="player-name" className="PokeName"></div>
      <div id="player-hp" className="Hp"></div>
    </div>
    <div className="player-attributes">
      <div id="player-attack" className="Attack"></div>
      <div id="player-defense" className="Defense"></div>
      <div id="player-speed" className="Speed"></div>
    </div>
  </div>
  <div className="battle-info">
    <div className="computer-stats">
      <div id="computer-name" className="PokeName"></div>
      <div id="computer-hp" className="Hp"></div>
    </div>
    <div className="computer-attributes">
      <div id="computer-attack" className="Attack"></div>
      <div id="computer-defense" className="Defense"></div>
      <div id="computer-speed" className="Speed"></div>
    </div>
  </div>
</div>

        </div>
    );
}
export default Battle;

            {/* <div className='blue'>
                {/* This is where the battle will be rendered 
                <div className='red'>
                    <div className='green'>
                        <div className="PokeName"></div>
                        <div className="Hp"></div>
                    </div>
                    <div className="violett">
                        <div className="Attack"></div>
                        <div className="Defense"></div>
                        <div className="Speed"></div>
                    </div>
                </div>
                <div className='red'>
                    <div className='green'>
                        <div className="PokeName"></div>
                        <div className="Hp"></div>
                    </div>
                    <div className="violett">
                        <div className="Attack"></div>
                        <div className="Defense"></div>
                        <div className="Speed"></div>
                    </div>
                </div>
            </div> */}

            