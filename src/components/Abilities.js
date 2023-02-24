import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { Box } from '@mui/system';

function Abilities(props) {
    return (
        <Box  sx={{ textTransform: "capitalize", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
            {
                props.pokeAbilities.map(item =>(
                    <div key={uuidv4()}>
                        <label>{item.ability.name}</label>
                    </div>
                ))
            }
        </Box>
    )
}
export default Abilities;