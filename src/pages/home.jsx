import React from 'react'

import NavBar from '../components/nav_bar'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import estudio from '../assets/study.jpg'

export const HomePage = () => {

  const navigate = useNavigate()
  
  return (
    <div className='page'>
      <h1 className='page__title'>Bienvenido!</h1>
      <NavBar />
      <div>
        <div className='optionL'>
          <h2>Diseño de Interfaces Usuarias</h2>
          <Button onClick={(e) => navigate("/diu")} variant="contained">Visitar</Button>
          <h2>Sistemas Distribuidos</h2>
          <Button onClick={(e) => navigate("/distro")} variant="contained">Visitar</Button>
        </div>
        <div className="optionR">
          <div className="container">
            <img src={estudio}></img>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default HomePage