import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../services/FirebaseConfig";


const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [orderId, setOrderId] = useState ('');

    const{ cart, totalPrecio, deleteAll} = useContext((CartContext));
    const totalCarrito = totalPrecio()

    const enviarDatos = (e) => {
        e.preventDefault();
        // console.log({name, lastName});
        const objOrden = {
            buyer: {
                name,
                lastName,
                telefono: 123456789,
                direccion: "calle 123",
                email:"hola@gmail",
            },
            items: cart,
            total: totalCarrito,
            date: serverTimestamp(),
        };

        const orderCollection = collection(db, "orders")

        addDoc(orderCollection, objOrden)
            .then((res)=>{
                setOrderId(res.id);
                deleteAll();
            })
            .catch((error)=>{
                console.log('Error', error)
            })
    };

    const handleName = (e) => setName (e.target.value);

    const handleLastName = (e) => setLastName (e.target.value);

    if(orderId) {
        return (
            <h1>Tu número de seguimiento es {orderId}</h1>
        );
    };

    return(
        <div style={{display: 'flex'}}>
            <form action="" onSubmit={enviarDatos}>
                <input type="text" placeholder="Nombre" name="nombre" onChange={handleName} value={name}/>
                <input type="text" placeholder="Apellido" name="apellido" onChange={handleLastName} value={lastName}/>
                <button>Enviar</button>
            </form>
        </div>
    )
};


export default Form;