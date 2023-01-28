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

export default function Car() {
  const classes = useStyles();

  const [cars, setUsers] = useState([]);
  useEffect(() => {
     CarsGet()
  }, [])
  
  const CarsGet = () => {
    Axios.get("user/index", {
      headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
      }
     })
      .then((res) => {
        setUsers(res.data.cars);
       })
      .catch(err => {
        console.log("Error Retreiving Records");
        console.log(err);
      })
}

  const CarUpdate = id => {
    window.location = window.location.href+'/update?id='+id
  }

  const CarDelete = id => {
    Axios.delete(`user/delete?id=${id}`, {
    headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
    }
    })
    .then(res => {
      console.log("Record Deleted Successfully");
      window.location.href = '/car';
    })
    .catch(err => {
      console.log("Error Deleting Record");
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
                CARS
              </Typography>
            </Box>
            <Box>
              <Link to="car/add">
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
                <TableCell align="right">Plate ID</TableCell>
                <TableCell align="left">Brand</TableCell>
                <TableCell align="left">Color</TableCell>
                <TableCell align="left">Manufacture Year</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            { cars.map((car, id) => {
               return ( 
                <TableRow key={id}>
                  <TableCell align="left">{car.brand}</TableCell>
                  <TableCell align="left">{car.color}</TableCell>
                  <TableCell align="left">{car.manufacture_year}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button onClick={() => CarUpdate(car._id)}>Edit</Button>
                      <Button onClick={() => CarDelete(car._id)}>Del</Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              )})}
            </TableBody>
          </Table>
        </TableContainer>
        </Paper>
      </Container>
    </div>
    
  );
}