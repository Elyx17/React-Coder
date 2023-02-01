import React from 'react';

const Item = ({item}) => {
    return (
  <div className='col-md-3 p-'>
  <div className="card text-center glassBox">
      <div className="overflow glassBox__imgBox">
        <img src={`./img/${item.img}`} alt="a wallpaper" className="card-img-top cardImagen" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title cardTitulo">{item.nombre}</h4>
        <p className="text-primary cardSubTitulo">{item.marca}</p>
        <h4 className='fa-2x'>${item.precio}</h4>
        <a
          href="#"
          target="_blank"
          className="btn btn-primary rainbow rainbow-1"
          rel="noreferrer"
        >
          Agregar al carrito
        </a>
      </div>
    </div>
    </div>
    );
}

export default Item;
