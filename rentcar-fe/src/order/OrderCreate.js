import React, { useEffect, useState } from "react";
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
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
  const [total, setTotal] = useState('');
  // const [car, setCar] = useState([]);
  // const [user, setUser] = useState([]);
  
  useEffect(() => {
    CarsGet();
    UsersGet();
  }, [])
  
  //  Get Car List 
  const CarsGet = () => {
    Axios.get("car/index", {
      headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
      }
     })
      .then((res) => {
        console.log(res)
        setCars(res.data.cars);
       })
      .catch(err => {
        console.log("Error Retreiving Records");
        console.log(err);
      })
}
  // Get Use List
  const UsersGet = () => {
  Axios.get("user/index", {
    headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
    }
   })
    .then((res) => {
      console.log(res)
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
    let newtotal = order.extra_cost
    console.log("total",newtotal)

    setTotal(newtotal);
    console.log(total);
    console.log(order);
    setNewOrder(order);
    // updatetotal(order);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
  
    addOrder(newOrder);
    e.target.reset();
  }
// console.log(users, cars)
  const allUsers = users.map((user, key) =>(
    {label: (user.first_name+" "+user.last_name+" - "+user.email_address), value: user.id}
  ))
  const allCars = cars.map((car, index)=> (
    {label: (car.brand+" - "+car.plate_id), value: car.id}
  ))

// console.log(cars)
// console.log(users)


  return (
    <Container maxWidth="xs">
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Create Order
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <Autocomplete
              disablePortal
              id="combo-box-demo"
              name= "user"
              options={allUsers}
              // isOptionEqualToValue={(option, value) => option.value === value.value}
              
              renderInput={(params) => <TextField {...params} label="User" variant="outlined"/>}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
          <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={allCars}
              name="car"
              renderInput={(params) => <TextField {...params} label="Car" variant="outlined" />}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="status"
                label="Status"
                onChange={handleChange}
              >
                <MenuItem value={"Booked"}>Booked</MenuItem>
                <MenuItem value={"Collected"}>Collected</MenuItem>
                <MenuItem value={"Completed"}>Completed</MenuItem>
                <MenuItem value={"Canceled"}>Canceled</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Pickup Location</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="pickup_location"
                label="Pickup Location"
                onChange={handleChange}
              >
                <MenuItem value={"Location 1"}>Location 1</MenuItem>
                <MenuItem value={"Location 2"}>Location 2</MenuItem>
                <MenuItem value={"Location 3"}>Location 3</MenuItem>
              </Select>
            </FormControl>
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
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Drop Location</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="drop_location"
                // value={}
                label="Drop Location"
                onChange={handleChange}
              >
                <MenuItem value={"Location 1"}>Location 1</MenuItem>
                <MenuItem value={"Location 2"}>Location 2</MenuItem>
                <MenuItem value={"Location 3"}>Location 3</MenuItem>
              </Select>
            </FormControl>
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
              label="Rate per Day"
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
              type="number"
              value={total}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="comment"
              variant="outlined"
              required
              fullWidth
              multiline
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