import React from "react";
import { Link, NavLink } from "react-router-dom";

const Item = ({producto}) => {
    return (
        <div className="item">
            <img src={producto.img} alt={producto.title} width='200px' />
            <article>
                <h2>{producto.title}</h2>
                <h3>${producto.price}.-</h3>
            </article>
            <Link to={`/detail/${producto.id}`}>
                Ver Detalle
            </Link>
        </div>);
};

export default Item;