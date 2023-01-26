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

export default function OrderList() {
  const classes = useStyles();

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    ordersGet()
  }, [])
  
  const ordersGet = () => {
    fetch("order/index")
      .then(res => res.json())
      .then(
        (result) => {
          setOrders(result)
        }
      )
  }

  const UpdateOrder = (id) => {
    window.location = '/order/update/'+id
  }

  const OrderDelete = (id) => {
    var data = {
      'id': id
    }
    fetch('order/delete', {
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
          ordersGet();
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
                ORDERS
              </Typography>
            </Box>
            <Box>
              <Link to="/order/add">
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
                <TableCell align="right">ORDER ID</TableCell>
                <TableCell align="center">User ID</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Amount</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.ID}>
                  <TableCell align="right">{order.id}</TableCell>
                  <TableCell align="center">{order.user.first_name}</TableCell>
                  <TableCell align="left">{order.status}</TableCell>
                  <TableCell align="left">{order.rent_price}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button onClick={() => UpdateOrder(order.id)}>Edit</Button>
                      <Button onClick={() => OrderDelete(order.id)}>Delete</Button>
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