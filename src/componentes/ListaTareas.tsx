import './../App.css';
import { Tarea } from './Tarea';
import { tareas } from './tareas';


interface listaTareasProps {
    arrayTareas: tareas[];
    setTareas: React.Dispatch<React.SetStateAction<any>>;
    mostrarTareasCompletadas: boolean;
}



export const ListaTareas: React.FC<listaTareasProps> = ({ arrayTareas, setTareas, mostrarTareasCompletadas }) => {

    const toggleDone = (id: number) => {
        setTareas(
            arrayTareas.map(tarea =>
                tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
            )
        );

    }


    const toggleGuardar = (id: number, title: string) => {
        setTareas(
            arrayTareas.map(tarea =>
                tarea.id === id ? { ...tarea, title: title } : tarea
            )
        );

    }


    const toggleRemove = (id: number) => {
        setTareas(arrayTareas.filter((tarea) => {
            if (tarea.id !== id) {
                return tarea;
            }
        }));

    }

    const completada = true
    return (
        <>
            {
                arrayTareas.length === 0 ? (
                    <p className='lista-tareas__mensaje'>No hay tareas asignadas</p>
                ) : (
                    <div>
                        <ul className='lista-tareas'>
                            {arrayTareas.map((tarea) => {
                                if (mostrarTareasCompletadas) {
                                    return (
                                        <div key={tarea.id}>
                                            <Tarea tareas={tarea} toggleDone={toggleDone} toggleRemove={toggleRemove} toggleGuardar={toggleGuardar} />
                                        </div>
                                    );
                                } else if (!tarea.completada) {
                                    return (
                                        <div key={tarea.id}>
                                            <Tarea tareas={tarea} toggleDone={toggleDone} toggleRemove={toggleRemove} toggleGuardar={toggleGuardar} />
                                        </div>
                                    );
                                }
                                return null; 
                            })}
                        </ul>
                    </div>
                )
            }
        </>
    );
};
