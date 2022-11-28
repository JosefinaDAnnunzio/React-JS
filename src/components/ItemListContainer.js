import React, {useEffect, useState} from "react";
import {getProducts, products} from '../mock/products';
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/FirebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState ([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    const collectionProd = collection (db, "productos");

    const ref = categoryName ? query(collectionProd, where("category", "==", categoryName)) : collectionProd

    getDocs(ref)
      .then((res) =>{
        const products = res.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data()
          };
        });
        setItems(products);
      })
      .catch((error)=> {})
      .finally(()=>{
        setLoading(false);
      })
    // setLoading(true);
    // getProducts (categoryName)
    //   .then((res) => {
    //     setItems(res);
    //   })
    //   .catch((error)=>{
    //     console.log(error);
    //   })
    //   .finally(()=> {
    //     setLoading(false);
    //   });
      return() => setLoading(true);
  },[categoryName]);

  if (loading) {
    return (
      <div className="ILC">
        <h1>Cargando</h1>
      </div>
    );
  }

  return (
    <section className="ILC">
      <ItemList items={items}/>
    </section>
  );
};

export default ItemListContainer;