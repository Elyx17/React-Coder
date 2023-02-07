import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {
    return (
        
        <div className="row g-0">
            <div className="col-md-4">
            <img src={`../img/${item.img}`} className="img-fluid rounded-start" alt={`Imagen de ${item.nombre}`} />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">{item.marca}</p>
                <p className="card-text">${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <p className="card-text">Stock: {item.stock}</p>
                <ItemCount valInicial={1} stock={item.stock} />
                <button className="btn btn-primary">Comprar</button>
            </div>
            </div>
        </div>
        
    );
}

export default ItemDetail;
