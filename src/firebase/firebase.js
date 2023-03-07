// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYfskYGgRzsqJpy-S_F4ZE_pF4z1aieGk",
  authDomain: "react-coderhouse17.firebaseapp.com",
  projectId: "react-coderhouse17",
  storageBucket: "react-coderhouse17.appspot.com",
  messagingSenderId: "512226178316",
  appId: "1:512226178316:web:69ab9ecb1784fd9628c529"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export const cargarBDD = async () => {
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach( async (prod)  => {
    await addDoc(collection(db,"productos"), {
      nombre: prod.nombre,
      marca: prod.marca,
      idCategoria: prod.idCategoria,
      stock: prod.stock,
      precio: prod.precio,
      img: prod.img,
      
    })
  })
}


export const getProductos = async() => {
  const productos = await getDocs(collection(db,"productos"))
  const items = productos.docs.map(prod => {
      return {...prod.data(), id: prod.id}
  })
  return items
}

export const getProducto = async(id) => {
  const producto = await getDoc(doc(db, "productos", id))
  const item = {...producto.data(), id: producto.id}
  return item
}


export const updateProducto = async(id, info) => {
  await updateDoc(doc(db, "productos", id), info)
}

export const deleteProducto = async(id) => {
  await deleteDoc(doc(db, "productos", id))
}