import React, { useState, useEffect } from "react";
import jsonpack from "./data.json";
import ListadoDeProductos from "./ListadoDeProductos";
import Producto from "./Producto";
import { useParams } from 'react-router-dom';

const ListadoDeProductosContainer = ({ name }) => {
  const [productos, setProductos] = useState([]);
  const { idcategory, idproduct } = useParams();

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(jsonpack);
      }, 2000);
    }).then((response) => {
      if (!idcategory) {

        setProductos(response);
      }else {
        setProductos(response.filter((producto) => producto.idcategory == idcategory));
      }
    }, [idcategory]);
  }, []);

  return (
    <div name="test">
      <div className="p-3 mb-2 bg-dark text-white">
        {name}

        <ListadoDeProductos items={productos} />
      </div>
    </div>
  );
};

export default ListadoDeProductosContainer;

