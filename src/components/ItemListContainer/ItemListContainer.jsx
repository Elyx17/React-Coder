import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    const {idCategoria}= useParams()
    useEffect(() => {
        if(idCategoria){
            fetch('../json/productos.json')
            .then(response => response.json())
            .then(items => {
                const products = items.filter(prod => prod.idCategoria === parseInt(idCategoria))
                const productsList = ItemList({products})
                console.log(productsList)
                setProductos(productsList)
            }) 
        } else{
            fetch('./json/productos.json')
            .then(response => response.json())
            .then(products => {
                const productsList = ItemList({products})
                console.log(productsList)
                setProductos(productsList)
            })
        }
    }, [idCategoria])
    return (
        <div className="container row d-flex justify-content-center align-items-center h-100 productosContainer">
            {productos}
        </div>
    );
}

export default ItemListContainer;
