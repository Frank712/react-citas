import React from 'react'
import { Fragment } from "react";
import PropTypes from 'prop-types';

const Cita = ({cita, deleteCitaById}) => {
    return (
        <Fragment>
            <div className="cita">
                <p>Mascota: <span>{cita.peet}</span></p> 
                <p>Dueño: <span>{cita.owner}</span></p> 
                <p>Fecha: <span>{cita.date}</span></p> 
                <p>Hora: <span>{cita.time}</span></p> 
                <p>Sintomas: <span>{cita.symptom}</span></p> 

                <button className='button eliminar u-full-width' onClick={() => deleteCitaById(cita.id)}>
                    Eliminar &times;
                </button>
            </div>
        </Fragment>
    );
}

Cita.prototype = {
    cita: PropTypes.object.isRequired,
    deleteCitaById: PropTypes.func.isRequired
}
 
export default Cita;