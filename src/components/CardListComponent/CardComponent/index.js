import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./style.css";


const CardComponent = ( {data} ) => {
  return (
    <Card className="cardProducts" sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={data.img}
          alt={data.id}
        />
        <CardContent className='CardContent'>
          <Typography gutterBottom variant="h4" component="div">
            {data.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.tipo}
          </Typography>
          <Typography>
            $ {data.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className='cc'>
      <CardActions className='ButtonCompra'>
        <Button size="small" color="primary">
          COMPRAR
        </Button>
      </CardActions>
      </div>
    </Card>
  );
}


export default CardComponent;
