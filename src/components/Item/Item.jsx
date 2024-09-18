import styles from './Item.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item ({ product }) {

    return (

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button variant="primary"
            to={`/product/${product.id}`}
            as={Link}
            >
                More info
            </Button>
        </Card.Body>
        </Card>
    )
}

export default Item