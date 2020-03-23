import React, { Fragment, useState } from "react";
import {v4 as uuidv4} from 'uuid';
import PropTypes from 'prop-types';


const Form = ({createCita}) => {
  const [formState, updateFormState] = useState({
    peet: "",
    owner: "",
    date: "",
    time: "",
    symptom: ""
  });

  const [errorState, setErrorState] = useState(false);

  const { peet, owner, date, time, symptom } = formState;

  const updateForm = e => {
    updateFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const submitData = e => {
    e.preventDefault();
    if( peet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptom.trim() === '') {
        setErrorState(true);
        return;
    }
    setErrorState(false);

    formState.id = uuidv4()

    createCita(formState);

    updateFormState({
        peet: '',
        owner: '',
        date: '',
        time: '',
        symptom: ''
    });


  };

  

  return (
    <Fragment>
      {errorState ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
      <h2>Crear Cita</h2>
      <form onSubmitCapture={submitData}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="peet"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={updateForm}
          value={peet}
        />
        <label>Nombre del Dueño</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Nombre del Dueño"
          onChange={updateForm}
          value={owner}
        />
        <label>Fecha de alta</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={updateForm}
          value={date}
        />
        <label>Hora de alta</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={updateForm}
          value={time}
        />
        <label>Síntomas</label>
        <textarea
          name="symptom"
          className="u-full-width"
          onChange={updateForm}
          value={symptom}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

Form.propTypes = {
    createCita: PropTypes.func.isRequired
}

export default Form;
