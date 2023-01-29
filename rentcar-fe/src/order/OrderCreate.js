import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
//import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Axios from 'axios'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function OrderCreate(props) {
  const classes = useStyles();


  const [newOrder, setNewOrder] = useState({});
  const [cars, setCars] = useState([]);
  const [users, setUsers] = useState([]);
  //  Get Car List 
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
      console.log("Error Retreiving Records");
      console.log(err);
    })
  }

  
  const addOrder = (order) => {
    Axios.post("add", order)
      .then((res) => {
          console.log("Order Added Successfully");
          window.location.href = '/order';
      })
      .catch((err) => {
          console.log("Error Adding Order");
          console.log(err);
      })
  }
  
  const handleChange = (e) =>{
    const order = {...newOrder};
    order[e.target.name]= e.target.value;
    let dateP = new Date(order.pickup_date)
    let dateD = new Date(order.drop_date)
    let diff_time = (dateD.getTime() - dateP.getTime())/86400000
    console.log(diff_time);
    order.extra_cost = (order.rent_price) * diff_time
    let total = order.extra_cost
    console.log("total",total)
    console.log(order);
    setNewOrder(order);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    addOrder(newOrder);
    e.target.reset();
  }

  return (
    <Container maxWidth="xs">
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Create Order
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="user"
              name="user"
              variant="outlined"
              // required
              fullWidth
              id="user"
              label="User"
              onChange={handleChange}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="car"
              variant="outlined"
              // required
              fullWidth
              id="car"
              label="Car"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="status"
              variant="outlined"
              required
              fullWidth
              id="status"
              label="Status"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="pickup_location"
              variant="outlined"
              required
              fullWidth
              id="pickup_location"
              label="Pickup Location"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="pickup_date"
              variant="outlined"
              required
              fullWidth
              id="pickup_date"
              label="Pickup Date"
              type="date"
              InputLabelProps={{shrink : true}}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="drop_location"
              variant="outlined"
              required
              fullWidth
              id="drop_location"
              label="Drop Location"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="drop_date"
              variant="outlined"
              required
              fullWidth
              id="drop_date"
              label="Drop Date"
              type="date"
              InputLabelProps={{ shrink: true}}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="rent_price"
              variant="outlined"
              required
              fullWidth
              id="rent_price"
              label="Rent Price"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="fuel_level_before"
              variant="outlined"
              // required
              fullWidth
              id="fuel_level_before"
              label="Fuel Level Before"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="fuel_level_after"
              variant="outlined"
              // required
              fullWidth
              id="fuel_level_after"
              label="Fuel Level After"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
              <TextField
                name="car_images_before"
                variant="outlined"
                // required
                fullWidth
                id="car_images_before"
                label="Car Images Before"
                onChange={handleChange}
              />
              <Button variant="contained" component="label">
                  Upload
               <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="car_images_after"
                variant="outlined"
                // required
                fullWidth
                id="car_images_after"
                label="Car Images After"
                onChange={handleChange}
              />
              <Button variant="contained" component="label">
                  Upload
               <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="mileage_before"
              variant="outlined"
              required
              fullWidth
              id="mileage_before"
              label="Mileage Before"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="mileage_after"
              variant="outlined"
              required
              fullWidth
              id="mileage_after"
              label="Mileage After"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="extra_cost"
              variant="outlined"
              required
              fullWidth
              id="extra_cost"
              label="Extra Cost"
              type="number"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="total"
              variant="outlined"
              // required
              fullWidth
              id="total"
              label="Total"
              type="number"
              // onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="comment"
              variant="outlined"
              required
              fullWidth
              id="comment"
              label="Comment"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Create
        </Button>
      </form>
    </div>
    </Container>
    );
    }