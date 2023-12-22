import { useState } from "react";
import "./Categories.css";
const Categories = () => {

    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategories(data);
    }

    fetchCategories();


    const dataCategories = categories.map((category, index) => {
        return (
            <ul key={index}>
                <li key={index}>{category}</li>
            </ul>
        )


    })

    return (
        <div className="categoriesContainer">
            <h1>Categories</h1>
            <div className="cardsCategories">

                {dataCategories}

            </div>
        </div>
    )
}

export default Categories