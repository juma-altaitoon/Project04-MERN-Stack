import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useSearchParams } from 'react-router-dom';
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

export default function UserUpdate() {
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
          setFirst_name(result.data.user.first_name)
          setLast_name(result.data.user.last_name)
          setEmail_address(result.data.user.email_address)
          setPhone_number(result.data.user.phone_number)
          setBirthdate(result.data.user.birthdate)
          setGender(result.data.user.gender)
          setNationality(result.data.user.nationality)
          setNational_id(result.data.user.national_id)
          setPassword(result.data.user.password)
          setDocuments(result.data.user.documents)
          setLicense_issued(result.data.user.license_issued)
          setLicense_expiry(result.data.user.license_expiry)
          setUser_type(result.data.user.user_type)
          setComment(result.data.user.comment)
        }
      )
      }, [id])

  const handleSubmit = event => {
    event.preventDefault();
    var data = {
        'id': id,
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
    Axios.put(`update?id=${id}`, data,{
      headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
      }
      })
    .then(res => {
        console.log("Record Updated Successfully");
        window.location.href = '/user';
    })
    .catch(err => {
        console.log("Error Editing Record");
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
          Update User
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="first_name"
                name="first_name"
                variant="outlined"
                required
                fullWidth
                id="first_name"
                label="First Name"
                value={first_name}
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
                value={last_name}
                onChange={(e) => setLast_name(e.target.value)}
              />
            </Grid>
        
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="birthdate"
                label="BirthDate"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="gender"
                label="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="nationality"
                label="nationality"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="national_id"
                label="national_id"
                value={national_id}
                onChange={(e) => setNational_id(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone_number"
                label="phone number"
                value={phone_number}
                onChange={(e) => setPhone_number(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email_address"
                label="Email"
                value={email_address}
                onChange={(e) => setEmail_address(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="documents"
                label="documents"
                value={documents}
                onChange={(e) => setDocuments(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="license_issued"
                label="license_issued"
                value={license_issued}
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
                value={license_expiry}
                onChange={(e) => setLicense_expiry(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="user_type"
                label="user_type"
                value={user_type}
                onChange={(e) => setUser_type(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="comment"
                label="comment"
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
            Update User
          </Button>
        </form>
      </div>
    </Container>
  );
}