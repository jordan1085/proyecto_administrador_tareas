import React, {Fragment, useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';



const ListadoTareas = () => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    // si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const tareasProyecto = [
        { nombre: 'Elegir plataforma', estado: true},
        { nombre: 'Elegir estilo', estado: false},
        { nombre: 'Elegir hosting', estado: true}

    ];

    // Elimina un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }

    return (
        <Fragment>
            <h2>Proyectos: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0
                    
                    ? (<li className="tarea">No hay tareas</li>)

                    : tareasProyecto.map(tarea => (
                        <Tarea
                            tarea={tarea}
                        />
                    ))
                }

            </ul>

            <button 
                type="button" 
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar Proyectos &times;</button>
        </Fragment>
        
        );
}
 
export default ListadoTareas;