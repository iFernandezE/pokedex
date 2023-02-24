import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Weaknesses from './Weaknesses';
import Types from './Types';
import Stats from './Stats';
import { CardHeader } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';
import fondoCarta from '../images/fondoCarta.jpg';
import Abilities from './Abilities';
import Fade from '@mui/material/Fade';
import Tooltip from '@mui/material/Tooltip';

export default function MediaCard(props) {
    let bgBoxes = 'rgba(244, 157, 26,0.5)';
    let bgBoxes2 = 'rgba(244, 157, 26,1)';
    return (

        <Card sx={{
            maxWidth: 350, display: 'flex',
            backgroundImage: `url(${fondoCarta}) `,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 5,
            // borderColor: 'gold',
            // borderWidth: 10,
            // borderBlockStyle: 'solid',
            margin: 1,
            border: '5px solid gold',
            boxShadow: '0px 0px 25px 10px rgb(255, 230, 0)'
        }}>
            {/* cabecera */}
            <CardHeader
                sx={{ minWidth: 280 }}
                avatar={
                    <Avatar aria-label="recipe" sx={{ width: 55, height: 55 }}>
                        <CardMedia
                            sx={{ backgroundColor: props.pokeColor.name }}
                            component="img"
                            height="55"
                            image={props.pokeImageLow}
                            title="pokemon"
                        />
                    </Avatar>
                }
                title={
                    <Typography gutterBottom variant="h4" component="div" textTransform="uppercase" fontWeight="bold" fontFamily="monospace" letterSpacing={2}>
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
                    //bgcolor: props.pokeColor.name,
                    boxShadow: 1,
                    borderRadius: 5,
                    p: 0,
                    width: 220,
                    '&:hover': {
                        backgroundColor: props.pokeColor.name,
                        transition: '0.3s ease-in-out',
                    }
                }}
            >
                
                <CardMedia
                    component="img"
                    image={props.pokeImage}
                    title="pokemon"
                />

            </Box>

            {/* contenido */}
            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{
                    display: 'flex', justifyContent: 'space-around', borderRadius: 3,
                    p: 1,
                    backgroundColor: bgBoxes,
                    margin: 0.5,
                    '&:hover': {
                        backgroundColor: bgBoxes2,
                        transition: '0.2s ease-in-out',
                        fontWeight: 'bold'
                    }
                }}>
                    <Box >
                        <Typography variant="body1" color="text.secondary" fontWeight='medium' fontFamily='fantasy'>
                            Weight
                        </Typography>
                        {props.pokeWeight / 10 + ' Kg.'}
                    </Box>
                    <Box>
                        <Typography variant="body1" color="text.secondary" fontWeight='medium' fontFamily='fantasy'>
                            Height
                        </Typography>
                        {props.pokeHeight / 10 + ' m.'}
                    </Box>

                </Box>

                <Box sx={{
                    borderRadius: 3,
                    p: 1,
                    backgroundColor: bgBoxes,
                    margin: 0.5,
                    '&:hover': {
                        backgroundColor: bgBoxes2,
                        transition: '0.2s ease-in-out',
                        fontWeight: 'bold'
                    }
                }}>
                    <Typography variant="body1" color="text.secondary" fontWeight='medium' fontFamily='fantasy'>
                        Abilities
                    </Typography>
                    <Abilities pokeAbilities={props.pokeAbilities}></Abilities>
                </Box>

                <Box sx={{
                    borderRadius: 3,
                    p: 1,
                    backgroundColor: bgBoxes,
                    margin: 0.5,
                    '&:hover': {
                        backgroundColor: bgBoxes2,
                        transition: '0.2s ease-in-out',
                        fontWeight: 'bold'
                    }
                }}>
                    <Typography variant="body1" color="text.secondary" fontWeight='medium' fontFamily='fantasy'>
                        Types
                    </Typography>
                    <Types pokeTypes={props.pokeTypes}></Types>
                </Box>

                <Box sx={{
                    borderRadius: 3,
                    p: 1,
                    backgroundColor: bgBoxes,
                    margin: 0.5,
                    '&:hover': {
                        backgroundColor: bgBoxes2,
                        transition: '0.2s ease-in-out',
                        fontWeight: 'bold'
                    }
                }}>
                    <Typography variant="body1" color="text.secondary" fontWeight='medium' fontFamily='fantasy'>
                        Weaknesses
                    </Typography>
                    <Weaknesses pokeTypes={props.pokeTypes}></Weaknesses>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    borderRadius: 3,
                    p: 0,
                    backgroundColor: bgBoxes,
                    margin: 0.5,
                    // backgroundColor: '#FFE15D'
                    '&:hover': {
                        backgroundColor: bgBoxes2,
                        transition: '0.2s ease-in-out',
                        fontWeight: 'bold'
                    }
                }}>
                    <Typography variant="body1" color="text.secondary" fontWeight='medium' fontFamily='fantasy'>
                        Stats
                    </Typography>
                    <Stats pokeStats={props.pokeStats}></Stats>
                </Box>
            </CardContent>

        </Card>
    );
}