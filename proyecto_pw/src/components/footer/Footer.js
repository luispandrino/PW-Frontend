import React from 'react';
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.facebook.com/luispedro.andrinomenendez/">
        El Noob que desarrollo esto
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor:'Lightblue',
    padding: theme.spacing(3),
  },
}));

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  return (
    <footer>
      {/* Footer */}
      <React.Fragment>
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center"  component="p">
          Creado con mucho esfuerzo por un noob en Fornt 
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
    </footer>
  );
}

