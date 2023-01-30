import React from 'react'
import Weather from './publicapi/Weather'
import Typography from '@material-ui/core/Typography'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';





const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    
     <div>
       <Weather />
       <br />
       <hr></hr>
       <br />
       <br />

                <Grid container spacing={2}>

                    <Grid item xs={4}>
                    <CardActionArea>
                       <CardContent>
                      <h2 style= {{textAlign:"center"}}>flexible Booking Process</h2>
                      <Item>No need for huge up-front costs. Search for the best deal for you and book
                           it with only a small advance payment, you will pay the remaining amount during
                           the car pickup time.</Item>
                        </CardContent>
                    </CardActionArea>
                    </Grid>
                    
                    <Grid item xs={4}>
                    <CardActionArea>
                       <CardContent>
                      <h2 style= {{textAlign:"center"}}>Free Extras & Cancellation</h2>
                      <Item>We constantly evaluate our partners in the level of service they provide in each location
                           so we can ensure the quality of service you will receive.</Item>
                           </CardContent>
                    </CardActionArea>
                    </Grid>
                    
                    <Grid item xs={4}>
                    <CardActionArea>
                       <CardContent>
                      <h2 style= {{textAlign:"center"}}>Quality & Expertise</h2>
                      <Item>We constantly evaluate our partners in the level of service they provide in each location
                            so we can ensure the quality of service you will receive.</Item>
                        </CardContent>
                    </CardActionArea>
                    </Grid>
                    
                </Grid>
                            
     </div>

  )
}
// // import * as React from 'react';
// import Weather from './publicapi/Weather'
// import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const theme = createTheme();

// export default function Album() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <AppBar position="relative">
//         <Toolbar>
//           <CameraIcon sx={{ mr: 2 }} />
//           <Typography variant="h6" color="inherit" noWrap>
//             Album layout
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <main>
//         {/* Hero unit */}
//         <Box
//           sx={{
//             bgcolor: 'background.paper',
//             pt: 8,
//             pb: 6,
//           }}
//         >
//           <Container maxWidth="sm">
//               <Weather />
     
//           </Container>
//         </Box>
//         <Container sx={{ py: 8 }} maxWidth="md">
//           {/* End hero unit */}
//           <Grid container spacing={4}>
//             {cards.map((card) => (
//               <Grid item key={card} xs={12} sm={6} md={4}>
//                 <Card
//                   sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
//                 >
//                   <CardMedia
//                     component="img"
//                     sx={{
//                       // 16:9
//                       pt: '56.25%',
//                     }}
//                     image="https://source.unsplash.com/random"
//                     alt="random"
//                   />
//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       Heading
//                     </Typography>
//                     <Typography>
//                       This is a media card. You can use this section to describe the
//                       content.
//                     </Typography>
//                   </CardContent>

//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </main>
//       {/* Footer */}
//       <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
//         <Typography variant="h6" align="center" gutterBottom>
//           Footer
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           align="center"
//           color="text.secondary"
//           component="p"
//         >
//           Something here to give the footer a purpose!
//         </Typography>
//         <Copyright />
//       </Box>
//       {/* End footer */}
//     </ThemeProvider>
//   );
// }