import React from 'react';

const FormTarea = () => {
    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        namae="nombre"                  
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
    );
}
 
export default FormTarea;