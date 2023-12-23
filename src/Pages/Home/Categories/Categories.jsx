// Categories.js
import { Link } from 'react-router-dom';
import "./Categories.css";

const dataCategories = [
    { id: 0, name: "hommes", image: "image1.jpg" },
    { id: 1, name: "femmes", image: "image2.jpg" },
    { id: 2, name: "accessoires", image: "image3.jpg" },
    { id: 3, name: "chaussures", image: "image4.jpg" },
];

export const Categories = () => {

    const renderCategories = dataCategories.map((category) => {
        return (
            <Link to={`/categories/${category.id}/${category.name}`} key={category.id} className="category">
                <img className="category-image" src="https://via.placeholder.com/100" alt="" />
                <span className="category-name">{category.name}</span>
            </Link>
        );
    });

    return <div className="categories">
        {renderCategories}
    </div>;
};

