import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AddTask = ({ onAdd }) => {
  // cada task tendrá su cambio de estado
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  // Para evitar el submit
  const onSubmit = (e) => {
    e.preventDefault();

    // verificamos si input tiene texto
    if (!text) {
      alert("Please add a task");
      return;
    }

    // Para añadir
    onAdd({ text, day, reminder });

    // Limpiamos los campos
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="mb-5" onSubmit={onSubmit}>
      <div className="mt-4">
        <label className="fw-bold mb-1">Task</label>
        <input
          className="form-control"
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <label className="fw-bold mb-1">Day & Time</label>
        <input
          className="form-control"
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <label className="label-reminder fw-bold">Set Reminder</label>
        <input
          className="form-check-input"
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <div className="d-grid gap-2 mt-5">
        <input type="submit" value="Save Task" className="btn btn-primary" />
      </div>
    </form>
  );
};

export default AddTask;
