import { useState, useEffect } from "react"
import { products } from '../../data/products'
import ItemList from "../ItemList/ItemList"

function ItemListContainer ({props}) {
    const [items, setItems] = useState([])

    const getProducts = () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(products)
            }, 2000)
        })
    }

    useEffect(() => {
        getProducts()
        .then(res => setItems(res))
    }, [])

    return (
        <div>
            <h1>{props}</h1>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer