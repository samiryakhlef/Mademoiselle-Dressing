import { FavoriteBorder, Person2Outlined, ShoppingBagOutlined } from "@mui/icons-material"
import "./Account.css"

export const Account = () => {
    return (
        <div className="account">
            <a href="#"><Person2Outlined /></a>
            <a href="#"><FavoriteBorder /></a>
            <a href="#"><ShoppingBagOutlined /></a>
        </div>
    )
}