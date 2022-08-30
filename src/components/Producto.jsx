import React, { useState, useEffect } from 'react';
export default function Producto({ item, color, consoleHolaMundo }) {
const [contador, setContador] = useState(0);

return (
    <div style={{ backgroundColor: color, marginTop: '5px' }}>
        <h1>contador: {contador}</h1>
        <button onClick={() => {
            setContador(contador + 1);
            console.log(contador)
        }}
    >
      Sumar Contador 
        </button>
        <h2>id: {item.id}</h2>
      <h2>{item.name}</h2>
      <h2>precio ${item.price}</h2>
    </div>
)
    }