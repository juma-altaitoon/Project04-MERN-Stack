import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import Axios from 'axios'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { countryData } from "../data/Country";
import Autocomplete from '@mui/material/Autocomplete';
import { Radio } from '@mui/material'
import { RadioGroup } from "@mui/material/";
import { FormControlLabel } from "@mui/material/";
import FormControl from '@mui/material/FormControl';
import { FormLabel } from "@mui/material/";


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

export default function UserCreate() {
  const classes = useStyles();

  //Password click to see
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
 
  const handleSubmit = event => {
    event.preventDefault();
    var data = {
      'first_name': first_name,
      'last_name': last_name,
      'email_address': email_address,
      'phone_number': phone_number,
      'birthdate':birthdate,
      'gender': gender,
      'nationality':nationality,
      'national_id':national_id,
      'password':password,
      'license_issued':license_issued,
      'license_expiry':license_expiry,
      'user_type':user_type,
      'comment':comment
    }
    Axios.post("add", data, {
      headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
      }
  })
  .then((res) => {
    console.log(res)
    console.log("Record Added Successfully");
    window.location.href = '/user';
  })
  .catch((err) => {
    console.log("Error Adding Record");
    console.log(err);
  })
}

  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email_address, setEmail_address] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('true');
  const [nationality, setNationality] = useState([]);
  const [national_id, setNational_id] = useState('');
  const [password, setPassword] = useState('');
  const [license_issued, setLicense_issued] = useState('');
  const [license_expiry, setLicense_expiry] = useState('');
  const [user_type, setUser_type] = useState('true');
  const [comment, setComment] = useState('');


  const allNationality = countryData.map((countryData, index)=> (
    {label: (countryData.name),value: countryData.name}
  ))


  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create User
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="first_name"
                variant="outlined"
                required
                fullWidth
                id="first_name"
                label="First Name"
                onChange={(e) => setFirst_name(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="last_name"
                label="Last Name"
                onChange={(e) => setLast_name(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <FormLabel id="demo-column-radio-buttons-group-label">User Type</FormLabel>
                  <RadioGroup
                    column
                    aria-labelledby="demo-column-radio-buttons-group-label"
                    name="column-radio-buttons-group"
                    defaultValue={"true"}
                    onChange={(e) => setUser_type(e.target.value)}
                  >
                  <FormControlLabel  value="true" control={<Radio />} label="Staff" />
                  <FormControlLabel  value="false" control={<Radio />} label="Customer" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <FormLabel id="demo-column-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                    column
                    aria-labelledby="demo-column-radio-buttons-group-label"
                    name="column-radio-buttons-group"
                    defaultValue={"true"}
                    onChange={(e) => setGender(e.target.value)}
                  >
                  <FormControlLabel style={{color:"Blue"}} value="true" control={<Radio />} label="Male" />
                  <FormControlLabel style={{color:"Fuchsia"}}value="false" control={<Radio />} label="Female" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="birthdate"
                label="BirthDate"
                type="date"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone_number"
                label="phone number"
                onChange={(e) => setPhone_number(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="standard-adornment-password">
                <br/>
              </InputLabel>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email_address"
                label="Email"
                type="email"
                onChange={(e) => setEmail_address(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} >
              <InputLabel htmlFor="standard-adornment-password">
                Enter your Password *
              </InputLabel>
              <OutlinedInput label="Password" 
                id="password"
                required
                type={showPassword ? 'text' : 'password'}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment label="Password" position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Autocomplete
                disablePortal
                variant="outlined"
                required
                fullWidth
                name="nationality"
                id="nationality"
                label="Nationality"
                options={allNationality}
                renderInput={(params) => <TextField {...params} label="Nationality" variant="outlined"/>}
                onChange={(e, country) => setNationality(country.label)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="national_id"
                label="National ID"
                type="string"
                onChange={(e) => setNational_id(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="license_issued"
                label="license_issued"
                type="date"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => setLicense_issued(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="license_expiry"
                label="license_expiry"
                type="date"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => setLicense_expiry(e.target.value)}
              />
            </Grid>
            <Grid  item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                id="comment"
                label="comment"
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
            Create User
          </Button>
        </form>
        <br/>
      </div>
    </Container>
  );
}