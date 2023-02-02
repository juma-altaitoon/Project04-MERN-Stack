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

export default function Order() {
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
//const [open, setOpen] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders()
  }, [])
  
  const getOrders = () => {
    Axios.get("order/index", {
      headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
      }
     })  
      .then((res) => {
      setOrders(res.data.orders)
      })
      .catch(err =>{
        console.log("Error Loading Order List")
        console.log(err)
      })
  }

  const UpdateOrder = id => {
    window.location = window.location.href+'/update?id='+id
  }

  const DeleteOrder = (id) => {
      Axios.delete(`order/delete?id=${id}`, {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token") 
      }
      })
      .then((res) => {
        console.log("Order Deleted")
        window.location.href = '/order';
        }
      )
      .catch(err =>{
        console.log("Order Delete Failed")
        console.log(err)
      })
    }


  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">    
        <Paper className={classes.paper}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                ORDERS
              </Typography>
            </Box>
            <Box>
              <Link to="create">
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
                <TableCell align="center">ORDER ID</TableCell>
                <TableCell align="center">User</TableCell>
                <TableCell align="center">Car</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Amount</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.slice(pg * rpg, pg * rpg + rpg).map((order, id) => (
                <TableRow key={id}>
                  <TableCell align="right">{order._id}</TableCell>
                  <TableCell align="center">{order.user ? order.user.first_name : ""}</TableCell>
                  <TableCell align="center">{order.car ? (order.car.brand+" - "+order.car.plate_id) : ""}</TableCell>
                  <TableCell align="left">{order.status}</TableCell>
                  <TableCell align="left">{order.extra_cost}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button startIcon={<ModeEditIcon />} onClick={() => UpdateOrder(order._id)}>Edit</Button>
                      <Button startIcon={<DeleteIcon />} onClick={() =>DeleteOrder(order._id)}>Delete</Button>
                    </ButtonGroup> 
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={orders.length}
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