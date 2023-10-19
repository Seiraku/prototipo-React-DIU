import React from 'react'
import NavBar from '../components/nav_bar'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'


export const DIU = () => {
  return (
    <div className='page'>
      <NavBar />
      <h1>Diseño de Interfaces Usuarias</h1>
      <Button component={Link} to="/" variant="contained">Unidad 1</Button>
      <h3></h3>
      <Button component={Link} to="/prueba" variant="contained">Tarea 8 - 19 Octubre</Button>
      <h3></h3>
      <Button component={Link} to='/diu/forums' variant="contained">Foro</Button>
    </div>
  )
}

export default DIU