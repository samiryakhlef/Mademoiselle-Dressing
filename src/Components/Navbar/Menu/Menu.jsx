import './Menu.css';
import { Link } from 'react-router-dom';

export const Menu = () => {
    const currentPath = window.location.pathname;

    return (
        <>
            <div className="logo">
                <img src="logo.png" />
            </div>

            <ul className="menu">
                <li className={currentPath === '/' ? 'active' : ''}>
                    <Link to="/">Accueil</Link>
                </li>

                <li className={currentPath === '/nouveautes' ? 'active' : ''}>
                    <Link to="/nouveautes">Nouveautés</Link>
                </li>

                <li className={currentPath === '/collection-femme' ? 'active' : ''}>
                    <Link to="/collection-femme">Collection Femme</Link>
                </li>

                <li className={currentPath === '/accessoires' ? 'active' : ''}>
                    <Link to="/accessoires">Accessoires</Link>
                </li>

                <li className={currentPath === '/a-propos' ? 'active' : ''}>
                    <Link to="/a-propos">A Propos</Link>
                </li>
                <li className={currentPath === '/contact' ? 'active' : ''}>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </>
    );
}