import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

function ItemListContainer ({props}) {
    const [items, setItems] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=20')
            .then((res) => res.json())
            .then((res) => setItems(res))
    }, [])

    return (
        <div>
            <h1>{'Nuestros Productos'}</h1>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer