import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jsonpack from './../data.json'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Loading } from "./../Loading/Loading";

const DetalledeProductoContainer = ({productoEspecifico}) => {
    const [productos, setProductos] = useState([]);
    const { idcategory, id } = useParams();
  
    useEffect(() => {
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(jsonpack);
          }, 2000);
        }).then((response) => {
          if (!id) {
    
            alert("No se encontro el producto");
          }else {
            setProductos(response.find((producto) => producto.id === id));
          }
        }, [id]);
    },);
      return (
        <div className='CardYDetalle'>
        <div className='Card'>

        <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          alt="imagen de producto"
          height="400"
          image={productos.img}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productos.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Typography gutterBottom variant="h6">AR${productos.precio}</Typography>
        </CardActions>
      </Card>
        </div>
        <div className='Detalle'>
            <p>{productos.descripcion}</p>
            <button className='AgregarAlCarrito'>Agregar al Carrito</button>
        </div>
          </div>
      );
    };
    export default DetalledeProductoContainer