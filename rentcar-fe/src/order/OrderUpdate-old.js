import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Axios from 'axios'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSearchParams } from 'react-router-dom';
import moment from 'moment'

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

export default function OrderUpdate() {
  const classes = useStyles();

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id")
 
  const [order, setOrder] = useState({})
  const [total, setTotal] = useState('');
  
  useEffect(() => {
    Axios.get(`edit?id=${id}`, {
      headers:{
        "Authorization": "Bearer " + localStorage.getItem("token") 
      }
    })
    .then((res) =>{
      console.log("Order Page Loaded")
      setOrder(res.data.order);     
    })
    .catch(err =>{
      console.log("Order Page Failed to Load")
      console.log(err)
    })
  }, [id])
 
  const handleChange = (e) =>{
    const attributeToChange = e.target.name
    const newValue = e.target.value

    const updatedOrder = {...order};
    updatedOrder[attributeToChange] = newValue;
    let dateP = new Date(updatedOrder.pickup_date)
    let dateD = new Date(updatedOrder.drop_date)
    let diff_time = (dateD.getTime() - dateP.getTime())/86400000
    updatedOrder.extra_cost = (updatedOrder.rent_price) * diff_time
    let newtotal = updatedOrder.extra_cost
    setTotal(newtotal);
    console.log(updatedOrder)
    setOrder(updatedOrder)
  }

  const handleSubmit = (e) =>{
    e.prevetDefault();
    const id = order._id
  //  console.log(data)
    Axios.put(`update?id=${id}`, order, {
      headers:{
        "Authorization": "Bearer " + localStorage.getItem("token") 
      }
    })
    .then(res =>{
      console.log("Order Updated")
      window.location.href = '/order';
    })
    .catch(err =>{
      console.log("Order Update Failed")
      console.log(err)
    })
  }

  return (
    <Container maxWidth="xs">
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Update Order
        +{id}
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
     
      {/* <input type="hidden" name="id" value={order._id}/> */}
     
        <Grid container spacing={2}>
          {/* <Grid item xs={12} sm={6}>
          <TextField
          id="outlined-read-only-input"
          label="User"
          variant="outlined"
          // InputLabelProps={{ shrink: true}}
          InputProps={{ readOnly: true }}
         value={order.user ? (order.user.first_name+" "+order.user.last_name) :""}
       // value={order.user}

        />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
          id="outlined-read-only-input"
          label="Car"
          variant="outlined"
          // InputLabelProps={{ shrink: true}}
          InputProps={{
            readOnly: true,
          }}
          value={order.car ? (order.car.brand+" "+order.car.plate_id) : " "}
        />
          </Grid> */}
          <Grid item xs={12}>
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="status"
                label="Status"
                // defaultValue={order.status ? order.status : ""}
                // InputLabelProps={{ shrink: true}}
                onChange={handleChange}
                value={order.status}
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
                onChange={handleChange}
                value={order.pickup_location ? order.pickup_location : ""}
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
              value={moment(order.pickup_date).format('YYYY-MM-DD')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Drop Location</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="drop_location"
                label="Drop Location"
                onChange={handleChange}
                value={order.drop_location ? order.drop_location : ""}
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
             value={moment(order.drop_date).format('YYYY-MM-DD')}
             
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
              // defaultValue={order.rent_price ? order.rent_price : 0}
              InputProps={{readOnly: true}}
              // InputLabelProps={{ shrink: true}}
              onChange={handleChange}
              value={order.rent_price ? order.rent_price : 0}
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
                // defaultValue={order.fuel_level_before ? order.fuel_level_before : ""}
                // InputLabelProps={{ shrink: true}}
                onChange={handleChange}
                value={order.fuel_level_before ? order.fuel_level_before : ""}
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
                required
                // defaultValue={order.fuel_level_after ? order.fuel_level_after : ""}
                // InputLabelProps={{ shrink: true}}
                onChange={handleChange}
                value={order.fuel_level_after ? order.fuel_level_after : ""}
               >
                <MenuItem value={"Low"}>Low</MenuItem>
                <MenuItem value={"Medium"}>Medium</MenuItem>
                <MenuItem value={"Full"}>Full</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* <Grid item xs={12} sm={6}>
              <TextField
                name="car_images_before"
                variant="outlined"
                // required
                fullWidth
                id="car_images_before"
                label="Car Images Before"
                // defaultValue={order.car_images_before ? order.car_images_before : ""}
                // inputLabelProps={{ shrink: true}}
                onChange={handleChange}
                // value={order.car_images_before ? order.car_images_before : ""}
              />
              <Button variant="contained" component="label">
                  Upload
               <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Grid> */}
            {/* <Grid item xs={12} sm={6}>
              <TextField
                name="car_images_after"
                variant="outlined"
                // required
                fullWidth
                id="car_images_after"
                label="Car Images After"
                // defaultValue={order.car_images_after ? order.car_images_after : ""}
                // InputLabelProps={{ shrink: true}}
                onChange={handleChange}
                // value={order.car_images_after ? order.car_images_after : ""}
              />
              <Button variant="contained" component="label">
                  Upload
               <input hidden accept="image/*" multiple type="file" />
              </Button>
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
              // defaultValue={order.mileage_before ? order.mileage_before : ""}
              // InputLabelProps={{ shrink: true}}
              value={order.mileage_before ? order.mileage_before : ""}
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
              type="number"
              label="Mileage After"
              // defaultValue={order.mileage_after ? order.mileage_after : ""}
              // InputLabelProps={{ shrink: true}}
              value={order.mileage_after ? order.mileage_after : ""}
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
              // defaultValue={order.extra_cost ? order.extra_cost : 0}
              id="extra_cost"
              type="number"
              value={order.extra_cost ? order.extra_cost : 0}
              InputProps={{readOnly: true}}
              // InputLabelProps={{ shrink: true}}
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
              value={order.comment}
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