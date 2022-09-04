import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Producto =({jsonpack})=>{
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        alt="imagen de producto"
        height="400"
        image={jsonpack.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {jsonpack.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Typography gutterBottom variant="h6">AR${jsonpack.precio}</Typography>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
export default Producto;
