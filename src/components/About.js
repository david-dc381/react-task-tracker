import { Link } from 'react-router-dom';

/* Usamos Link en vez de <a> para que al hacer click la página no nos vuelva a cargar cada vez que damos click a un enlace */

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default About
