import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import './../App.css';


interface FormularioProps {
    setTareas: React.Dispatch<React.SetStateAction<any>>;
    tareas: Array<{ id: number; title: string; completada: boolean }>;
}


export const Formulario: React.FC<FormularioProps> = ({ tareas, setTareas }) => {
    const [tareaCreada, setCrearTarea] = useState("");
    const [numTarea, setNumTarea] = useState(1);

    const numerarTareas = () => {
        const res = numTarea + 1;
        setNumTarea(res);
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        numerarTareas();
        setTareas([...tareas, {id:uuidv4() , title: numTarea+"- "+ tareaCreada, completada:false }]);
        setCrearTarea("");
    }

    return (
        <div>
    <form action="" onSubmit={handleSubmit} className="formulario-tareas">
            <input type="text" value={tareaCreada} onChange={(ev) => { setCrearTarea(ev.target.value) }} className="formulario-tareas__input" placeholder="Escribe una tarea" />
            <button type="submit" className="formulario-tareas__btn">
                <FontAwesomeIcon icon={faPlusSquare} className='formulario-tareas__icono-btn' />
            </button>
        </form>
        </div>
    
        

    );



}