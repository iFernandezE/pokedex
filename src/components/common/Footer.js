import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

export default function Footer() {
  const data = useContext(ThemeContext);
  return (
    <Box sx={{ flexGrow: 1}} >
      <AppBar position="static"
      
        sx={{ backgroundColor: data.theme === 'light' ? "#B01E68" : "#065577"}}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CopyRight: IvanFernandez - 2023
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

