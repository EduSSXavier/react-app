import { Outlet, Link } from "react-router-dom";
import './Eventos_Estilos.css'

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="linkpagina" to="/">Início</Link>
          </li>
          <li>
            <Link className="linkpagina" to="/Listar">Listar Eventos</Link>
          </li>
          <li>
            <Link className="linkpagina" to="/Incluir">Incluir Eventos</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;