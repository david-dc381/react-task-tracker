import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  // Para mostrar el formulario, creamos su estado
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  // usamos el useEffect para hacer efectos por detrás de la aplicación por así decirlo.
  useEffect(() => {
    const getTasks = async () => {
      // obtenemos los tasks, luego de que haya una respuesta por el json
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    // esperamos una respuesta de el localhost y luego una respuesta de su json
    const res = await fetch(
      "https://react-task-app-tracker.herokuapp.com/tasks"
    );  /* http://localhost:5000/tasks, alternativa de localhost */
    const data = await res.json();

    return data;
  };

  /* Fetch Task, aquí esperamos una respuesta especifica de un solo task, lo usaremos para
  el cambio de true o false al hacer click, para que se guarde con ese valor en el json. */
  const fetchTask = async (id) => {
    // esperamos una respuesta de el localhost y luego una respuesta de su json
    const res = await fetch(
      `https://react-task-app-tracker.herokuapp.com/tasks/${id}`
    );
    const data = await res.json();

    return data;
  };

  // Add Task
  const addTask = async (task) => {
    const res = await fetch(
      `https://react-task-app-tracker.herokuapp.com/tasks`,
      {
        /* mandamos por POST un nuevo task y en el header le decimos que es un tipo de task
      json el que se envia  */
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        /* en el body, donde se mandará el puro texto por el form, a ese texto del nuevo task lo
      convertimos en un JSON, para que se almacene en el archivo db.json */
        body: JSON.stringify(task),
      }
    );

    // esperamos que todo lo de arriba responda correctamente
    const data = await res.json();

    // creamos una copia de los task y agregamos el nuevo task que solicitamos arriba.
    setTasks([...tasks, data]);

    // creamos un id aleatorio
    // const id = Math.floor(Math.random() * 10000) + 1;
    // creamos una copia del nuevo task
    // const newTask = { id, ...task };
    /* creamos una copia de las listas de tasks y a esa lista le agragamos la
    nueva copia de task que hicimos arriba */
    // setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = async (id) => {
    /* usamos un async y await, para borrar de el server accediendo al json, para eliminarlo con
    el método DELETE y así eliminar los elemento preescritos en el ui */
    await fetch(`https://react-task-app-tracker.herokuapp.com/tasks/${id}`, {
      method: "DELETE",
    });

    console.log("delete", id);

    /* 
    comparamos el id que es distinto de otro
    este se queda, ejm id=1 es igual a id=2,
    es igual a id=3 no es igual a ninguno y
    por eso los id 2 y 3 se quedan, pero el
    id=1 se elimina porque no cumple la condicion del filter
    */
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Remider
  const toggleReminder = async (id) => {
    // esperamos con el await, el task especifíco por el id
    const taskToToggle = await fetchTask(id);
    // acutalizamos ese task, creando un clon, e invertimos el reminder de true a false o viceversa.
    const updateTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder
    }

    // hacemos un fetch, la petición de el taks especifíco, de el server 
    const res = await fetch(
      `https://react-task-app-tracker.herokuapp.com/tasks/${id}`,
      {
        // Usamos el PUT para actualizar el estado del reminder
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        // convertimos la tasks actualizada a un json, para poder agregarlo al archivo db.json.
        body: JSON.stringify(updateTask),
      }
    );

    // esperamos que todo lo de arriba salga bien y nos de una respuesta
    const data = await res.json();

    console.log(id);

    /* si el id del task que demos click es igual al id que se esta pasando, entonces
    con map creamos una copia de el array y lo modificamos el reminder a false y si no
    coinciden los id del task no se modifica nada. */
    setTasks(
      tasks.map((task) =>
        // mandamos el data de arriba, para pasar el estado de el reminder 
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <Router>
      {" "}
      {/* todo lo que vamos a mostrar envolvemos en una ruta */}
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

        {/* Metemos lo que vamos a mostrar en el render lo que es el mostrar tareas. */}
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {/* preguntamos si esxite  */}
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No Tasks To Show"
              )}
            </>
          )}
        />

        {/* indicamos en Route el nombre de la ruta que tendra en el URL y a que componente se
        quiere referir en este caso es el About. */}
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
