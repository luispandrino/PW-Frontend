import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'




function App() {
  return (
    <div>
<AppBar position="static">
    <Toolbar>
    <IconButton edge="start"  color="inherit" aria-label="menu"><MenuIcon /></IconButton>
      <Typography variant="h6">
        Recomendaciones
      </Typography>
      <Button color="inherit" >Cerrar Sesión</Button>
    </Toolbar>
  </AppBar>
 </div>
  );
}

export default App;
