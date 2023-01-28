import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
// import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import Axios from 'axios';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function CurrencyConverter() {
  const classes = useStyles();

  const [amount, setAmount] = useState('');
  const [fromcurrency, setFromcurrency] = useState('');
  const [tocurrency, setTocurrency] = useState('');
  const [converted, setConverted] = useState('');

  useEffect(() => {
    Convert()
  }, [])

  const Convert = () => {
    Axios.get(`https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${fromcurrency}&want=${tocurrency}&amount=${amount}`, {
      headers: {
        'X-RapidAPI-Key': '0c9633d523msh83a5dd5874dfea3p1139c7jsnaea56fbe543b',
        'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
        }
     })
      .then((res) => {
        console.log(res.data);
        setConverted(res.data.new_amount);
       })
      .catch(err => {
        console.log("Error Retreiving API");
        console.log(err);
      })
  }


  return (
    <div className={classes.root}>
    <Container className={classes.container} maxWidth="lg">    
      <Paper className={classes.paper}>
        <Box display="flex">
          <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Online Currency Converter
              </Typography>
           </Box>
          <Box>
            <Fab color="secondary" aria-label="add" variant='extended' onClick={() => Convert()}>
                <Typography>Convert </Typography>
            </Fab>
          </Box>
        </Box>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Amount</TableCell>
              <TableCell align="left">Source Currency</TableCell>
              <TableCell align="left">Destenation Currency</TableCell>
              <TableCell align="left">Converted</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow>
                <TableCell align="left">
                <TextField
                variant="outlined"
                required
                fullWidth
                type="number"
                id="amount"
                label="Amount"
                onChange={(e) => setAmount(e.target.value)}
                />
                </TableCell>
                <TableCell align="left">
                <TextField
                variant="outlined"
                required
                fullWidth
                id="fromcurrency"
                label="From Currency"
                onChange={(e) => setFromcurrency(e.target.value)}
                />
                </TableCell>
                <TableCell align="left">
                <TextField
                variant="outlined"
                required
                fullWidth
                id="tocurrency"
                label="To Currency"
                onChange={(e) => setTocurrency(e.target.value)}
                />
                </TableCell>
                <TableCell align="left">{converted}</TableCell>
                <TableCell align="center">
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
    </Container>
  </div>
  )
}
