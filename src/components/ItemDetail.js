import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Contador from "./Contador";


const ItemDetail = ({item}) => {
    const {addToCart, cantidadDeProducto} = useContext(CartContext);
    const onAdd = (cant) => {
        console.log (cant);
        addToCart(item, cant);
    };

    const cantidad = cantidadDeProducto(item.id)

    return(
        <div className="detail">
            <img src={item.img} alt={item.title} />
            <article>
                <h2>{item.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptates dignissimos cumque deleniti! Debitis, deleniti inventore voluptates numquam similique quidem tenetur quam voluptatibus, facere earum accusantium laudantium porro quod natus?</p>
                <h3>${item.price}.-</h3>
                <Contador stock={item.stock} onAdd={onAdd} initial={cantidad}/>
            </article>
        </div>
    );
};

export default ItemDetail;