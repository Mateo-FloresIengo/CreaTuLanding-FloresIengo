import styles from './NavBar.module.css'
import CartWidget from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom'

function NavBar () {
    return (
        <nav className={styles.NavBar}>
            <Link to='/'>
                <h3>Elechouse</h3>
            </Link>
            <div className={styles.divList}>
                <ul>
                    <Link to={`/category/celular`} className={styles.navItem}>Celulares</Link>
                    <Link to={`/category/tablet`} className={styles.navItem}>Tablets</Link>
                    <Link to={`/category/notebook`} className={styles.navItem}>Notebooks</Link>
                </ul>
                <Link to='/cart'>
                    <CartWidget />
                </Link>
            </div>
        </nav>
    )
}

export default NavBar