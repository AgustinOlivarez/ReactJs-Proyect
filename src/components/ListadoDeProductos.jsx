import React from 'react';
import data from './data.json';
import Producto from './Producto'


const ListadoDeProductos = ({productos}) =>{
    console.log(productos);
    return (
        <>
        { productos.map(producto=>

            <Producto key={producto.id} jsonpack={producto} />

        )}



        </>

    )
}

export default ListadoDeProductos;