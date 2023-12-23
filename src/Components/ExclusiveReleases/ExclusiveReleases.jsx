
import { useNavigate } from "react-router";
import "../ExclusiveReleases/ExclusiveReleases.css";

export const ExclusiveReleases = () => {

    const navigate = useNavigate();

    const handleNewArrivalsClick = () => {
        navigate("/nouveautes");
    }
    const handleBestSellersClick = () => {
        navigate("/best-sellers");
    }

    return (
        <div className="exclusiveReleases">
            <div className="exclusiveReleasesCard" onClick={handleNewArrivalsClick}>
                <img className="exclusiveBackground" src="https://via.placeholder.com/1200x600" alt="Background" />
                <h2 className="exclusiveTitle">Nouveautés</h2>
                <button className="exclusiveButton">Découvrir</button>
            </div>
            <div className="exclusiveReleasesCard" onClick={handleBestSellersClick}>
                <img className="exclusiveBackground" src="https://via.placeholder.com/1200x600" alt="Background" />
                <h2 className="exclusiveTitle">Best-Sellers</h2>
                <button className="exclusiveButton">Découvrir</button>
            </div>
        </div>
    )
}

