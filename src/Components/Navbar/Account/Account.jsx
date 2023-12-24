import { FavoriteBorder, Person2Outlined, ShoppingBagOutlined } from "@mui/icons-material"
import "./Account.css"
import { Link } from "react-router-dom"

export const Account = () => {



    return (
        <div className="account">
            <Link to="/connexion"><Person2Outlined /></Link>
            <a href="#"><FavoriteBorder /></a>
            <Link to="/panier"><ShoppingBagOutlined /></Link>
        </div>
    )
}