// Categories.js
import "./Categories.css";

const dataCategories = [
    { id: 1, name: "Catégorie 1", image: "image1.jpg" },
    { id: 2, name: "Catégorie 2", image: "image2.jpg" },
    { id: 3, name: "Catégorie 3", image: "image3.jpg" },
    { id: 4, name: "Catégorie 4", image: "image4.jpg" },
];

const Categories = () => {
    const renderCategories = dataCategories.map((category, index) => {
        console.log("Rendering category:", category);
        return (
            <div className="category" key={index}>
                <img className="category-image" src="https://via.placeholder.com/100" alt="" />
                <span className="category-name">{category.name}</span>
            </div>
        );
    });

    console.log("Rendered categories:", renderCategories);

    return <div className="categories">
        {renderCategories}
    </div>;
};

export default Categories;