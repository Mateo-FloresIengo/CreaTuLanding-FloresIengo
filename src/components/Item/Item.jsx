import styles from './Item.module.css'


function Item ({ id, name, img, price, stock }) {

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
                <p className={styles.info}> Stock disponible: {stock} </p>
            </div>
            <div className={styles.itemFooter}>
                <button className={styles.btnCard}>Ver detalle</button>
            </div>
        </div>
    )
}

export default Item