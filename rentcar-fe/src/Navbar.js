import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
// import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

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
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
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
        </Toolbar>
      </AppBar>
    </div>
  );
}