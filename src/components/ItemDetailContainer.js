import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import { getProduct } from "../mock/products";
import { collection, doc } from "firebase/firestore";
import { db } from "../services/FirebaseConfig";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { idProd } = useParams();

    useEffect(() => {
        const collectionProd = collection (db, "productos");
        const ref = doc (collectionProd,idProd);
        getProduct (ref)
            .then((res) => {
                setItem({
                    id: res.id,
                    ...res.data(),
                });
            })
            .catch ((error)=>{
                console.log(error);
            })
            .finally (() =>{
                setLoading(false);
            });
        },[idProd]);

    return(
        <div>
            <ItemDetail item={item}/>
        </div>
    )
};

export default ItemDetailContainer;