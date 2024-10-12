import styles from './Item.module.css'
import { Link } from 'react-router-dom'

function Item ({ id, name, img, price, category, stock }) {

    return (
        <div className={styles.cardItem}>
            <div className={styles.header}>
                <h2 className={styles.itemHeader}>{ name }</h2>
            </div>
            <div>
                <img src={ img } alt={ name } className={styles.itemImg} />
            </div>
            <div>
                <p className={styles.info}> Precio: ${price} </p>
                <p className={styles.info}> Categoria: {category} </p>
                <p className={styles.info}> Stock disponible: {stock} </p>
            </div>
            <div className={styles.itemFooter}>
                <Link to={`/item/${id}`} className={styles.btnCard}>Ver detalle</Link>
            </div>
        </div>
    )
}

export default Item