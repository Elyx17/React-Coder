import React from 'react';
import { Link } from "react-router-dom";
import ItemList  from "../ItemList/ItemList"

const Cart = () => {

    const carrito = [
        {id: 1, nombre: "Arroz", modelo: "1", img: 'https://firebasestorage.googleapis.com/v0/b/react-coderhouse17.appspot.com/o/wEstate.jpg?alt=media&token=30aa1241-d200-41bc-9d37-e6bb21878138', precio: 400, cantidad: 5 },
        {id: 2,nombre: "Fideos", modelo: "2", img: 'https://firebasestorage.googleapis.com/v0/b/react-coderhouse17.appspot.com/o/wEstate.jpg?alt=media&token=30aa1241-d200-41bc-9d37-e6bb21878138',precio: 300, cantidad: 2 },
        {id: 3,nombre: "Manteca", modelo: "3",img: 'https://firebasestorage.googleapis.com/v0/b/react-coderhouse17.appspot.com/o/wEstate.jpg?alt=media&token=30aa1241-d200-41bc-9d37-e6bb21878138',precio: 500, cantidad: 3 },
    ]

    return (
        <>
        { carrito.length === 0 
          ? //Si carrito esta vacio
            <>
                <h2>Carrito vacio</h2>
                <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar comprando</button></Link> 
            </>
          : //Si carrito tiene productos
            <div className="container cartContainer">
                {
                    <ItemList products={carrito} plantilla={'itemCart'}/>
                }
                <div className="divButtons">
                    <p>Resumen de la compra: precio total</p>
                    <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar Comprando</button></Link> 
                    <button className="btn btn-danger"><i class="bi bi-trash3"></i> Vaciar carrito</button>
                    <Link className="nav-link" to={'/checkout'}><button className="btn btn-success"><i class="bi bi-check-square"></i> Finalizar compra</button></Link> 
                </div>
            </div>
        }
    </>
    );
}

export default Cart;
