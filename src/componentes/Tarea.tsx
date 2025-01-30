import { faCheckSquare, faEdit, faTimes, faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { title } from "process";
import { FormEventHandler, useState } from "react";

interface tareaProps {
    tareas: {
        id: number,
        title: string,
        completada: boolean
}
toggleDone: any;
toggleGuardar: any;
toggleRemove: any;
   
}



export const Tarea: React.FC<tareaProps> = ({ tareas, toggleDone, toggleGuardar,toggleRemove }) => {
    const [editando, setEditar] = useState(false);
    const [nuevoTitulo, setNuevoTitulo] = useState(tareas.title);

const handleSubmit = (e: { preventDefault: () => void; }) =>{
    e.preventDefault();
    setEditar(false)
}





    return (

        <li className="lista-tareas__tarea">
            <FontAwesomeIcon icon={tareas.completada ? faCheckSquare : faSquare} onClick={() => toggleDone(tareas.id)} className='lista-tareas__icono lista-tareas__icono-check' />
            <div className="lista-tareas__texto">
                {editando ? (

                    <form action="" onSubmit={handleSubmit} >
                        <input className="formulario-editar-tarea__input" type="text" value={nuevoTitulo} onChange={(ev) => { setNuevoTitulo(ev.target.value) }} />
                        <button className="formulario-editar-tarea__btn" onClick={() => { toggleGuardar(tareas.id, nuevoTitulo) }}>Actualizar</button>
                    </form>


                ) : (
                    <div>
                        {tareas.title}
                    </div>

                )

                }
            </div>
            <div className="lista-tareas__contenedor-botones">
                <FontAwesomeIcon icon={faEdit} onClick={() => { setEditar(true) }} className='lista-tareas__icono lista-tareas__icono-accion' />    
                <FontAwesomeIcon icon={faTimes} onClick={() => {toggleRemove(tareas.id)}} className='lista-tareas__icono lista-tareas__icono-accion' />
            </div>
        </li>


    )
}