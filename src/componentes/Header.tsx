import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import './../App.css';

interface headerProps{
    setTareasCompletadas: React.Dispatch<React.SetStateAction<any>>;
    mostrarTareasCompletadas: boolean;
}



export const Header: React.FC<headerProps> = ({setTareasCompletadas,mostrarTareasCompletadas}) => {
    return (
     <header className="header">
     <h1 className='header__titulo'>Lista de Tareas</h1>
     <button onClick={() => {setTareasCompletadas(!mostrarTareasCompletadas)}}  className='header__boton'>
       {mostrarTareasCompletadas ? "No mostrar completadas" : "Mostrar completadas" } 
     <FontAwesomeIcon icon={mostrarTareasCompletadas ? faEye :faEyeSlash } className='header__icono-boton' />
     </button>
  
     </header>
    );
}