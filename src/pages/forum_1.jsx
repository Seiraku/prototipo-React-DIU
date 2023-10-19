import React from 'react'

import NavBar from '../components/nav_bar'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

export const Forum1 = () => {

  return (
    <div className='page'>
      <NavBar />
      
      <h1 className='page__title'>Certamen 2?</h1>
      <h2> Cuando es el certamen número 2?</h2>
      <h1> Respuestas:</h1>
      <h2> Es el 20 de Abril</h2>
      <Button component={Link} to='/' variant="contained">Volver</Button>
    </div>
  )
}

export default Forum1