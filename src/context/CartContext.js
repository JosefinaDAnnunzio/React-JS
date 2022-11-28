import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cant) => {
        
        if (isInCart(item.id)) {
            sumarCantidad(item, cant)          
        } else {
            setCart ([...cart, {...item, cant}]);
        }
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const sumarCantidad = (itemPorAgregar, cant) => {
        const cartActualizado = cart.map((prodDelCarrito) => {
            if (itemPorAgregar.id === prodDelCarrito.id) {
                const productoActualizado = {
                    ...prodDelCarrito,
                    cant: prodDelCarrito.cant + cant, 
                };
                return productoActualizado
            
            } else {
                return prodDelCarrito
            }
        })
        setCart(cartActualizado)
    };

    const deleteAll = () => {
        setCart([])
    };

    const deleteOne = (id) => {
        const prodFiltrados = cart.filter((prod) => prod.id !== id)
        setCart(prodFiltrados);
    };

    const totalUnidades = () => {
        let count = 0
        const copia = [...cart]
        copia.forEach((prod)=>{
            count = count + prod.cant 
        });

        return count;
    };

    const totalPrecio = () => {
        let count = 0
        const copia = [...cart]
        copia.forEach((prod)=>{
            count = (count + prod.cant) * prod.precio
        });

        return count;
    };

    // const totalUnidadesReduce = () => {
    //     return cart.reduce((prev, curr) => prev + curr.cant, 0)
    // }

    const cantidadDeProducto = (id) => {
        const product = cart.find ((prod)=> prod.id === id)
        return product?.cant 
    }

    return(
        <CartContext.Provider value={{cart, addToCart, deleteAll, deleteOne, totalUnidades, totalPrecio, cantidadDeProducto}}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;