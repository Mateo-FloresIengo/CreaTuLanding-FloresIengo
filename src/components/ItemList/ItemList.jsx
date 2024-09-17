import Item from '../Item/Item'

function ItemList ({ items }) {
    return(
        <div className='ListGroup'>
            {items.map(product => <Item key={product.id} {...product} />)}
        </div>
    )
}

export default ItemList