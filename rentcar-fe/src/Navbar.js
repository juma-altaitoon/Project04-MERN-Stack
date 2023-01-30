import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ToysIcon from '@mui/icons-material/Toys';
import { Link } from "react-router-dom";
import CardActions from '@mui/material/CardActions';
import User from "./user/User";

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

export default function App(props) {
  const classes = useStyles();

    //Logout
    const logoutHandler = (e) =>{
      e.preventDefault();
      localStorage.removeItem("token");
     // setIsAuth(false);
     // setUser(null);
      // setMessage("User logged out successfully")
      window.location.href = '/'
    }
 
//  const [loggedin, setLoggedin] = useState(props.user);

  // const LogoutHandler = () => {
  //   console.log("Logout clicked");
  // }
  // console.log(props)
  // console.log(props.user.user)
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
          {/* <p>{props.user.user.name[0]}</p> */}
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
          <div>&nbsp;</div>
          <Link className={classes.navlink} to="/login">
            <Button variant="contained" className={classes.title} color="secondary">
              Login &nbsp;
            </Button>
          </Link>
          <div>&nbsp;</div>
          {/* <Link className={classes.navlink} to="/logout"> */}
            <Button variant="contained" className={classes.title} color="secondary" onClick={logoutHandler}>
               Logout &nbsp;
            </Button>
          {/* </Link> */}
          </CardActions>
        </Toolbar>
      </AppBar>
    </div>
  );
}