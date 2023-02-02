import React, { useState , useEffect } from "react";
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
import Autocomplete from '@mui/material/Autocomplete';
import { useSearchParams } from 'react-router-dom';
import moment from 'moment'

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

export default function OrderUpdate() {
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
                setUsers(result.data.order.users)
                setCars(result.data.order.cars)
                setStatus(result.data.order.status)
                setPickup_location(result.data.order.pickup_location)
                setPickup_date(result.data.order.pickup_date)
                setDrop_location(result.data.order.drop_location)
                setDrop_date(result.data.order.drop_date)
                setRent_price(result.data.order.rent_price)
                setFuel_level_before(result.data.order.fuel_level_before)
                setFuel_level_after(result.data.order.fuel_level_after)
                setMileage_before(result.data.order.mileage_before)
                setMileage_after(result.data.order.mileage_after)
                setExtra_cost(result.data.order.extra_cost)
                setComment(result.data.order.comment)
            }
        )
    }, [id])

    const handleSubmit = event => {
        event.preventDefault();
        var data = {
            'id': id,
            'cars': cars,
            'users': users,
            'status': status,
            'pickup_location': pickup_location,
            'pickup_date': pickup_date,
            'drop_location': drop_location,
            'drop_date': drop_date,
            'rent_price': rent_price,
            'fuel_level_before': fuel_level_before,
            'fuel_level_after': fuel_level_after,
            'mileage_before': mileage_before,
            'mileage_after': mileage_after,
            'extra_cost': extra_cost,
            'comment': comment,
        }
        Axios.put(`update?id=${id}`, data,{
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
          })
        .then(res => {
          console.log("Record Updated Successfully");
          window.location.href = '/order';
        })
        .catch(err => {
          console.log("Error Editing Record");
          console.log(err);
        })
    } 

    const [users, setUsers] = useState("");
    const [cars, setCars] = useState("");
    const [status, setStatus] = useState("");
    const [pickup_location, setPickup_location] = useState("");
    const [pickup_date, setPickup_date] = useState("");
    const [drop_location, setDrop_location] = useState("");
    const [drop_date, setDrop_date] = useState("");
    const [rent_price, setRent_price] = useState("");
    const [fuel_level_before, setFuel_level_before] = useState("");
    const [fuel_level_after, setFuel_level_after] = useState("");
    const [mileage_before, setMileage_before] = useState("");
    const [mileage_after, setMileage_after] = useState("");
    const [extra_cost, setExtra_cost] = useState("");
    const [comment, setComment] = useState("");

    const handleChange = (e) =>{
        let datePickup = new Date(pickup_date)
        let dateDrop = new Date(drop_date)
        let diff_time = (dateDrop.getTime() - datePickup.getTime())/86400000

        extra_cost = (rent_price) * diff_time
        setExtra_cost(extra_cost);
    }

    // const allUsers = users.map((user, key) =>(
    //     {label: (user.first_name+" "+user.last_name+" - "+user.email_address), value: user._id}
    // ))
    // const allCars = cars.map((car, index)=> (
    //     {label: (car.brand+" - "+car.plate_id), value: car._id, rate: car.rate}
    // ))


    return (
        <Container maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Update Order
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            {/* <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                name= "users"
                                value={users}
                                options={allUsers}
                                renderInput={(params) => <TextField {...params} label="User" variant="outlined"/>}
                                onChange={(e) => setUsers(e.target.value)}
                            /> */}
                        </Grid>
                        <Grid item xs={12}>
                            {/* <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                value={cars}
                                options={allCars}
                                name="cars"
                                renderInput={(params) => <TextField {...params} label="Car" variant="outlined" />}
                                onChange={(e) => {
                                    setCars(e.target.value) 
                                    setRent_price(e.target.value)    // rate
                                }}
                            /> */}
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="status"
                                    label="Status"
                                    value={status}
                                    required
                                    onChange={(e) => setStatus(e.target.value)}
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
                                    value={pickup_location}
                                    required
                                    onChange={(e) => setPickup_location(e.target.value)}
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
                                value={moment(pickup_date).format('YYYY-MM-DD')}
                                type="date"
                                InputLabelProps={{shrink : true}}
                                onChange={(e) => setPickup_date(e.target.value)}
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
                                    value={drop_location}
                                    required
                                    onChange={(e) => setDrop_location(e.target.value)}
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
                                value={moment(drop_date).format('YYYY-MM-DD')}
                                type="date"
                                InputLabelProps={{shrink: true}}
                                onChange={(e) => setDrop_date(e.target.value)}
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
                                label="Rate Per Day (BHD)"
                                value={rent_price}
                                InputProps={{readOnly: true}}
                                onChange={(e) => setRent_price(e.target.value)}
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
                                    value={fuel_level_before}
                                    required
                                    onChange={(e) => setFuel_level_before(e.target.value)}
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
                                    value={fuel_level_after}
                                    required
                                    onChange={(e) => setFuel_level_after(e.target.value)}
                                >
                                    <MenuItem value={"Low"}>Low</MenuItem>
                                    <MenuItem value={"Medium"}>Medium</MenuItem>
                                    <MenuItem value={"Full"}>Full</MenuItem>
                                </Select>
                            </FormControl>
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
                                value={mileage_before}
                                onChange={(e) => setMileage_before(e.target.value)}
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
                                value={mileage_after}
                                onChange={(e) => setMileage_after(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="extra_cost"
                                variant="outlined"
                                required
                                fullWidth
                                InputProps={{readOnly: true}}
                                label="Total"
                                id="extra_cost"
                                type="number"
                                value={extra_cost}
                                onChange={(e) => {
                                    let total = handleChange(e.target.value)
                                    setExtra_cost(total)
                                }
                            }
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
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                        </Grid>

                    </Grid>
                    <br/>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Update Order
                    </Button>
                </form>
                <br/>
            </div>
        </Container>
    );
}