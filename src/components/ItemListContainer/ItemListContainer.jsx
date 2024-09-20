import { useState, useEffect } from "react"
import { getProducts } from '../../data/products'
import ItemList from "../ItemList/ItemList"

function ItemListContainer ({props}) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(res => {
            setProducts(res)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <div>
            <h1>{props}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer