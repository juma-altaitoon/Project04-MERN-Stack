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
// import Avatar from '@mui/material/Avatar';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from "react-router-dom";
import Axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';


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

export default function OrderList() {
  const classes = useStyles();

  const [orders, setOrders] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({})


  useEffect(() => {
    getOrders()
  }, [])
  
  const getOrders = () => {
      Axios.get("index")  
      .then((res) => {
      console.log(res.data.orders)  
      setOrders(res.data.orders)
      })
      .catch(err =>{
        console.log("Error Loading Order List")
        console.log(err)
      })
  }
  // View OrderEdit and OrderDetail
  // const editViewOrder = (id) => {
  //     Axios.get(`edit?id=${id}`, {
  //       headers:{
  //         "Authorization": "Bearer " + localStorage.getItem("token") 
  //       }
  //     })
  //     .then((res) =>{
  //       console.log("Order Page Loaded")
  //       console.log(res);
  //       setIsEdit(true);
  //       setSelectedOrder(res.data.order);     
  //     })
  //     .catch(err =>{
  //       console.log("Order Page Failed to Load")
  //       console.log(err)
  //     })
  // }

  // const updateOrder = (order) => {
  //     Axios.put('update', order, {
  //       headers:{
  //         "Authorization": "Bearer " + localStorage.getItem("token") 
  //       }
  //     })
  //     .then((res) =>{
  //       console.log("Order Updated")
  //       console.log(res);
  //       getOrders();        
  //     })
  //     .catch(err =>{
  //       console.log("Order Update Failed")
  //       console.log(err)
  //     })
  // }

  const UpdateOrder = id => {
    window.location = window.location.href+'update?id='+id
  }

  const deleteOrder = (id) => {
      Axios.delete(`delete?id=${id}`, {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token") 
      }
      })
      .then((res) => {
        alert(res['message'])
        console.log("Order Deleted")
        console.log(res)
        getOrders();
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
              <Link to="/order/create">
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
              {orders.map((order, id) => (
                <TableRow key={id}>
                  <TableCell align="right">{order._id}</TableCell>
                  <TableCell align="center">{order.user ? order.user.first_name : ""}</TableCell>
                  <TableCell align="center">{order.car ? (order.car.brand+" - "+order.car.plate_id) : ""}</TableCell>
                  <TableCell align="left">{order.status}</TableCell>
                  <TableCell align="left">{order.extra_cost}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button onClick={() => UpdateOrder(order._id)}>Edit</Button>
                      <Button onClick={() => deleteOrder(order._id)}>Delete</Button>
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