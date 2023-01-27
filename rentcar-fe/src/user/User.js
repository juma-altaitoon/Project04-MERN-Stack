import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Avatar from '@material-ui/core/Avatar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from "react-router-dom";
import Axios from 'axios'


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
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function User() {
  const classes = useStyles();

  const [users, setUsers] = useState([]);
  useEffect(() => {
     UsersGet()
  }, [])
  
  const UsersGet = () => {
    Axios.get("user/index", {
      headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
      }
     })
      .then((res) => {
        setUsers(res.data.users);
       })
      .catch(err => {
        console.log("Error Retreiving Recipes!!");
        console.log(err);
      })
}

  const UserEdit = id => {
    Axios.get(`user/edit?id=${id}`, {
      headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
      }
  })
  .then(res => {
      console.log(id)
      console.log("Edit Loaded Successfully");
      // setIsEdit(true);
      // setCurrentRecipe(res.data.recipe);
  })
  .catch(err => {
      console.log("Error Loading Recipe Information");
      console.log(err);
  })
  }

  const UserDelete = id => {
  Axios.delete(`user/delete?id=${id}`, {
    headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })
  .then(res => {
    console.log("Record Deleted Successfully");
   // loadRecipesList();
  })
  .catch(err => {
    console.log("Error Deleting Author");
    console.log(err);
  })
  }

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">    
        <Paper className={classes.paper}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                USERS
              </Typography>
            </Box>
            <Box>
              <Link to="/user/create">
                <Button variant="contained" color="primary">
                  CREATE
                </Button>
              </Link>
            </Box>
          </Box>
          <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">First Name</TableCell>
                <TableCell align="left">Last Name</TableCell>
                <TableCell align="left">Email Address</TableCell>
                <TableCell align="left">Phone_number</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
               { users.map((user, id) => {
               return ( 
                <TableRow key={id}>
                  <TableCell align="left">{user.first_name}</TableCell>
                  <TableCell align="left">{user.last_name}</TableCell>
                  <TableCell align="left">{user.email_address}</TableCell>
                  <TableCell align="left">{user.phone_number}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button onClick={() => UserEdit(user._id)}>Edit</Button>
                      <Button onClick={() => UserDelete(user.id)}>Del</Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              )
            })}
            </TableBody>
          </Table>
        </TableContainer>
        </Paper>
      </Container>
    </div>
    
  );
}