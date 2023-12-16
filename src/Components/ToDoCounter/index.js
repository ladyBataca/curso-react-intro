import './TodoCounter.css'
import audioSuccess from '..//../Assets/successSound.mp3'

function ToDoCounter({ total, completed }) {
  const progressPercent = total > 0 ? Math.round(completed / total * 100) : 0;     // Calculamos el porcentage de los ToDos que se han completado
  const audioSucc = new Audio(audioSuccess);

  if (completed === total) {
    // Se ejecuta cuando todas las tareas están completadas
    audioSucc.play();

    return (
      <div className="ToDoCounter--completed">
        <span className='bold'>🥳 Has completado todas<br></br>tus tareas pendientes 🥳</span>
        <div className="bar">
          <div className="progress" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>
    );
  } else {
    // Se ejecuta cuando hay tareas pendientes
    return (
      <div className="ToDoCounter">
        <span className='Section__Text'>Has completado </span>
        <span className='bold'>{completed} / {total} </span>
        <span className='Section__Text'>tareas</span>
        <div className="bar">
          <div className="progress" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>
    );
  }
}

export { ToDoCounter };