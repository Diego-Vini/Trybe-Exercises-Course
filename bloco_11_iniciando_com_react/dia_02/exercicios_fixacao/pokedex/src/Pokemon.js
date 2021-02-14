import React from 'react';
import Image from './Image';
import './App.css';

class Pokemon extends React.Component {
    render() {
        const  {name, type, averageWeight: {value, measurementUnit}, image} = this.props.pokemons
        return(
            <div className = 'PokemonCard' >
                <div className='pokemonDescription'>
                  <p> { name } </p>
                  <p> { type }</p>
                  <p> averageWeight: { value } { measurementUnit } </p>
                </div>
                <Image image = {image}/>
            </div>
            
        );
    }
}

export default Pokemon;