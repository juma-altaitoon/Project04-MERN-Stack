import React from 'react'
import Weather from './publicapi/Weather'
import Typography from '@material-ui/core/Typography'

export default function Home() {
  return (
    <div>
      <Typography align="center" >------------------------------------------------------------------------</Typography>
      <Typography align="center">Welcome to Rent Car Application Home Page</Typography>
      <Typography align="center" >------------------------------------------------------------------------</Typography >
      <Weather />
    </div>
  )
}
