import React, { useState } from 'react';
import NavBar from '../components/nav_bar'
import { useNavigate } from "react-router-dom";

function FileUploadDistro() {
  const [selectedFile, setSelectedFile] = useState(null);

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Obtiene el primer archivo seleccionado
    setSelectedFile(file);
  };

  const handleUpload = () => {
    alert('Archivo subido correctamente');
    navigate('/distro')
    if (selectedFile) {
      console.log("Archivo seleccionado:", selectedFile);
      // Aquí puedes enviar el archivo al servidor utilizando una solicitud HTTP (por ejemplo, mediante axios o fetch).
    }
  };

  return (
    <div>
        <NavBar />
        <h2>Cargar Archivos</h2>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Subir Archivo</button>
    </div>
  );
}

export default FileUploadDistro;