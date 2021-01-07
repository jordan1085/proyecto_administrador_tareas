import React, { useReducer } from 'react';
import TareaContex from './tareasContext';
import TareaReducer from './tareasReducer';

import {
    TAREAS_PROYECTO
} from '../../types';

const TareaState = props => {


    const initialState = {
        tareas: [
            { nombre: 'Elegir plataforma', estado: true, proyectoId: 1},
            { nombre: 'Elegir estilo', estado: false, proyectoId: 2 },
            { nombre: 'Elegir hosting', estado: true, proyectoId: 3 },
            { nombre: 'Mauetar', estado: true, proyectoId: 4 },
            { nombre: 'Elegir hosting', estado: true, proyectoId: 1 },
            { nombre: 'Crear formulario', estado: true, proyectoId: 2 },
            { nombre: 'Seccion productos', estado: true, proyectoId: 3 },
            { nombre: 'Elegir hosting', estado: true, proyectoId: 4 }

        ],
    }

    // Crear displacht y el state
    const [state, dispatch] = useReducer(TareaReducer, initialState);


    // Crear funciones

    // Obtener tareas desde proyectos
    const obtenerTareas = proyectoId => {
        dispatch({
            types: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    return (
        <TareaContex.Provider
            value={{
                tareas: state.tareas,
                obtenerTareas
            }}
        >
            {props.children}
        </TareaContex.Provider>
    )

}

export default TareaState;