import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyright David Cayo &copy; 2021</p>
      {/* Usamos Link, par evitar el reload de la página */}
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;
