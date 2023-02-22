import React from "react";
import {v4 as uuidv4} from 'uuid';
import { Box } from '@mui/system';
function Weaknesses(props){

    //fuente: https://www.wikihow.com/Learn-Type-Weaknesses-in-Pok%C3%A9mon 
    const weaknessesList = [
        {forType: "bug", weakness: ["fire","rock","flying"]},
        {forType: "dark", weakness: ["fairy","fighting","bug"]},
        {forType: "dragon", weakness: ["dragon","ice","fairy"]},
        {forType: "electric", weakness: ["ground"]},
        {forType: "fairy", weakness: ["steel","poison"]},
        {forType: "fighting", weakness: ["fairy","psychic","flying"]},
        {forType: "fire", weakness: ["ground","rock","water"]},
        {forType: "flying", weakness: ["electric","rock","ice"]},
        {forType: "ghost", weakness: ["dark","ghost"]},
        {forType: "grass", weakness: ["flying","bug","poison","ice","fire"]},
        {forType: "ground", weakness: ["grass","ice","water"]},
        {forType: "ice", weakness: ["fire","fighting","rock","steel"]},
        {forType: "normal", weakness: ["fighting"]},
        {forType: "poison", weakness: ["ground","psychic"]},
        {forType: "psychic", weakness: ["bug","dark","ghost"]},
        {forType: "rock", weakness: ["grass","water","fighting","ground","steel"]},
        {forType: "steel", weakness: ["ground","fire","fighting"]},
        {forType: "water", weakness: ["electric","grass"]}
    ];

    let actualPokWeaknesses = [];
    props.pokeTypes.forEach(pokeType => {
        weaknessesList.forEach(types =>{
            if(pokeType.type.name === types.forType){
                actualPokWeaknesses.push(...types.weakness)
            }
        })
    });

    return(
        <Box sx={{display:"flex", flexDirection: "row" , justifyContent: "space-around"}}>
            {actualPokWeaknesses.map(item => (
              <div key={uuidv4()}>
                <label>{item}</label>
              </div>
            ))}
        </Box>
    );
}

export default Weaknesses;