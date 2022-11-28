import React, {memo} from "react";
import Item from "./Items";

const ItemList = memo (
    ({items}) => {
        return (
            <div className="itemList">
                {items.map((producto)=>{
                return (
                    <Item producto={producto} key={producto.id}/>
                );
                })}
            </div>
        );
    },
    (a,b) => a.items === b.items
);

export default ItemList;