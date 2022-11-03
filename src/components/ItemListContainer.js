import React, {useEffect, useState} from "react";
import {getProducts, products} from '../mock/products';
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState ([]);

  const { categoryName } = useParams();

  useEffect(() => {
    getProducts (categoryName)
      .then((res) => {
        setItems(res);
      })
      .catch((error)=>{
        console.log(error);
      });
  },[categoryName]);

  return (
    <section className="ILC">
      <ItemList items={items}/>
    </section>
  );
};

export default ItemListContainer;