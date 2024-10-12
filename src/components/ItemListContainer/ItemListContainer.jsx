import styles from './ItemListContainer.module.css'
import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from '../../firebase/db'
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'

function ItemListContainer ({props}) {
    const [products, setProducts] = useState([])
    const { id } = useParams()

    useEffect(() => {
        id ? getProductsByCategory(id, setProducts) : getProducts(setProducts)
    }, [id])

    return (
        <div>
            <h1 className={styles.h1}>{'Bienvenidos'}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer