import React from 'react';
import './battle.css';
import { ReactDOM } from 'react';
import { Link } from "react-router-dom";

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
            <div className='blue'>
                {/* This is where the battle will be rendered */}
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
            </div>
        </div>
    );
}
export default Battle;