import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import UploadPage from '../pages/upload_distro'
import DIU from '../pages/diu'
import DISTRO from '../pages/distro'
import UploadPage_s from '../pages/uploaded_s'
import FileUpload from '../pages/upload_diu' 
import FileUploadDistro from '../pages/upload_distro' 


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/internal' element={<InternalPage />} />
        <Route path='/upload' element={<UploadPage />}/>
        <Route path='/diu' element={<DIU />}/>
        <Route path='/distro' element={<DISTRO />}/>
        <Route path='/uploaded' element={<UploadPage_s />}/>
        <Route path='/prueba' element={<FileUpload/>}/>
        <Route path='/uploadis' element={<FileUploadDistro/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
