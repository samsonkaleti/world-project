
import * as React from 'react'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material'; 




export default function CountryCards(props) { 
  const {country,population,capital,url} = props 
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={url}
          alt={country}
        />
        <CardContent>
           <Typography gutterBottom variant="h5" component="div">
            {country}
          </Typography>  
          <Typography variant="body2" color="text.secondary">
            {capital} | {population}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ); 
} 









