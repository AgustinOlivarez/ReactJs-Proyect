import React from "react";
import Producto from "./Producto";

const ListadoDeProductos = ({ items }) => {
  console.log(items);
  return (
    <>
      {items.map((producto) => (
        <Producto key={producto.id} jsonpack={producto} />
      ))}
    </>
  );
};

export default ListadoDeProductos;
