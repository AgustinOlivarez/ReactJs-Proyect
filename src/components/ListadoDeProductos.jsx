import React from "react";
import data from "./data.json";
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
