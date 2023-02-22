import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { Box } from '@mui/system';

function Types(props) {
    return (
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
            {
                props.pokeTypes.map(item =>(
                    <div key={uuidv4()}>
                        <label>{item.type.name}</label>
                    </div>
                ))
            }
        </Box>
    )
}
export default Types;