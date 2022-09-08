import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function DetalledeProductoContainer() {
  const { idcategory, idproduct } = useParams();

  return(
    <div>
        <p>Detalle Producto</p>
    </div>

)}