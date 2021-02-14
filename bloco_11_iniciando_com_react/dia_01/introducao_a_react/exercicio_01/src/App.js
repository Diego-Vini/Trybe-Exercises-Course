import './App.css';

const compromissos = ['Escola', 'Academia', 'Trybe', 'Clube']

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
       <h1>Lista de tarefas:
       {compromissos.map((item) => {
         return <ul> { task([item]) } </ul>  
        })}
      </h1>
  );
}

export default App;
