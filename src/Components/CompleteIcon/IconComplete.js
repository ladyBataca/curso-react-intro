import { HiCheck } from "react-icons/hi";
import "./IconComplete.css";


function IConComplete({onClick,completed}) {
    return (
        <span 
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onClick}                                                        // Ejecuta acciones de ToDo completado
      >
        <HiCheck/>
      </span>
    );
}

export { IConComplete };