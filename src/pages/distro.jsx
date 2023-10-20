import React from 'react'
import NavBar from '../components/nav_bar'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import { Alert, AlertTitle } from '@mui/material';

export const DISTRO = () => {
  return (
    <div className='page'>
      <NavBar />
      <h1>Sistemas Distribuidos</h1>
      <Button onClick={() => {alert("Contenido no disponible actualmente.")}} variant="contained">Unidad 1</Button>
      <h3></h3>
      <Button component={Link} to="/uploadis" variant="contained">Laboratorio 2</Button>
      <h3></h3>
      <Button component={Link} to='/distro/forums' variant="contained">Foro</Button>
    </div>
  )
}

export default DISTRO