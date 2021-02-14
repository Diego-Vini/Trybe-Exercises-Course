import React from 'react';
import Pokemon from './Pokemon'
import Data from './Data'

class Pokedex extends React.Component {
    render () {
        return (
            <div className='gridPokemons'>
                {Data.map((searchPokemons, index) => {
                    return <Pokemon pokemons = {searchPokemons} key = { index }/>
                })}
            </div>
        );
    }
}

export default Pokedex;