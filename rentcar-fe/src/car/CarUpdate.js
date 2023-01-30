import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useSearchParams } from 'react-router-dom';
import Axios from 'axios'
import moment from 'moment'
import { FormLabel } from "@material-ui/core";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
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

export default function CarUpdate() {
  const classes = useStyles();

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id")
  useEffect(() => {
    Axios.get(`edit?id=${id}`, {
      headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
      }
      })
      .then(
        (result) => {
            setPlate_id(result.data.car.plate_id)
            setBrand(result.data.car.brand)
            setColor(result.data.car.color)
            setManufacture_year(result.data.car.manufacture_year)
            setCatagory(result.data.car.catagory)
            setCar_size(result.data.car.car_size)
            setSeats(result.data.car.seats)
            setEngine(result.data.car.engine)
            setFuel_type(result.data.car.fuel_type)
            setTransmission(result.data.car.transmission)
            setRate(result.data.car.rate)
            setMilage_limit(result.data.car.milage_limit)
            setInsurance_id(result.data.car.insurance_id)
            setInsurance_company(result.data.car.insurance_company)
            setInsurance_date(result.data.car.insurance_date)
            setRegistration_date(result.data.car.registration_date)
            setExpiry_date(result.data.car.expiry_date)
            setCar_images(result.data.car.car_images)
            setDocuments(result.data.car.documents)
            setComment(result.data.car.comment)
        }
      )
  }, [id])

  const handleSubmit = event => {
    event.preventDefault();
    var data = {
      'id': id,
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
    Axios.put(`update?id=${id}`, data,{
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
      })
    .then(res => {
      console.log("Record Updated Successfully");
      window.location.href = '/car';
    })
    .catch(err => {
      console.log("Error Editing Record");
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
          Update Car
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="plate_id"
                name="plate_id"
                variant="outlined"
                required
                fullWidth
                id="plate_id"
                label="Plate ID"
                value={plate_id}
                type="string"
                onChange={(e) => setPlate_id(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="brand"
                  label="Brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                >
                  <MenuItem value={"Toyota Camry"}>Toyota Camry</MenuItem>
                  <MenuItem value={"Toyota RAV4"}>Toyota RAV4</MenuItem>
                  <MenuItem value={"Ford Mustang"}>Ford Mustang</MenuItem>
                  <MenuItem value={"Ford Expedition"}>Ford Expedition</MenuItem>
                  <MenuItem value={"Honda Civic"}>Honda Civic</MenuItem>
                  <MenuItem value={"Nissan Sunny"}>Nissan Sunny</MenuItem>
                  <MenuItem value={"GMC Yukon"}>GMC Yukon</MenuItem>
                  <MenuItem value={"Chevrolet Traverse"}>Chevrolet Traverse</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Color</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="color"
                  label="Color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                >
                  <MenuItem value={"White"}>White</MenuItem>
                  <MenuItem value={"Black"}>Black</MenuItem>
                  <MenuItem value={"Red"}>Red</MenuItem>
                  <MenuItem value={"Blue"}>Blue</MenuItem>
                  <MenuItem value={"Silver"}>Silver</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="manufacture_year"
                label="Manufacture Year"
                value={moment(manufacture_year).format('YYYY-MM-DD')}
                type="date"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => setManufacture_year(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Catagory</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="catagory"
                  label="Catagory"
                  value={catagory}
                  onChange={(e) => setCatagory(e.target.value)}
                >
                  <MenuItem value={"Sport"}>Sport</MenuItem>
                  <MenuItem value={"Salon"}>Salon</MenuItem>
                  <MenuItem value={"Van"}>Van</MenuItem>
                  <MenuItem value={"SUV"}>SUV</MenuItem>
                  <MenuItem value={"Pickup"}>Pickup</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Car Size</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="car_size"
                  label="Car Size"
                  value={car_size}
                  onChange={(e) => setCar_size(e.target.value)}
                >
                  <MenuItem value={"Small Size"}>Small Size</MenuItem>
                  <MenuItem value={"Large Size"}>Mid Size</MenuItem>
                  <MenuItem value={"Large Size"}>Large Size</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Seats</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="seats"
                  label="Seats"
                  value={seats}
                  onChange={(e) => setSeats(e.target.value)}
                >
                  <MenuItem value={"4"}>4</MenuItem>
                  <MenuItem value={"5"}>5</MenuItem>
                  <MenuItem value={"6"}>6</MenuItem>
                  <MenuItem value={"7"}>7</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Engine</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="engine"
                  label="Engine"
                  value={engine}
                  onChange={(e) => setEngine(e.target.value)}
                >
                  <MenuItem value={"1.4 Litre"}>1.4 Litre</MenuItem>
                  <MenuItem value={"1.8 Litre"}>1.8 Litre</MenuItem>
                  <MenuItem value={"2.0 Litre"}>2.0 Litre</MenuItem>
                  <MenuItem value={"2.5 Litre"}>2.5 Litre</MenuItem>
                  <MenuItem value={"3.0 Litre"}>3.0 Litre</MenuItem>
                  {/* <MenuItem value={"Fuel"}>Fuel</MenuItem>
                  <MenuItem value={"Hybrid"}>Hybrid</MenuItem>
                  <MenuItem value={"Electric"}>Electric</MenuItem> */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Fuel Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="fuel_type"
                  label="Fuel Type"
                  value={fuel_type}
                  onChange={(e) => setFuel_type(e.target.value)}
                >
                  <MenuItem value={"Mumtaz"}>Mumtaz</MenuItem>
                  <MenuItem value={"Jayyid"}>Jayyid</MenuItem>
                  <MenuItem value={"Super"}>Super</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormLabel variant="contained" component="label">
                Transmission
              </FormLabel>
              <ToggleButtonGroup
                color="primary"
                variant="outlined"
                value={transmission.toString()}
                id="transmission"
                label="Transmission"
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
                value={rate}
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
                value={milage_limit}
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
                value={insurance_id}
                type="string"
                onChange={(e) => setInsurance_id(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Insurance Company</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="insurance_company"
                  label="Insurance Company"
                  value={insurance_company}
                  onChange={(e) => setColor(e.target.value)}
                >
                  <MenuItem value={"Takaful"}>Takaful</MenuItem>
                  <MenuItem value={"AXA"}>AXA</MenuItem>
                  <MenuItem value={"BNI"}>BNI</MenuItem>
                  <MenuItem value={"Gulf Union"}>Gulf Union</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="insurance_date"
                label="Insurance Date"
                value={moment(insurance_date).format('YYYY-MM-DD')}
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
                value={moment(registration_date).format('YYYY-MM-DD')}
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
                value={moment(expiry_date).format('YYYY-MM-DD')}
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
                required
                fullWidth
                id="car_images"
                value={car_images}
                type="string"
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
                value={documents}
                type="string"
                onChange={(e) => setDocuments(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                id="comment"
                label="Comment"
                value={comment}
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
            Update Car
          </Button>
        </form>
      </div>
    </Container>
  );
}