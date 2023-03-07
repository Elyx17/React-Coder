import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {
    return (
        
        <div className="row g-0">
            <div className="col-md-6">
            <img src={item.img} className="img-fluid rounded-start" alt={`Imagen de ${item.nombre}`} />
            </div>
            <div className="col-md-6">
            <div className="card-body mt-5">
                <h5 className="card-title mt-3">{item.nombre}</h5>
                <p className="card-text mt-5">{item.marca}</p>
                <p className="card-text mt-5">${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <p className="card-text mt-5">Stock: {item.stock}</p>
                <ItemCount valInicial={1} stock={item.stock} />
                <button className="btn btn-primary mt-3">Comprar</button>
            </div>
            </div>
        </div>
        
    );
}

export default ItemDetail;
