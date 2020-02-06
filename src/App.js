import React from 'react';
import logo from './logo.svg';
import './App.css';
import megaShark from './megashark.jpg';
import sharktopus from './sharktopus.png';
import sharkExorcist from './sharkExorcist.jpg';

function Movie(props){
  return <div>
    <h1>{props.title}{props.score}</h1>
  <img src={props.image}/>
  </div>
}

function App() {
  return (
    <div className="App">
      <h1>Best Movies</h1> 
      <Movie title='Megashark vs Crocosaurus' image={megaShark} score=' #rating: 7.5'/>
      <Movie title='Sharktopus' image={sharktopus} score=' #rating: 7.6'/>
      <Movie title='sharkExorcist' image={sharkExorcist} score=' #rating: 8.9'/>
      
    </div>
  );
}

export default App;
