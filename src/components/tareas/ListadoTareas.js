import React, {Fragment} from 'react';
import Tarea from './Tarea';


const ListadoTareas = () => {

    const tareasProyecto = [
        { nombre: 'Elegir plataforma', estado: true},
        { nombre: 'Elegir estilo', estado: false},
        { nombre: 'Elegir hosting', estado: true}

    ]

    return (
        <Fragment>
            <h2>Proyectos: Tienda Virtual</h2>
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
            >Eliminar Proyectos &times;</button>
        </Fragment>
        
        );
}
 
export default ListadoTareas;