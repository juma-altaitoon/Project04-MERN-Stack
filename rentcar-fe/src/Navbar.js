import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ToysIcon from '@mui/icons-material/Toys';
import { Link } from "react-router-dom";
import CardActions from '@mui/material/CardActions';
import jwt_decode from 'jwt-decode';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },
  navlink:{
    color: 'Wheat',
    textDecoration: 'none'
  }
}));

export default function Navbar(props) {
  const classes = useStyles();
  const [user, setUser] = useState({});
  const [isAuth, setIsAuth] = useState(false);

    //Logout
    const logoutHandler = (e) =>{
      e.preventDefault();
      localStorage.removeItem("token");
      setIsAuth(false);
      window.location.href = '/'
    }

    useEffect(() => {
      let token = localStorage.getItem("token");
      if(token != null){
        let user = jwt_decode(token);
        if(user) {
          setUser(user);
          setIsAuth(true);
        }
      }
    }, [])

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Link className={classes.navlink} to="/home">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ToysIcon />
          </IconButton>
          </Link>
          <Link className={classes.navlink} to="/home">
          <Typography variant="h6" className={classes.title} style={{"color":"Wheat"}}> 
          { user.user ? "Welcome " + user.user.name : null}  
          &nbsp; Rent Car Application &nbsp;
          </Typography>
          </Link>
          {isAuth ? (
         <span>
          <CardActions display='relative' justifycontent='center'>
          <Link className={classes.navlink} to="/user">
            <Button variant="h5" className={classes.title} style={{"color":"Wheat"}}>
              User &nbsp;
            </Button>
          </Link>
          <div>&nbsp;</div>
          <Link className={classes.navlink} to="/car">
            <Button variant="h5" className={classes.title} style={{"color":"Wheat"}} >
              Car
            </Button>
          </Link>
          <div>&nbsp;</div>
          <Link className={classes.navlink} to="/order">
            <Button variant="h5" className={classes.title} style={{"color":"Wheat"}}>
              Order &nbsp;
            </Button>
          </Link>
          <div>&nbsp;</div>
          <Link className={classes.navlink} to="/publicapi">
            <Button variant="h5" className={classes.title} style={{"color":"Wheat"}}>
              Utilities &nbsp;
            </Button>
          </Link>
          <div>&nbsp;</div>
            <Button variant="h5" className={classes.title} style={{"color":"Wheat"}} onClick={logoutHandler}>
               Logout &nbsp;
            </Button>
          <div>&nbsp;</div>
          </CardActions>
          </span>
           ) : (
           <div>          
           <Link className={classes.navlink} to="/">
             <Button variant="h5" className={classes.title} style={{"color":"Wheat"}}>
               Login/Register &nbsp;
             </Button>
           </Link>
           &nbsp;</div>
           )}
        </Toolbar>
      </AppBar>
    </div>
  );
}