import carrito from './assets/carrito.png'

const CartWidget = () => {
    return (
        <div>
            <img src={carrito} alt="cart-widget" className="logo"/>
            0
        </div>
    )
}

export default CartWidget