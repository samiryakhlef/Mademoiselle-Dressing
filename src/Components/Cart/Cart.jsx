import { useCallback, useReducer } from 'react';

const initialState = {
    cartItems: [],
    total: 0,
};

/**
 * Reducer function for the cart state
 * @param {Object} state - Current state
 * @param {Object} action - Action object
 * @param {string} action.type - Type of action
 * @param {Object} action.item - Item object
 * @param {string} action.item.name - Name of the item
 * @param {number} action.item.price - Price of the item
 * @returns {Object} - New state
 */
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: [...state.cartItems, action.item],
                total: state.total + action.item.price,
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter((cartItem) => cartItem !== action.item),
                total: state.total - action.item.price,
            };
        default:
            return state;
    }
};

/**
 * Component for the shopping cart
 * @returns {JSX.Element} - Cart component
 */
export const Cart = () => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    /**
     * Callback function to remove an item from the cart
     * @param {Object} item - Item object to be removed
     */
    const removeFromCart = useCallback((item) => {
        dispatch({ type: 'REMOVE_FROM_CART', item });
    }, [dispatch]);

    return (
        <div>
            <h2>Panier</h2>
            <div>
                {state.cartItems.length === 0 ? (
                    <p>Votre panier est vide.</p>
                ) : (
                    <ul>
                        {state.cartItems.map((item) => (
                            <li key={item.id}>
                                {item.name} - {item.price} €
                                <button onClick={() => removeFromCart(item)}>Supprimer</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <p>Total : {state.total} €</p>
        </div>
    );
};