import './App.css';
import 'react-toastify/dist/ReactToastify.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import NavBar from './NavBar/navBar';
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Contacto from './Contacto/Contacto';
import Footer from './Footer/Footer';
import Cart from './Cart/Cart';



function App() {
  return (
    <>

    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/> 
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
        <Route path='/Contacto' element={<Contacto/>}/> 
        <Route path='/Cart' element={<Cart/>}/>
      </Routes> 
      <Footer/>
      <ToastContainer/>
    </BrowserRouter>

    </>
  );
}

export default App;
