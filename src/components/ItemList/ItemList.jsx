import styles from './ItemList.module.css'
import Item from '../Item/Item'

function ItemList ({ products }) {
    return(
        <div className={styles.listGroup}>
            {products.map(product => <Item key={product.id} {...product} />)}
        </div>
    )
}

export default ItemList