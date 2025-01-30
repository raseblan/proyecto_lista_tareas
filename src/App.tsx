
import { useEffect, useState } from 'react';
import './App.css';
import { Formulario } from './componentes/Formulario';
import { Header } from './componentes/Header';
import { ListaTareas } from './componentes/ListaTareas';
import { tareas } from './componentes/tareas';



export const App = () =>  {
  const  getTareas = localStorage.getItem('tareas');
  const convertJson = getTareas !== null ? JSON.parse(getTareas) : [];
  const  getTareasCompletadas = localStorage.getItem('completadas') === null  ? true : localStorage.getItem('completadas') === 'true' ? true : false  ;
  const [tareas, setTareas] = useState<tareas[]>(convertJson);
  const [mostrarTareasCompletadas, setTareasCompletadas] = useState(getTareasCompletadas);


useEffect(()=>{
localStorage.setItem('tareas', JSON.stringify(tareas));

}, [tareas]);
useEffect(()=>{
  localStorage.setItem('completadas', mostrarTareasCompletadas.toString());
  
  }, [mostrarTareasCompletadas]);



  return (
    <div className="contenedor">
      <Header mostrarTareasCompletadas={mostrarTareasCompletadas} setTareasCompletadas={setTareasCompletadas}/>
      <Formulario  tareas={tareas} setTareas={setTareas}/>
      <ListaTareas mostrarTareasCompletadas={mostrarTareasCompletadas} arrayTareas={tareas} setTareas={setTareas} />
    </div>
  );
}

