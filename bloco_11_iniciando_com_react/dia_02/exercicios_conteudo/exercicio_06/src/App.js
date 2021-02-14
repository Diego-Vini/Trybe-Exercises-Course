import React from 'react';
import './App.css';
import VideoGameList from './VideGameList'
import Data from './Data'

function App() {
  return (
    <VideoGameList data={Data}/>
  );  
}

export default App;
