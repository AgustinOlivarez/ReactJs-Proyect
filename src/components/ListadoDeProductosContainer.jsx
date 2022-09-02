import React, { useState, useEffect } from 'react';
import jsonpack from './data.json';
import ListadoDeProductos from './ListadoDeProductos';
import Producto from './Producto';

const ListadoDeProductosContainer = ({name}) => {
  const[productos,setProductos]=useState([])
  const llamar = new Promise((resolve,reject)=>{
      setTimeout(()=>{
          resolve(jsonpack)
      },2000)
  })

  llamar.then(response=> {
      setProductos(response)
  })



  return (

     <div name="test">



  <div class="p-3 mb-2 bg-dark text-white">
      {name}

      <ListadoDeProductos items={productos}/>

     </div>



         </div>
 )
}


export default ListadoDeProductosContainer;
// export default function ListadoDeProductosContainer() {


//   //fetch("pokepai.com/pokes" / json)
//   //normal // ordenardor
//   //paginar
//   //decir el largo de cada pagina

//   return <ListadoDeProductosLayout productos={productos} />;
// }