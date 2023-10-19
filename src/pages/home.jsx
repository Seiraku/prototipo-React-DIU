import React from 'react'

import NavBar from '../components/nav_bar'
import Button from '@mui/material/Button';
import {Link, Navigate} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export const HomePage = () => {

  const navigate = useNavigate()
  
  return (
    <div className='page'>
      <h1 className='page__title'>Bienvenido!</h1>
      <NavBar />
      <h2>Diseño de Interfaces Usuarias</h2>
      <Button  onClick={(e) => navigate("/diu")} variant="contained">Visitar</Button>
      <h2>Sistemas Distribuidos</h2>
      <Button variant="contained">Visitar</Button>
    </div>
  )
}

export default HomePage