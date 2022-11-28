import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const {cart, deleteAll, deleteOne, totalPrecio} = useContext(CartContext) 

  return (
    <div>
      {cart.map((prod) => (
        <div key={prod.id}>
          <img src={prod.img} alt={prod.title} />
          <div>
            <h3>{prod.title}</h3>
            <h3>{prod.cantidad}</h3>
            <button onClick={()=>deleteOne(prod.id)}>Eliminar</button>
          </div>
        </div>
      ))}
      <h2>Total: {totalPrecio}$</h2>
      <button onClick={deleteAll}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;