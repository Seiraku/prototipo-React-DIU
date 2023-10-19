import React from 'react'
import NavBar from '../components/nav_bar'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'


export const DISTRO = () => {
  return (
    <div className='page'>
      <NavBar />
      <h1>Sistemas Distribuidos</h1>
      <Button component={Link} to="/" variant="contained">Unidad 1</Button>
      <h3></h3>
      <Button component={Link} to="/uploadis" variant="contained">Laboratorio 2</Button>
      <h3></h3>
      <Button variant="contained">Upload</Button>
    </div>
  )
}

export default DISTRO