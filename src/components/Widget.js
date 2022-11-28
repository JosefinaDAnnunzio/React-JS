import { useContext } from "react"
import { CartContext } from "../context/CartContext"


const Widget = () => {
  const {totalUnidades} = useContext(CartContext);
  const {totalPrecio} = useContext(CartContext);
  return (
    <div style={{display:"flex", alignItems:"center"}}>
      <span className="material-symbols-outlined">shopping_cart</span>
      <span>{totalUnidades()}</span>
      <span>{totalPrecio()}</span>
    </div>
  )
}

export default Widget