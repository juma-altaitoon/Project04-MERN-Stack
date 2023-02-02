import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Axios from 'axios'
import { FormLabel } from "@mui/material/";
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
  const [carId, setCarId] = useState('');
  const [userId, setUserId] = useState('');
  const [carRate, setCarRate] = useState('');
  
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
    Axios.post("add", order, {
      headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
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
    console.log(e.target.name)
    console.log(e.target.value)
   
    order[e.target.name]= e.target.value;
    let dateP = new Date(order.pickup_date)
    let dateD = new Date(order.drop_date)
    let diff_time = (dateD.getTime() - dateP.getTime())/86400000
    order.extra_cost = (order.rent_price) * diff_time
    let newtotal = order.extra_cost
    order.user= userId
    order.car= carId
    setTotal(newtotal);
    order.rent_price = carRate
    setNewOrder(order);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    addOrder(newOrder);
    e.target.reset();
  }

  const allUsers = users.map((user, key) =>(
    {label: (user.first_name+" "+user.last_name+" - "+user.email_address), value: user._id}
  ))
  const allCars = cars.map((car, index)=> (
    {label: (car.brand+" - "+car.plate_id), value: car._id, rate: car.rate}
  ))

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
              onChange={(e, b)=> { setUserId(b.value) }}
            />
          </Grid>
          <Grid item xs={12}>
          <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={allCars}
              name="car"
              renderInput={(params) => <TextField {...params} label="Car" variant="outlined" />}
              onChange={(e, b)=>{ 
                setCarId(b.value)
                setCarRate(b.rate)
              }}              
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
                defaultValue={""}
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
                defaultValue={''}
                onChange={handleChange}
              >
                <MenuItem value={"Bahrain International Airport"}>Bahrain International Airport</MenuItem>
                <MenuItem value={"Seef"}>Seef</MenuItem>
                <MenuItem value={"Juffair"}>Juffair</MenuItem>
                <MenuItem value={"Isa Town"}>Isa Town</MenuItem>
                <MenuItem value={"Saar"}>Saar</MenuItem>
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
                defaultValue={''}
                onChange={handleChange}
              >
                <MenuItem value={"Bahrain International Airport"}>Bahrain International Airport</MenuItem>
                <MenuItem value={"Seef"}>Seef</MenuItem>
                <MenuItem value={"Juffair"}>Juffair</MenuItem>
                <MenuItem value={"Isa Town"}>Isa Town</MenuItem>
                <MenuItem value={"Saar"}>Saar</MenuItem>
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
              type="number"
              id="rent_price"
              label="Rate per Day"
              InputProps={{readOnly: true}}
              InputLabelProps={{ shrink: true}}
              onChange={handleChange}
              value={carRate ? carRate : 0}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Fuel Level Before</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="fuel_level_before"
                label="Fuel Level Before"
                required
                defaultValue={""}
                InputLabelProps={{ shrink: true}}
                onChange={handleChange}
               >
                <MenuItem value={"Low"}>Low</MenuItem>
                <MenuItem value={"Medium"}>Medium</MenuItem>
                <MenuItem value={"Full"}>Full</MenuItem>
              </Select>
            </FormControl>

          </Grid>
          <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Fuel Level After</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="fuel_level_after"
                label="Fuel Level After"
                defaultValue={""}
                InputLabelProps={{ shrink: true}}
                onChange={handleChange}
               >
                <MenuItem value={"Low"}>Low</MenuItem>
                <MenuItem value={"Medium"}>Medium</MenuItem>
                <MenuItem value={"Full"}>Full</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* <Grid item xs={12}>
              <FormLabel variant="contained" component="label">
              
                <input hidden accept="image/*" multiple type="file" />
              </FormLabel>
              <TextField
                variant="outlined"
                name="car_images_before"
                required
                fullWidth
                id="car_images_before"
                type="file"
                label="Car Images Before"
                InputLabelProps={{ shrink: true}}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel variant="contained" component="label">
                <input hidden accept="image/*" multiple type="file" />
              </FormLabel>
              <TextField
                variant="outlined"
                name="car_images_after"
                // required
                fullWidth
                id="car_images_after"
                type="file"
                label="Car Images After"
                InputLabelProps={{ shrink: true}}
                onChange={handleChange}
              />
            </Grid> */}
            <Grid item xs={12} sm={6}>
            <TextField
              name="mileage_before"
              variant="outlined"
              required
              fullWidth
              type="number"
              id="mileage_before"
              label="Mileage Before"
              InputLabelProps={{ shrink: true}}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="mileage_after"
              variant="outlined"
              fullWidth
              type="number"
              id="mileage_after"
              label="Mileage After"
              InputLabelProps={{ shrink: true}}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="extra_cost"
              variant="outlined"
              required
              fullWidth
              InputProps={{readOnly: true}}
              label="Total"
              id="extra_cost"
              type="number"
              value={total? total:0}
              InputLabelProps={{ shrink: true}}
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
        <br></br>
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
      <br></br>
    </div>
    </Container>
    );
    }