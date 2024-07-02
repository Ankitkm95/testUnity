import { NavLink } from 'react-router-dom';
import styles from './MainNav.module.css';
import Button from './Button';

const arr = [
    {to: '/', label: "All"},
    {to: '/fetch', label: "Fetch/XHR"},
    {to: '/doc', label: "Doc"},
    {to: '/css', label: "CSS"},
    {to: '/js', label: "JS"},
    {to: '/font', label: "Font"},
    {to: '/img', label: "Image"},
    {to: '/media', label: "Media"},
    {to: '/manifest', label: "Manifest"},
    {to: '/ws', label: "WS"},
    {to: '/wasm', label: "Wasm"},
    {to: '/other', label: "Other"},
]

const MainNav = () => {
    return (
        <div className={styles.parent}>
            {
                arr.map(el => <NavLink key={el.to} to={el.to} className={({isActive}) => isActive ? styles.active : styles.default}>
                    {/* <Button btnText={el.label} /> */}
                    {el.label}
                </NavLink>)
            }
        </div>
    );
}

export default MainNav;