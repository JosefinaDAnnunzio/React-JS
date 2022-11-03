import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import { getProduct } from "../mock/products";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { idProd } = useParams();

    useEffect(() => {
        getProduct (idProd)
            .then((res) => {
                setItem(res);
            })
            .catch ((error)=>{
                console.log(error);
            });
        },[idProd]);

    return(
        <div>
            <ItemDetail item={item}/>
        </div>
    )
};

export default ItemDetailContainer;