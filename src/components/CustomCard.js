import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { v4 as uuidv4 } from 'uuid';
import Weaknesses from './Weaknesses';
import Stats from './Stats';
import { CardHeader } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';
import fondoCarta from '../images/fondoCarta.jpg';

export default function MediaCard(props) {
    return (
        <Card sx={{
            maxWidth: 350,  display: 'flex',
            
            backgroundImage: `url(${fondoCarta})`,
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 5,
            borderColor: 'gold',
            borderWidth: 10 ,
            borderBlockStyle: 'solid'
        }}>
            {/* cabecera */}
            <CardHeader
                sx={{ minWidth: 280 }}
                avatar={
                    <Avatar aria-label="recipe">
                        <CardMedia
                            sx={{ backgroundColor: props.pokeColor.name }}
                            component="img"
                            height="40"
                            image={props.pokeImageLow}
                            title="pokemon"
                        />
                    </Avatar>
                }
                title={
                    <Typography gutterBottom variant="h5" component="div">
                        {props.pokeName}
                    </Typography>
                }
                subheader={
                    <Typography gutterBottom variant="h6" component="div">
                        N.º {props.pokeNum}
                    </Typography>
                }
            ></CardHeader>

            {/* imagen */}
            <Box
                sx={{
                    bgcolor: props.pokeColor.name,
                    boxShadow: 1,
                    borderRadius: 5,
                    p: 0,
                    width: 250,
                }}
            >
                <CardMedia
                    component="img"
                    image={props.pokeImage}
                    title="pokemon"
                />
            </Box>

            {/* contenido */}
            <CardContent sx={{ maxWidth: 350, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Box>
                        <Typography variant="h6" color="text.secondary">
                            weight
                        </Typography>
                        {props.pokeWeight}
                    </Box>
                    <Box>
                        <Typography variant="h6" color="text.secondary">
                            height
                        </Typography>
                        {props.pokeHeight}
                    </Box>

                </Box>
                <br></br>
                <Box>
                    <Typography variant="h6" color="text.secondary">
                        Abilities
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                        {props.pokeAbilities.map(item => (
                            <div key={uuidv4()}>
                                <label>{item.ability.name}</label>
                            </div>
                        ))}
                    </Box>
                </Box>
                <br></br>
                <Box>
                    <Typography variant="h6" color="text.secondary">
                        Weaknesses
                    </Typography>
                    
                    <Weaknesses pokeTypes={props.pokeTypes}></Weaknesses>
                </Box>
                <br></br>
                <Stats pokeStats={props.pokeStats}></Stats>
            </CardContent>



        </Card>
    );
}