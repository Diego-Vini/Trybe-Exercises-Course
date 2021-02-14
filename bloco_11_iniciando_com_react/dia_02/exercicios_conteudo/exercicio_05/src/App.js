import React from 'react';
import './App.css';

class App extends React.Component {
render(){
  const shoppingList = ['Leite', 'Pao', 'Arroz', 'Feijao', 'Carne']
  const itemLista = shoppingList.map((item, index) => (<li key={index}> { item } </li>))
  
  return(
    <div>
      <h2>Lista de compras</h2>
      <ul>
        { itemLista }
      </ul>
    </div>
  )
}
}

export default App;
