import React, { useState, useEffect } from 'react';

const MoodleIntegration = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Aquí debes realizar una solicitud a la API de Moodle para obtener los cursos
    fetch('https://tu-moodle-site/webservice/rest/server.php', {
      method: 'POST',
      body: new URLSearchParams({
        wstoken: 'tu-token-de-autenticación',
        wsfunction: 'core_course_get_courses',
        moodlewsrestformat: 'json',
        criteria: [{ key: 'category', value: 0 }],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.errorcode) {
          console.error('Error al obtener cursos:', data.message);
        } else {
          setCourses(data);
        }
      })
      .catch((error) => {
        console.error('Error al conectar con Moodle:', error);
      });
  }, []);

  return (
    <div>
      <h2>Cursos en Moodle</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <a href={course.viewurl}>{course.fullname}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoodleIntegration;
