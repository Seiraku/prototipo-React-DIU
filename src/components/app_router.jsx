import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import UploadPage from '../pages/upload'
import DIU from '../pages/diu'
import UploadPage_s from '../pages/uploaded_s'
import FileUpload from '../pages/prueba' 


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/internal' element={<InternalPage />} />
        <Route path='/upload' element={<UploadPage />}/>
        <Route path='/diu' element={<DIU />}/>
        <Route path='/uploaded' element={<UploadPage_s />}/>
        <Route path='/prueba' element={<FileUpload/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
