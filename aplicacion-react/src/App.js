import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Saludar from './components/Saludar';

function App() {

  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);

  const encenderApagar = () => {
    //setStateCar(!stateCar);
    setStateCar(prevValue => !prevValue);
    setContar(contar + 1);
  };

  useEffect(() => {
    console.log("Total: " + contar);

  }, [contar])



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3> El Coche esta: {stateCar ? "Encendido" : "Apagado"}</h3>
        <h4> Clicks: {contar}</h4>
        <button onClick={encenderApagar}> Encender / Apagar</button>
      </header>
    </div >
  );
}

export default App;
