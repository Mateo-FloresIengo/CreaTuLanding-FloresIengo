import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom';

function NavBar () {
    return (
        <>
        <Navbar.Brand to={'/'} as={Link}>Elechouse</Navbar.Brand>
        <Nav className="justify-content-end">
            <Nav.Item>
                <Nav.Link to={'/category/Celulares'} as={Link}>Celulares</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to={'category/Tablets'} as={Link}>Tablets</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to={'category/Notebooks'} as={Link}>Notebooks</Nav.Link>
            </Nav.Item>
            <CartWidget />
        </Nav></>
    )
}

export default NavBar