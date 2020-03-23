import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Cita from './components/Cita';

function App() {

  let citasInit = JSON.parse(localStorage.getItem('citas'));
  if(!citasInit) {
    citasInit = [];
  }

  const [stateCitas, setstateCitas] = useState(citasInit);

  const createCita = cita => {
    console.log(cita);
    setstateCitas([...stateCitas, cita]);
    // [...stateCitas, cita]
  };

  const deleteCitaById = (id) => {
    setstateCitas(stateCitas.filter(c => c.id !== id));
  }

  useEffect(() => {
    let citasInit = JSON.parse(localStorage.getItem('citas'));
    if(citasInit) {
      localStorage.setItem('citas', JSON.stringify(stateCitas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [stateCitas])

  let title = stateCitas.length === 0 ? 'No hay citas registradas' : 'Administra tus citas';

  return (
    <Fragment>
      <h1>Administración de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              createCita={createCita}
            ></Form>
          </div>
          <div className="one-half column">
          <h2>{title}</h2>
          {
            stateCitas.map(cita => (
              <Cita key={cita.id} cita={cita} deleteCitaById={deleteCitaById}></Cita>
            ))
          }
          </div>
        </div>

      </div>
    </Fragment>
  );
}

export default App;
