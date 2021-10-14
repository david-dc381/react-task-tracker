import PropTypes from 'prop-types';
// useLocation, nos permite mirar la ruta actual en la que estamos
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
 
  const location = useLocation();

  return (
    <header>
      <h1 className="header">{title}</h1>
      {/* Preguntamos con un ternario corto '&&',
      si la ubicación actual es el index es decir '/'
      entonces que nos muestre el boton Add Task y 
      no es la ruta principal que no nosmuestre o no haga nada. */}
      { location.pathname === '/' && (
        /* oddAdd, para mostrar el formulario */
        <Button 
          onClick={onAdd} 
          color={showAdd ? 'red' : 'green'} 
          text={showAdd ? 'Close' : 'Add Task'} 
        />
      )}
    </header>
  );
}

// usamos un prop por defecto para el título, si ponemos en el App.js en Header un title reemplazara este
Header.defaultProps = {
  title: 'Task Tracker',
}

// Declaramos que tipos de props debemos enviar, en este caso un string obligatoriamente

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

/* 
  Css in Js, put it in stlye in header tag 
const headingStyle = {
  color: 'yellow',
  backgroundColor: 'black',
} */
export default Header
