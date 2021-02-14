import React from 'react';
import Pokedex from './Pokedex';
import './App.css';
import Header from './Header'

function App() {
  return (
    
    <div >
        <header>
          <Header textHeader = { 'Pokedex' }/>
        </header>
        <section className="PokemonsCards">
        
          <Pokedex />
        </section>
        
    </div>
    
  );
}

export default App;
