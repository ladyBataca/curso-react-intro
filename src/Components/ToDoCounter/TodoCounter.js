import './TodoCounter.css'

function ToDoCounter({total, completed}) {
  const progressPercent = total > 0 ? Math.round(completed / total * 100) : 0;     // Calculamos el porcentage de los ToDos que se han completado
    return (
      <div className="ToDoCounter">                                                                 
        <span className='Section__Text'>Has completado </span>
        <span className='bold'>{completed} / {total} </span> 
        <span className='Section__Text'>tareas</span>
        <div className="bar">
          <div className="progress" style={{width: `${progressPercent}%`}}></div>
        </div>
      </div>
    );
  }

  export {ToDoCounter};