import React from 'react';

const Item = ({item}) => {
    return (
  <div className='col-md-3 p-'>
  <div className="card text-center glassBox">
      <div className="overflow glassBox__imgBox">
        <img src={`../img/${item.img}`} alt={`Imagen de ${item.nombre}`} className="card-img-top cardImagen" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title cardTitulo">{item.nombre}</h4>
        <p className="text-light cardSubTitulo">{item.marca}</p>
        <h4 className='card-title fa-2x'>${new Intl.NumberFormat('de-DE').format(item.precio)}</h4>
        <a
          href="#"
          target="_blank"
          className="btn btn-primary tarjeta rainbow-button"
          rel="noreferrer"
          alt="Agregar al carrito"
        >
          Agregar al carrito
        </a>
      </div>
    </div>
    </div>
    );
}

export default Item;
