import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ToysIcon from '@mui/icons-material/Toys';
import { Link } from "react-router-dom";
import CardActions from '@mui/material/CardActions';
//import Weather from './publicapi/Weather';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navlink:{
    color: 'white',
    textDecoration: 'none'
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Link className={classes.navlink} to="/">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ToysIcon />
          </IconButton>
          </Link>
          <Link className={classes.navlink} to="/">
          <Typography variant="h6" className={classes.title}>
            Rent Car Application &nbsp;
          </Typography>
          </Link>
          <CardActions display='flex' justifycontent='center'>
          <Link className={classes.navlink} to="/user">
            <Button variant="contained" className={classes.title} color="secondary">
              User &nbsp;
            </Button>
          </Link>
          <div>&nbsp;</div>
          <Link className={classes.navlink} to="/car">
            <Button variant="contained" className={classes.title} color="secondary">
              Car
            </Button>
          </Link>
          <div>&nbsp;</div>
          <Link className={classes.navlink} to="/order">
            <Button variant="contained" className={classes.title} color="secondary">
              Order &nbsp;
            </Button>
          </Link>
          <div>&nbsp;</div>
          <Link className={classes.navlink} to="/publicapi">
            <Button variant="contained" className={classes.title} color="secondary">
              Utilities &nbsp;
            </Button>
          </Link>
          </CardActions>
        </Toolbar>
      </AppBar>
    </div>
  );
}