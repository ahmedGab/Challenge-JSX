import React from 'react';
import './App.css';
import Paragraph from './Component1/paragraph'
import popok from './Component1/'
import Google from './Component2/google'
import Taches from  './Component3/taches'

function App() {
  return (
    <div className="App">
    <Paragraph /> 
    <Google />
    <Taches />
    </div>
  );
}

export default App;
