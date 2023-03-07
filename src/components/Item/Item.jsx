import { Link } from "react-router-dom"
import { toast } from 'react-toastify';

const Item = ({item}) => {

  const agregarCarrito = () => toast("✅ Producto agregado!", {
    theme: "dark",
    position: "bottom-right",
    pauseOnHover: false,
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
  })

    return (
  <div className='col-md-3 p-'>
  <div className="card text-center glassBox">
      <div className="overflow glassBox__imgBox">
      <Link className="nav-link" to={`/item/${item.id}`}><img src={item.img} alt={`Imagen de ${item.nombre}`} className="card-img-top cardImagen" /></Link>
      </div>
      <div className="card-body text-light">
      <Link className="nav-link" to={`/item/${item.id}`}><h4 className="card-title cardTitulo">{item.nombre}</h4></Link>
      <Link className="nav-link" to={`/item/${item.id}`}><p className="text-light cardSubTitulo">{item.marca}</p></Link>
      <Link className="nav-link" to={`/item/${item.id}`}><h4 className='card-title fa-2x'>${new Intl.NumberFormat('de-DE').format(item.precio)}</h4></Link>
        <Link
          to={"/"}
          className="btn btn-primary tarjeta rainbow-button"
          rel="noreferrer"
          alt="Agregar al carrito"
          onClick={() => agregarCarrito()}
        >
          Agregar al carrito
        </Link>
      </div>
    </div>
    </div>

  )
}

export default Item;
