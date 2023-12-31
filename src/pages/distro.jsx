import React from 'react'
import NavBar from '../components/nav_bar'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import { Alert, AlertTitle } from '@mui/material';
import distro from '../assets/distro.jpg'

export const DISTRO = () => {
  return (
    <div className='page'>
      <NavBar />
      
      <div>
        
        <div className='optionL'>
          <h1>Sistemas Distribuidos</h1>
          <Button onClick={() => {alert("Contenido no disponible actualmente.")}} variant="contained">Unidad 1</Button>
          <h2></h2>
          <Button component={Link} to="/uploadis" variant="contained">Laboratorio 2</Button>
          <h2></h2>
          <Button component={Link} to='/distro/forums' variant="contained">Foro</Button>
        
        </div>

        <div className='optionR'>
            <div className='container'>
              <img src={distro}></img>
            </div>
        </div>

      </div>
    </div>
  )
}

export default DISTRO