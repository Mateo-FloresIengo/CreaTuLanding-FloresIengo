import { cartContext } from "./cartContext"
import { useState } from "react"

function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    const isDuplicated = (item) => cart.some(prod => prod.id === item.id)

    const addToCart = item => {
        if (isDuplicated(item)) {
            alert('el producto ya esta en el carrito')
            return
        }
        
        setCart([...cart, item])
    }

    return (
        <cartContext.Provider value={{ cart, addToCart }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider