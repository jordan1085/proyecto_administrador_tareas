import React, { Fragment, useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    // Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);

    // Extraemos el valor del formulario (false) desde el context
    const { formulario, mostrarFormulario } = proyectosContext;



    // State para proyectos
    const [proyecto, guardarProyectos] = useState({
        nombre: ''
    });

    // Extraer nombre proyecto
    const { nombre } = proyecto;

    // Lee los contenidos del input
    const oncChangeProyecto = e => {
        guardarProyectos({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario crea proyecto
    const onSubmitProyecto = e => {
        e.preventDefault(); 

        // Validar Proyecto

        // Agregar al state 

        // Reiniciar elf formulario
    }

    // Mostrar el formulario
    const onClickFormulario = () => {
        mostrarFormulario();
    }

    return (

        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={ onClickFormulario }
            >Nuevo proyecto</button>

            {/* Si el valor del formulario es true entonces se muestra el formulario */}
            { formulario ?
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input 
                            type="text"
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            name="nombre"
                            value={nombre}
                            onChange={oncChangeProyecto}
                        />
                        

                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar Proyecto"

                        />

                    </form>
                ) : null
           } 

        </Fragment>

    );
}

export default NuevoProyecto;