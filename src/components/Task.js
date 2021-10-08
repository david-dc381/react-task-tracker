import { FaTimes } from 'react-icons/fa';


const Task = ({ task, onDelete, onToggle }) => {
  return (
    // en este className evaluamos si el reminder es true cambia de color, si es falso no cambia de color.
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
       {task.text}{' '}
       <FaTimes 
        style={{ color: 'red', cursor: 'pointer' }} 
        onClick={() => onDelete(task.id) } 
       />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
