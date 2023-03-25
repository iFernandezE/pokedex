import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

import Typography from '@mui/material/Typography';
import Weaknesses from './Weaknesses';
import Types from './Types';
import Stats from './Stats';
import { CardHeader } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';
import fondoCarta from '../images/fondoCarta.jpg';
import fondoCartaDark from '../images/fondoCartaDark.jpg';
import Abilities from './Abilities';

import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

import { addToFavorites, removeFromFavorites } from './redux/actions/pokedexActions';
import { useDispatch, useSelector } from 'react-redux';


export default function MediaCard(props) {

    const favorites = useSelector(state => state);
    const dispatch = useDispatch();

    const data = useContext(ThemeContext);
    let bgBoxes, bgBoxes2;

    if (data.theme === 'light') {
        bgBoxes = 'rgba(244, 157, 26,0.5)';
        bgBoxes2 = 'rgba(244, 157, 26,1)';
    }
    else {
        bgBoxes = 'rgba(100, 157, 226,0.5)';
        bgBoxes2 = 'rgba(100, 157, 226,1)';
    }

    var isFavorite = false;
    if (favorites) {
        if(favorites.includes(props.pokeNum)){
            isFavorite = true;
        }
    }

    function handleFavoriteClick() {
        // console.log(isFavorite);
        if(!isFavorite)dispatch(addToFavorites(props.pokeNum));
        else if(isFavorite)dispatch(removeFromFavorites(props.pokeNum));
    }

    return (

        <Card sx={{
            maxWidth: 350, display: 'flex',
            backgroundImage: data.theme === 'light' ? `url(${fondoCarta}) ` : `url(${fondoCartaDark}) `,
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
            border: data.theme === 'light' ? '5px solid gold' : '5px solid darkBlue',
            boxShadow: data.theme === 'light' ? '0px 0px 25px 10px rgb(255, 230, 0)' : '0px 0px 25px 10px rgb(20, 20, 150)'
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
                action={
                    <IconButton
                        onClick={handleFavoriteClick}
                        aria-label="settings"
                        >
                        {/* {isFavorite ? <StarIcon fontSize="large" sx={{ color: 'gold' }}/> : <StarBorderIcon fontSize="large" />} */}
                        {isFavorite ? <StarIcon fontSize="large" sx={{ color: data.theme==='light'? 'red':'gold' }}/> : <StarBorderIcon fontSize="large" />}
                    </IconButton>
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