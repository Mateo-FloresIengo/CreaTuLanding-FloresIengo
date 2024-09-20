import cart from './assets/cart.png'

function CartWidget () {
    return (
        <div>
            <img src={cart} alt="cart-widget" className="logo"/>
            0
        </div>
    )
}

export default CartWidget