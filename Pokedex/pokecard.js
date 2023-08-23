import React from 'react';

const POKE_API = 'https://raw.githubusercontent.com/' +
  'PokeAPI/sprites/master/sprites/pokemon/';

function Pokecard(props) {
  let imgSrc = `${POKE_API}${props.id}.png`;


    return(
        <div className='pokecard'>
          <p> {props.name} </p>
          <img src={imgSrc} />
          <p> {props.type} </p>
          <p> {props.exp} </p>
        </div>
      );
    }
    
export default Pokecard;
