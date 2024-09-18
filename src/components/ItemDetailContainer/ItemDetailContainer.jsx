import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function ItemDetailContainer () {
    const [detail, setDetail] = useState()
    const { id } = useParams()
    
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((res) => setDetail(res))
    }, [id])

    return (
        <div>{detail?.thumbnail}</div>
    )
}

export default ItemDetailContainer