import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
//import InputLabel from '@material-ui/core/InputLabel';
import Axios from 'axios'
import { Form } from "react-router-dom";
import { FormLabel } from "@material-ui/core";
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

export default function CarCreate() {
  const classes = useStyles();
  
  const handleSubmit = event => {
    event.preventDefault();
    var data = {
      'plate_id': plate_id,
      'brand': brand,
      'color': color,
      'manufacture_year': manufacture_year,
      'catagory': catagory,
      'car_size': car_size,
      'seats': seats,
      'engine': engine,
      'fuel_type': fuel_type,
      'transmission': transmission,
      'rate': rate,
      'milage_limit': milage_limit,
      'insurance_id': insurance_id,
      'insurance_company': insurance_company,
      'insurance_date': insurance_date,
      'registration_date': registration_date,
      'expiry_date': expiry_date,
      'car_images': car_images,
      'documents': documents,
      'comment': comment,
    }
    Axios.post("add", data, {
      headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
    .then((res) => {
        console.log(res)
        console.log("Record Added Successfully");
        window.location.href = '/car';
    })
    .catch((err) => {
        console.log("Error Adding Record");
        console.log(err);
    })
  }

  const [plate_id, setPlate_id] = useState('');
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const [manufacture_year, setManufacture_year] = useState('');
  const [catagory, setCatagory] = useState('');
  const [car_size, setCar_size] = useState('');
  const [seats, setSeats] = useState('');
  const [engine, setEngine] = useState('');
  const [fuel_type, setFuel_type] = useState('');
  const [transmission, setTransmission] = useState('');
  const [rate, setRate] = useState('');
  const [milage_limit, setMilage_limit] = useState('');
  const [insurance_id, setInsurance_id] = useState('');
  const [insurance_company, setInsurance_company] = useState('');
  const [insurance_date, setInsurance_date] = useState('');
  const [registration_date, setRegistration_date] = useState('');
  const [expiry_date, setExpiry_date] = useState('');
  const [car_images, setCar_images] = useState('');
  const [documents, setDocuments] = useState('');
  const [comment, setComment] = useState('');

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create Car
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="plate_id"
                variant="outlined"
                required
                fullWidth
                id="plate_id"
                label="Plate ID"
                type="string"
                onChange={(e) => setPlate_id(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="brand"
                label="Brand"
                type="string"
                onChange={(e) => setBrand(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="color"
                label="Color"
                type="string"
                onChange={(e) => setColor(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="manufacture_year"
                label="Manufacture Year"
                type="date"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => setManufacture_year(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="catagory"
                label="Catagory"
                type="string"
                onChange={(e) => setCatagory(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="car_size"
                label="Car Size"
                type="string"
                onChange={(e) => setCar_size(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="seats"
                label="Seats"
                type="number"
                onChange={(e) => setSeats(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="engine"
                label="Engine"
                type="string"
                onChange={(e) => setEngine(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="fuel_type"
                label="Fuel Type"
                type="string"
                onChange={(e) => setFuel_type(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ToggleButtonGroup
                  color="primary"
                  variant="outlined"
                  value={transmission}
                  exclusive
                  fullWidth
                  required
                  onChange={(e) => setTransmission(e.target.value)}
                  aria-label="Platform"
              >
                  <ToggleButton value="true"> Automatic</ToggleButton>
                  <ToggleButton value="false"> Manual</ToggleButton>
                </ToggleButtonGroup>  
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="rate"
                label="Rate"
                type="number"
                onChange={(e) => setRate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="milage_limit"
                label="Milage Limit"
                type="number"
                onChange={(e) => setMilage_limit(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="insurance_id"
                label="Insurance ID"
                type="string"
                onChange={(e) => setInsurance_id(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="insurance_company"
                label="Insurance Company"
                type="string"
                onChange={(e) => setInsurance_company(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="insurance_date"
                label="Insurance Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => setInsurance_date(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="registration_date"
                label="Registration Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => setRegistration_date(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="expiry_date"
                label="Expiry Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => setExpiry_date(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormLabel variant="contained" component="label">
                Car Images
                <input hidden accept="image/*" multiple type="file" />
              </FormLabel>
              <TextField
                variant="outlined"
                // required
                fullWidth
                id="car_images"
                type="file"
                onChange={(e) => setCar_images(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormLabel variant="contained" component="label">
                Documents
                <input hidden accept="image/*" multiple type="file" />
              </FormLabel>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="documents"
                type="file"
                onChange={(e) => setDocuments(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="comment"
                label="Comment"
                type="string"
                onChange={(e) => setComment(e.target.value)}
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
            Create Car
          </Button>
        </form>
      </div>
    </Container>
  );
}