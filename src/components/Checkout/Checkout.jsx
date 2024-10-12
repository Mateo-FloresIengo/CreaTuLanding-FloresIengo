import { Container } from "react-bootstrap/Container"
import { Row } from "react-bootstrap/Row"
import { Col } from "react-bootstrap/Col"
import { Button } from "react-bootstrap/Button"
import { Form } from "react-bootstrap/Form"
import { ListGroup } from "react-bootstrap/ListGroup"
import { useCartContext } from "../../context/cartContext"

function Checkout () {

    const { cart } = useCartContext()

    return(
        <Container>
            <Row>
                <Col>
                    <h3>Resumen de la compra</h3>
                    <ListGroup>
                        {cart.map(prod => <ListGroup.Item key={prod.id}>{prod.name} x {prod.qty}</ListGroup.Item>)}
                    </ListGroup>
                </Col>
                <Col>
                    <Form>
                        <h3>Datos para la compra</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Phone" />
                        </Form.Group>
                        
                        <Button variant="outline-succes" type="submit">
                            Finalizar compra
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Checkout