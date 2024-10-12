import { useCartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

function Cart () {
    const { cart } = useCartContext()
    return(
        <div>
            {cart.map(prod => <p key={prod.id}>{prod.name}</p>)}
            <Link to='/checkout'>Finalizar compra</Link>
        </div>
    )
}

export default Cart