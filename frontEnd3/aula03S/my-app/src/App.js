import { useState } from "react";

function App() {
  const [valor, setValor] = useState(0);
  
  function aumentarValor(){
    setValor(valor + 1);
  }
  
  function reduzirValor(){
    setValor(valor - 1);
  }

  return (
    <>
      <h1>Hello World!</h1>
      <h2>{valor}</h2>
      <button onClick={aumentarValor}>Aumentar</button>
      <button onClick={reduzirValor}>Reduzir</button>
    </>
  );
}

export default App;
