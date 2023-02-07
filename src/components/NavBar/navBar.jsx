import CartWidget from "../CartWidget/cartWidget";
import Categorias from "./categorias/categorias";

const NavBar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Elyx Hall</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Inicio
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <Categorias/>
        <li className="nav-item">
          <a className="nav-link active" href="#">Contacto</a>
        </li>
      </ul>
      <CartWidget/>
    </div>
    
  </div>
</nav>
    );
}

export default NavBar;
