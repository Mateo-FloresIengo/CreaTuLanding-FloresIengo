import { useState, useEffect } from "react"
import { getProduct } from "../../firebase/db"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

function ItemDetailContainer () {
    const [product, setProduct] = useState([])

    const { id } = useParams()

    useEffect(() => {
        getProduct(id, setProduct)
    }, [id])

    return (
        <ItemDetail { ...product} />
    )
}

export default ItemDetailContainer