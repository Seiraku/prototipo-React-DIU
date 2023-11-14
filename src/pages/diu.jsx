import React from 'react'
import NavBar from '../components/nav_bar'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import { Alert, AlertTitle } from '@mui/material';
<<<<<<< HEAD
import diu from '../assets/DIU.jpg'
=======
>>>>>>> 247fabafaf3b1787f973c0f93886db3449a78f91


export const DIU = () => {

  return (
    <div className='page'>
      <NavBar />
<<<<<<< HEAD
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
=======
      <h1>Diseño de Interfaces Usuarias</h1>
      <Button onClick={() => {alert("Contenido no disponible actualmente.")}} variant="contained">Unidad 1</Button>
      <h3></h3>
      <Button component={Link} to="/prueba" variant="contained">Tarea 8 - 19 Octubre</Button>
      <h3></h3>
      <Button component={Link} to='/diu/forums' variant="contained">Foro</Button>
>>>>>>> 247fabafaf3b1787f973c0f93886db3449a78f91
    </div>
  )
}

export default DIU