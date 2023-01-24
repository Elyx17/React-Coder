

const Categorias = () => {
    return (
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorias</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Destilados</a>
            <a className="dropdown-item" href="#">Añejados</a>
            <a className="dropdown-item" href="#">Fermentados</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">Licores</a>
          </div>
        </li>

    );
}

export default Categorias;
