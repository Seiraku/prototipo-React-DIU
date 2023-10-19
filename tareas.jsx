import React from 'react';

class Tarea extends React.Component {
  render() {
    return (
      <div className="tarea">
        <h2>Título de la tarea</h2>
        <p>Descripción de la tarea</p>
        <button>Ver detalles</button>
      </div>
    );
  }
}

class ListaDeTareas extends React.Component {
  render() {
    const tareas = [
      { id: 1, titulo: "Tarea 1", descripcion: "Esta es la descripción de la tarea 1" },
      { id: 2, titulo: "Tarea 2", descripcion: "Esta es la descripción de la tarea 2" },
      // Agrega más tareas según tus necesidades
    ];

    return (
      <div className="lista-de-tareas">
        {tareas.map((tarea) => (
          <Tarea key={tarea.id} titulo={tarea.titulo} descripcion={tarea.descripcion} />
        ))}
      </div>
    );
  }
}

export default ListaDeTareas;
