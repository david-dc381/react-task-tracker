import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {/* por cada task dentro de los tasks añadimos un h3 con su texto reespectivo */}
      {tasks.map((task, index) => (
        <Task
          key={task.id} /* key={index}, seria otra opción con en index de arriba */
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;