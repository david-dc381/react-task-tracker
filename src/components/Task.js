import { BsXCircleFill } from "react-icons/bs"; //iconos de bootstrap

// Aqui se muestra cada elemento registrado
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      // si el reminder es true cambia de color
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3 className="d-flex">
        {task.text}
        <BsXCircleFill
          style={{ color: "rgb(251, 45, 45)", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
          className="mt-3"
        />
      </h3>

      <p className="d-flex">{task.day}</p>
    </div>
  );
};

export default Task;
