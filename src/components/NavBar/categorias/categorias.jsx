import { Link } from "react-router-dom";

const Categorias = () => {
    return (
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorias</a>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to={"/category/2"}>Destilados</Link>
            <Link className="dropdown-item" to={"/category/1"}>Añejados</Link>
            <Link className="dropdown-item" to={"/category/3"}>Fermentados</Link>
            <div className="dropdown-divider"/>
            <Link className="dropdown-item" to={"/category/4"}>Licores</Link>
          </div>
        </li>
        
    );
}

export default Categorias;
