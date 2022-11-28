import {useState} from 'react';

const Contador = ({ stock, onAdd, initial=1 }) => {
    const [cantidad, setCantidad] = useState(initial);

    const sumar = () => {
        // cantidad < stock ? setCantidad(cantidad + 1) : alert("No hay más unidades")
        cantidad < stock && setCantidad(cantidad + 1)
        // if (cantidad < stock) {
        //     setCantidad(cantidad + 1);
        // }
    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const reset = () => {
        setCantidad(0);
    };

    return (
        <div>
            <button onClick={restar}>-</button>
            <p>{cantidad}</p>
            <button disabled={cantidad === stock } onClick={sumar}>+</button>
            <button onClick={reset}>Volver a 0</button>
            <button onClick={() => onAdd(cantidad)}>Agregar al Carrito</button>
        </div>
    );
};

export default Contador