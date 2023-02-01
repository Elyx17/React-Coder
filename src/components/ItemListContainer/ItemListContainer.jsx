import { useState,useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    useEffect(() => {
            fetch('./json/productos.json')
            .then(response => response.json())
            .then(products => {
                const productsList = ItemList({products})
                console.log(productsList)
                setProductos(productsList)
            })
    }, [])
    return (
        <div className="container row d-flex justify-content-center align-items-center h-100 productosContainer">
            {productos}
        </div>
    );
}

export default ItemListContainer;
