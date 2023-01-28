import React from 'react'
import Weather from './publicapi/Weather'
import Typography from '@material-ui/core/Typography'

export default function Home() {
  return (
    <div>
      <Typography>------------------------------------------------------------------------</Typography>
      <Typography>Welcome to Rent Car Application Home Page</Typography>
      <Typography>------------------------------------------------------------------------</Typography>
      <Weather />
    </div>
  )
}
