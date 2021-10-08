import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>

      {/* Usamos Link en vez de <a> para que al hacer click la página no nos vuelva a cargar cada vez que damos click a un enlace */}
      <Link to="/about">About</Link>
    </footer>
  )
}

export default Footer
