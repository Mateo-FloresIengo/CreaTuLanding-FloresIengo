import styles from './Item.module.css'

function Item ({ id, name, image, price, stock }) {

    return (
        <div className={styles.itemContainer}>
            <h2>
                {name}
            </h2>
            <img src={image} alt={name} />
            <p>
                Precio: ${price}
            </p>
            <p>
                Stock disponible: {stock}
            </p>
            <button>
                Ver detalle
            </button>
        </div>
    )
}

export default Item