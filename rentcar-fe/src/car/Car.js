import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from "react-router-dom";
import Axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { TablePagination } from '@mui/material';


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
  const [pg, setpg] = React.useState(0);
  const [rpg, setrpg] = React.useState(5);
  
    function handleChangePage(event, newpage) {
        setpg(newpage);
    }
  
    function handleChangeRowsPerPage(event) {
        setrpg(parseInt(event.target.value, 10));
        setpg(0);
    }

  const [cars, setCars] = useState([]);
  useEffect(() => {
     CarsGet()
  }, [])
  
  const CarsGet = () => {
    Axios.get("car/index", {
      headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
      }
     })
      .then((res) => {
        setCars(res.data.cars);
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
    Axios.delete(`car/delete?id=${id}`, {
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

  const today = new Date();
  const year = today.getFullYear();


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
              <Link to="create">
              <Button startIcon={<AddCircleOutlineIcon />} variant="contained" color="primary">
                  CREATE
                </Button>
              </Link>
            </Box>
          </Box>
          <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Plate ID</TableCell>
                <TableCell align="left">Brand</TableCell>
                <TableCell align="left">Color</TableCell>
                <TableCell align="left">Car Age</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            { cars.slice(pg * rpg, pg * rpg + rpg).map((car, id) => {
              return ( 
                <TableRow key={id}>
                  <TableCell align="left">{car.plate_id}</TableCell>
                  <TableCell align="left">{car.brand}</TableCell>
                  <TableCell align="left">{car.color}</TableCell>
                  <TableCell align="left">{year - car.manufacture_year}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button startIcon={<ModeEditIcon />} onClick={() => CarUpdate(car._id)}>Edit</Button>
                      <Button startIcon={<DeleteIcon />} onClick={() => CarDelete(car._id)}>Delete</Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              )
            })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={cars.length}
                rowsPerPage={rpg}
                page={pg}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
      </Container>
    </div>
    
  );
  
}