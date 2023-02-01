import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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

export default function Api() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Container className={classes.container} maxWidth="lg">    
      <Paper className={classes.paper}>
        <Box display="flex">
          <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Utilities - Public API
              </Typography>
           </Box>
        </Box>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Service Name</TableCell>
              <TableCell align="left">Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow>
                <TableCell align="left">Currency Converter</TableCell>
                <TableCell align="left">
                <Box>
                    <Link to="/publicapi/currencyconverter">
                    <Button variant="contained" color="primary">
                    Click
                </Button>
                </Link>
                </Box>
                </TableCell>
                <TableCell align="center">
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Documents</TableCell>
                <TableCell align="left">
                <Box>
                    <Link to="/upload">
                    <Button variant="contained" color="primary">
                    Click
                </Button>
                </Link>
                </Box>
                </TableCell>
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
