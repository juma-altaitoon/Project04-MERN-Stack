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
import Avatar from '@material-ui/core/Avatar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
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
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function Car(props) {
  const classes = useStyles();

  const [cars, setCars] = useState([]);
  useEffect(() => {
    CarsGet()
  }, [])
  
  const CarsGet = () => {
    fetch("car/index")
      .then(res => res.json())
      .then(
        (result) => {
          setCars(result)
        }
      )
  }

  const CarEdit = id => {
    window.location = 'car/update/'+id
  }

  const CarDelete = id => {
    var data = {
      'id': id
    }
    fetch('car/delete', {
      method: 'DELETE',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(
      (result) => {
        alert(result['message'])
        if (result['status'] === 'ok') {
          CarsGet();
        }
      }
    )
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
                {/* <TableCell align="center">Avatar</TableCell> */}
                <TableCell align="left">Brand</TableCell>
                <TableCell align="left">Color</TableCell>
                <TableCell align="left">Manufacture Year</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cars.map((car) => (
                <TableRow key={car.ID}>
                  <TableCell align="right">{car.plate_id}</TableCell>
                  {/* <TableCell align="center">
                    <Box display="flex" justifyContent="center">
                      <Avatar src={car.avatar} />
                    </Box>
                  </TableCell> */}
                  <TableCell align="left">{car.brand}</TableCell>
                  <TableCell align="left">{car.color}</TableCell>
                  <TableCell align="left">{car.manufacture_year}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button onClick={() => CarEdit(car._id)}>Edit</Button>
                      <Button onClick={() => CarDelete(car.id)}>Del</Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Paper>
      </Container>
    </div>
    
  );
}