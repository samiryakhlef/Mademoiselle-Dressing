import './Menu.css'

export const Menu = () => {
    return (
        <>
            <div className="logo">
                <img src="logo.png" alt="Logo" />
            </div>
            <ul className="menu">
                <li>
                    <a href="#">Accueil</a>
                </li>
                <li>
                    <a href="#">Nouveautés</a>
                </li>
                <li>
                    <a href="#">Collection Femme</a>
                </li>
                <li>
                    <a href="#">Accessoires</a>
                </li>
                <li>
                    <a href="#">A Propos</a>
                </li>
            </ul>
        </>
    )
}
