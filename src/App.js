import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Contador from './components/Contador';
import Cart from './components/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import ItemDetailContainer from './components/ItemDetailContainer';
import { createContext } from 'react';
import { products } from './mock/products';
import { useState } from 'react';
import CartProvider from './context/CartContext';

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoria/:categoryName" element={<ItemListContainer/>}/>
          <Route path="/detail/:idProd" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Form/>}/>
          <Route/>
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
