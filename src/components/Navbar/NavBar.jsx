import styles from './NavBar.module.css'
import CartWidget from "../CartWidget/CartWidget"

function NavBar () {
    return (
        <nav className={styles.NavBar}>
            <h3>Elechouse</h3>
            <div>
                <ul>
                    <li>Celulares</li>
                    <li>Tablets</li>
                    <li>Notebooks</li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar