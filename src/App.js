import './App.css';
import Boton from "./components/Botones.jsx"
import Pantalla from "./components/Pantalla";
import BotonClear from "./components/BotonClear"
import { useState } from 'react';
import { evaluate } from "mathjs"

function App() {
  const [input, setInput]= useState("");

  const agregarInput = val => {
    setInput(input + val)
  }
  const carcularResultado = () => {
    setInput(evaluate(input))
  }


  return (
    <div className="App">
      <div className='contenedor-calculadora'>
        <Pantalla input= { input }/> 
        <div className='fila'>
          <Boton manejarClic = { agregarInput }>1</Boton>
          <Boton manejarClic = { agregarInput }>2</Boton>
          <Boton manejarClic = { agregarInput }>3</Boton>
          <Boton manejarClic = { agregarInput }>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic = { agregarInput } >4</Boton>
          <Boton manejarClic = { agregarInput } >5</Boton>
          <Boton manejarClic = { agregarInput } >6</Boton>
          <Boton manejarClic = { agregarInput } >-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic = { agregarInput } >7</Boton>
          <Boton manejarClic = { agregarInput } >8</Boton>
          <Boton manejarClic = { agregarInput } >9</Boton>
          <Boton manejarClic = { agregarInput } >*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic = { carcularResultado} >=</Boton>
          <Boton manejarClic = { agregarInput} >0</Boton>
          <Boton manejarClic = { agregarInput} >.</Boton>
          <Boton manejarClic = { agregarInput} >/</Boton>
        </div>
        <BotonClear manejarClear = { () => setInput("") }>Clear</BotonClear>
      </div>
    </div>
  );
}

export default App;
