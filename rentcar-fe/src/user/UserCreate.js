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
      'documents':documents,
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
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [national_id, setNational_id] = useState('');
  const [password, setPassword] = useState('');
  const [documents, setDocuments] = useState('');
  const [license_issued, setLicense_issued] = useState('');
  const [license_expiry, setLicense_expiry] = useState('');
  const [user_type, setUser_type] = useState('');
  const [comment, setComment] = useState('');

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
            <Grid item xs={12} sm={6}>
            <ToggleButtonGroup
                      color="primary"
                      value={gender}
                      exclusive
                      onChange={(e) => setGender(e.target.value)}
                      aria-label="Platform"
                    >
                      <ToggleButton value="true"> Male</ToggleButton>
                      <ToggleButton value="false"> Female</ToggleButton>
                    </ToggleButtonGroup>   
                    </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="nationality"
                label="Nationality"
                onChange={(e) => setNationality(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="national_id"
                label="National ID"
                onChange={(e) => setNational_id(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
            {/* <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                type="password"
                label="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid> */}
            <Grid item xs={12} sm={6} >
            <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        onChange={(e) => setPassword(e.target.value)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                //label="Password"
                />
                </Grid>
            <Grid item xs={12} sm={6}>
            
              <TextField
                variant="outlined"
                required
                fullWidth
                id="documents"
                label="documents"
                onChange={(e) => setDocuments(e.target.value)}
                
              /> <br />
              <Button variant="contained" component="label">
                  Upload
               <input hidden accept="image/*" multiple type="file" />
              </Button><br/>
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
            <Grid item xs={12} sm={6} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="user_type"
                label="User Type"
                onChange={(e) => setUser_type(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} >
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
            {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                {/* <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
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
                //label="Password"
                /> */}
              {/* <ToggleButtonGroup
                      color="primary"
                      value={gender}
                      exclusive
                      onChange={(e) => setGender(e.target.value)}
                      aria-label="Platform"
                    >
                      <ToggleButton value="true"> Male</ToggleButton>
                      <ToggleButton value="false"> Female</ToggleButton>
                    </ToggleButtonGroup>                         */}
          </Grid>
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
      </div>
    </Container>
  );
}