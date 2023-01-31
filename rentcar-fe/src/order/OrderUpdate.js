import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
//import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
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
import { useSearchParams } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
 
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function OrderEdit(props) {
  const classes = useStyles();

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id")

  const [order, setOrder] = useState(props.order)
  const [total, setTotal] = useState('');

  useEffect(() => {
    editViewOrder(id)
  }, [])
  console.log(id);
  const editViewOrder = (id) => {
    Axios.get(`edit?id=${id}`, {
      headers:{
        "Authorization": "Bearer " + localStorage.getItem("token") 
      }
    })
    .then((res) =>{
      console.log("Order Page Loaded")
      console.log(id);
      console.log(res);
    
      setOrder(res.data.order);     
    })
    .catch(err =>{
      console.log("Order Page Failed to Load")
      console.log(err)
    })
}

const updateOrder = (order) => {
    Axios.put('update', order, {
      headers:{
        "Authorization": "Bearer " + localStorage.getItem("token") 
      }
    })
    .then((res) =>{
      console.log("Order Updated")
      window.location.href = '/order/';
      console.log(res);        
    })
    .catch(err =>{
      console.log("Order Update Failed")
      console.log(err)
    })
}

  
  
  const handleChange = (e) =>{
    const updatedOrder = {...order};
    updatedOrder[e.target.name] = e.target.value;
    let dateP = new Date(updatedOrder.pickup_date)
    let dateD = new Date(updatedOrder.drop_date)
    let diff_time = (dateD.getTime() - dateP.getTime())/86400000
    console.log(diff_time);
    updatedOrder.extra_cost = (updatedOrder.rent_price) * diff_time
    let newtotal = updatedOrder.extra_cost
    console.log("total",newtotal)

    setTotal(newtotal);
    // console.log(total);
    console.log(updatedOrder)
    setOrder(updatedOrder)
  }

  const handleSubmit = (e) =>{
    e.prevetDefault();
    updateOrder(order)
    e.target.reset();
  }
  console.log(order)
  return (
    <Container maxWidth="xs">
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Update Order
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
          <TextField
          id="outlined-read-only-input"
          label="User"
          variant="outlined"
          defaultValue=""
          
          InputLabelProps={{ shrink: true}}
          InputProps={{
            readOnly: true,
          }}

        />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
          id="outlined-read-only-input"
          label="Car"
          variant="outlined"
          defaultValue={""}
          InputLabelProps={{ shrink: true}}
          InputProps={{
            readOnly: true,
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
                InputLabelProps={{ shrink: true}}
                onChange={handleChange}
                // value={order.status}

                // if (order.status === "Booked" ? "selcted"="selected" : "")
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
                defaultValue={""}
                InputLabelProps={{ shrink: true}}
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
                defaultValue={""}
                InputLabelProps={{ shrink: true}}
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
              // value={carRate ? carRate : 0}
              InputLabelProps={{ shrink: true}}
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
              InputLabelProps={{ shrink: true}}
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
              InputLabelProps={{ shrink: true}}
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
                InputLabelProps={{ shrink: true}}
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
              type="number"
              id="mileage_before"
              label="Mileage Before"
              InputLabelProps={{ shrink: true}}
              // value={order.mileage_before}
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
              InputLabelProps={{ shrink: true}}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="extra_cost"
              variant="outlined"
              required
              label="Total"
              fullWidth
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
              InputLabelProps={{ shrink: true}}
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
          Update
        </Button>
      </form>
      <br></br>
    </div>
    </Container>
    );
    }