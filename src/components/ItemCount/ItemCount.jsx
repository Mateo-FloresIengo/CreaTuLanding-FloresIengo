import styles from './ItemCount.module.css'
import { useState } from "react"
import { useCartContext } from '../../context/cartContext'

function ItemCount ({ item }) {
    const [count, setCount] = useState(1)

    const { addToCart } = useCartContext()

    const add = () => setCount(count + 1)
    const restar = () => setCount(count - 1)
    const handleAddToCart = () => addToCart({...item, qty: count})

    return(
        <div className={styles.counter}>
            <div className={styles.controls}>
                <p>{count}</p>
                <button className={styles.button} onClick={restar}> - </button>
                <button className={styles.button} onClick={add}> + </button>
            </div>
            <div className={styles.addToCart}>
                <button className={styles.button} onClick={handleAddToCart}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount