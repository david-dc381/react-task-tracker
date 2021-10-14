import PropType from "prop-types";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="card-title d-flex justify-content-between">
      <h1>{title}</h1>

      {/* Si estamos en la ruta principal se muestra el btn */}
      {location.pathname === "/" && (
        /* onAdd, lo usamos para mostrar el form de registro */
        <Button
          buttonOpenClose={onAdd}
          color={showAdd ? "#fb2d2d" : "#05bf05"}
          text={showAdd ? "Close" : "Add Task"}
        />
      )}
    </header>
  );
};

// Mediante el Prop agregamos un título por defecto
Header.defaultProps = {
  title: "Task Tracker",
};

// Declaramos que el título es requerido y de tipo string
Header.propType = {
  title: PropType.string.isRequired,
};

export default Header;
