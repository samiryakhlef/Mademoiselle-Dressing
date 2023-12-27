import  { useCallback, useState } from 'react';
import './Products.css';

const handleAddToCart = () => {
    // Ajoutez ici la logique pour ajouter le produit au panier
};

// Composant Products
export const Products = () => {
    const [productCount, setProductCount] = useState(1);

    const incrementCount = useCallback(() => {
        setProductCount((prevCount) => prevCount + 1);
    }, []);

    const decrementCount = useCallback(() => {
        setProductCount((prevCount) => prevCount > 1 ? prevCount - 1 : 1);
    }, []);



    return (
        <div className="product">
            <img className='product-image' src="https://via.placeholder.com/300" alt="Image du produit" />
            <div className="product-container">
                <h2 className="product-title">Titre du produit</h2>
                <p className="product-description">Description du produit</p>
                <button className="decrement-button" onClick={decrementCount}>-</button>
                <button className="product-count">{productCount}</button>
                <button className="increment-button" onClick={incrementCount}>+</button>
                <button className="add-to-cart-button" onClick={handleAddToCart}>Ajouter au panier</button>
            </div>
        </div>
    );
};
