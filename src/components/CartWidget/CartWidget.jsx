import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import styles from './CartWidget.module.css'
import { useCartContext } from '../../context/cartContext'

function CartWidget () {
    const { cart } = useCartContext()
    return (
        <div>
            <FontAwesomeIcon className={styles.iconCart} icon={faCartShopping} />
            <p>{cart.length}</p>
        </div>
    )
}

export default CartWidget