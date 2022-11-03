import React from "react";
import Item from "./Items";

const ItemList = ({items}) => {
    return (
        <div className="itemList">
            {items.map((producto)=>{
            return (
                <Item producto={producto} key={producto.id}/>
            );
            })}
        </div>
    );
};

export default ItemList;