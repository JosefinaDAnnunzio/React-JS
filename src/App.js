import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Contador from './components/Contador';
import Cart from './components/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:categoryName" element={<ItemListContainer/>}/>
        <Route path="/detail/:idProd" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route/>
      </Routes>
      <Footer />
      {/* <NavBar/>
      <ItemListContainer greeting="Tienda Online"/>
      <Contador stock={10} onAdd={onAdd}/> */}
    </BrowserRouter>
  );
}

export default App;
