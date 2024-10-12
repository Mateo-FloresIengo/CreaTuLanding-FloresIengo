import ItemCount from '../ItemCount/ItemCount'
import styles from './ItemDetail.module.css'

function ItemDetail ({ detail }) {
    return (
        <div className={styles.cardItem}>
            <div className={styles.header}>
                <h2 className={styles.itemHeader}>{ detail.name }</h2>
            </div>
            <div>
                <img src={ img } alt={ name } className={styles.itemImg} />
            </div>
            <div>
                <p className={styles.info}> Categoria: {detail.category} </p>
                <p className={styles.info}> Descripcion: {detail.description} </p>
                <p className={styles.info}> Precio: ${detail.price} </p>
                <p className={styles.info}> Stock disponible: {detail.stock} </p>
            </div>
            <div className={styles.itemFooter}>
                <ItemCount item={detail} />
            </div>
        </div>
    )
}

export default ItemDetail