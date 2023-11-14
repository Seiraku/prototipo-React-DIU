import React from 'react'
import NavBar from '../components/nav_bar'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import { Alert, AlertTitle } from '@mui/material';
import diu from '../assets/DIU.jpg'


export const DIU = () => {

  return (
    <div className='page'>
      <NavBar />
      <div>

        <div className='optionL'>
          <h1>Diseño de Interfaces Usuarias</h1>
          <Button onClick={() => {alert("Contenido no disponible actualmente.")}} variant="contained">Unidad 1</Button>
          <h3></h3>
          <Button component={Link} to="/diu/entrega" variant="contained">Tarea 8 - 19 Octubre</Button>
          <h3></h3>
          <Button component={Link} to='/diu/forums' variant="contained">Foro</Button>
        </div>

        <div className='optionR'>

          <div className='container'>

            <img src={diu}></img>

          </div>

        </div>

  
      </div>
    </div>
  )
}

export default DIU