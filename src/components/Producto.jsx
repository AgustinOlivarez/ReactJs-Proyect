import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Producto =({jsonpack})=>{
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
export default Producto;
// export default Producto;



// export default function Producto({ item, color, consoleHolaMundo }) {
// const [contador, setContador] = useState(0);

// return (
//     <div style={{ backgroundColor: color, marginTop: '5px' }}>
//         <h1>contador: {contador}</h1>
//         <button onClick={() => {
//             setContador(contador + 1);
//             console.log(contador)
//         }}
//     >
//       Sumar Contador 
//         </button>
//         <h2>id: {item.id}</h2>
//       <h2>{item.name}</h2>
//       <h2>precio ${item.price}</h2>
//     </div>
// )
//     }