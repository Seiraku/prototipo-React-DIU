import React from 'react'

import NavBar from '../components/nav_bar'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export const UploadPage = () => {

  const navigate = useNavigate()

  return (
    <div className='page'>
      <h1 className='page__title'>Página de Subida</h1>
      <NavBar />
      <h2>Desea subir un archivo?</h2>
      <Button onClick={(e) => navigate("/uploaded")} variant="contained">Sí</Button>
      <Button onClick={(e) => navigate("/diu")} variant="contained">No</Button>
    </div>
  )
}

export default UploadPage
