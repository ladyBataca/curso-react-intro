import { HiOutlineTrash } from "react-icons/hi";
import "./IconDelete.css";


function IconDelete({onClick}) {
    return (
        <span
            className='Icon Icon-delete'   
            onClick={onClick}                                                // Ejecuta acciones de ToDo eliminadonDelete                                                     // Ejecuta funciones para eliminar el ToDo, actualizar el LocalStorage y renderizar Components
        >
            <HiOutlineTrash />
        </span>
    );
}

export { IconDelete };