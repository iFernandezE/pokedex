import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

import { NavLink } from "react-router-dom";
import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

export default function Header() {
  const data = useContext(ThemeContext);

  const [auth, setAuth] = React.useState(true);

  const handleChange = (event) => {
    data.handleTheme(event)
    setAuth(event.target.checked);
  };

  // if (data.theme === 'light') var LightColor = "#B01E68"
  // else var LightColor = "#060047"

  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static"
        sx={{ backgroundColor: data.theme === 'light' ? "#B01E68" : "#065577" }}>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          {/* sx={{ fontSize: '20px', color: 'white', fontWeight: 'bold', textDecoration: 'none' }} */}

          <Button color="inherit">
            <NavLink to="/" className={data.theme === 'light'? 'navLinkLightText':'navLinkDarkText'}>
              Home
            </NavLink>
          </Button>
          <Button>
            <NavLink to="/login" className={data.theme === 'light'? 'navLinkLightText':'navLinkDarkText'}>
              Login
            </NavLink>
          </Button>
          <Button>
            <NavLink to="/pokedex" className={data.theme === 'light'? 'navLinkLightText':'navLinkDarkText'}>
              Pokedex
            </NavLink>
          </Button>
          <Button>
            <NavLink to="/favorites" className={data.theme === 'light'? 'navLinkLightText':'navLinkDarkText'}>
              Favorites
            </NavLink>
          </Button>

          <FormControlLabel
          className={data.theme === 'light'? 'navLinkLightText':'navLinkDarkText'}
            control={
              <Switch
                checked={auth}
                onChange={handleChange}
                aria-label="login switch"
              />
            }
            label={auth ? 'Light mode 🌞':'Dark mode 🌚'}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}