import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';
import Axios from 'axios'

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

export default function CarEdit() {
  const classes = useStyles();

  const { id } = useParams();
  useEffect(() => {
    fetch("car/index/"+id)
      .then(res => res.json())
      .then(
        (result) => {
            setPlate_id(result.car.plate_id)
            setBrand(result.car.brand)
            setColor(result.car.color)
            setManufacture_year(result.car.manufacture_year)
            setCatagory(result.car.catagory)
            setCar_size(result.car.car_size)
            setSeats(result.car.seats)
            setEngine(result.car.engine)
            setFuel_type(result.car.fuel_type)
            setTransmission(result.car.transmission)
            setRate(result.car.rate)
            setMilage_limit(result.car.milage_limit)
            setInsurance_id(result.car.insurance_id)
            setInsurance_company(result.car.insurance_company)
            setInsurance_date(result.car.insurance_date)
            setRegistration_date(result.car.registration_date)
            setExpiry_date(result.car.expiry_date)
            setCar_images(result.car.car_images)
            setDocuments(result.car.documents)
            setComment(result.car.comment)
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
      'registration_date': color,
      'expiry_date': expiry_date,
      'car_images': car_images,
      'documents': documents,
      'comment': comment,
    }
    fetch('car/update', {
      method: 'PUT',
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
          window.location.href = '/';
        }
      }
    )
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
          Car
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="plate_id"
                name="plate_id"
                variant="outlined"
                required
                fullWidth
                id="plate_id"
                label="Plate ID"
                value={plate_id}
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
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="color"
                label="Color"
                value={color}
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
                value={manufacture_year}
                onChange={(e) => setManufacture_year(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="catagory"
                label="Catagory"
                value={catagory}
                onChange={(e) => setCatagory(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="car_size"
                label="Car Size"
                value={car_size}
                onChange={(e) => setCar_size(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="seats"
                label="Seats"
                value={seats}
                onChange={(e) => setSeats(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="engine"
                label="Engine"
                value={engine}
                onChange={(e) => setEngine(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="fuel_type"
                label="Fuel Type"
                value={fuel_type}
                onChange={(e) => setFuel_type(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="transmission"
                label="Transmission"
                value={transmission}
                onChange={(e) => setTransmission(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="rate"
                label="Rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="milage_limit"
                label="Milage Limit"
                value={milage_limit}
                onChange={(e) => setMilage_limit(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="insurance_id"
                label="Insurance ID"
                value={insurance_id}
                onChange={(e) => setInsurance_id(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="insurance_company"
                label="Insurance Company"
                value={insurance_company}
                onChange={(e) => setInsurance_company(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="insurance_date"
                label="Insurance Date"
                value={insurance_date}
                onChange={(e) => setInsurance_date(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="registration_date"
                label="Registration Date"
                value={registration_date}
                onChange={(e) => setRegistration_date(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="expiry_date"
                label="Expiry Date"
                value={expiry_date}
                onChange={(e) => setExpiry_date(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="car_images"
                label="Car Images"
                value={car_images}
                onChange={(e) => setCar_images(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="documents"
                label="Documents"
                value={documents}
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
            Update
          </Button>
        </form>
      </div>
    </Container>
  );
}