import { useNavigate } from "react-router";
import "./DealsBar.css";

/**
 * Composant qui affiche une barre de promotions.
 */
export const DealsBar = () => {
    const navigate = useNavigate();
    const dealsCards = [
        {
            id: 0,
            photo: "https://via.placeholder.com/300",
            title: "Titre1",
            price: "prix",
        },
        {
            id: 1,
            photo: "https://via.placeholder.com/300",
            title: "Titre2",
            price: "prix",
        },
        {
            id: 2,
            photo: "https://via.placeholder.com/300",
            title: "Titre3",
            price: "prix",
        },
        {
            id: 3,
            photo: "https://via.placeholder.com/300",
            title: "Titre4",
            price: "prix",
        },
        {
            id: 4,
            photo: "https://via.placeholder.com/300",
            title: "Titre5",
            price: "prix",
        },
        {
            id: 5,
            photo: "https://via.placeholder.com/300",
            title: "Titre6",
            price: "prix",
        },
        {
            id: 6,
            photo: "https://via.placeholder.com/300",
            title: "Titre7",
            price: "prix",
        },
        {
            id: 7,
            photo: "https://via.placeholder.com/300",
            title: "Titre8",
            price: "prix",
        },
        {
            id: 8,
            photo: "https://via.placeholder.com/300",
            title: "Titre9",
            price: "prix",
        },
        {
            id: 9,
            photo: "https://via.placeholder.com/300",
            title: "Titre10",
            price: "prix",
        },
    ];


    const renderCard = (card) => {
        console.log("card", card);
        const { id, photo, title, price } = card;

        const handleClick = () => {
            // Utilisez le hook navigate pour naviguer vers l'URL souhaitée avec les paramètres id et title
            navigate(`/produits/${id}/${title}`);
        };

        return (
            <div key={id} className="card" onClick={handleClick}>
                <img src={photo} alt={title} />
                <div className="title">{title}</div>
                <div className="price">{price}</div>
            </div>
        );
    };

    return (
        <div className="containerCards">
            <h1>Product Overview</h1>
            {/* Parcourt le tableau dealsCards et affiche chaque carte par id */}
            {dealsCards.map(renderCard)}
        </div>
    );
};