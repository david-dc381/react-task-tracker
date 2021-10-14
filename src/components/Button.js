import PropTypes from "prop-types";

const Button = ({ text, color, buttonOpenClose }) => {
  return (
    <button
      onClick={buttonOpenClose}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

// Usamos prtopTypes para el button
Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  buttonOpenClose: PropTypes.func,
};

export default Button;
