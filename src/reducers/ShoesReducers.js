// womenReducer.js
import axios from 'axios';

const initialState = {
    loading: false,
    failed: false,
    success: false,
    data: []
};



const ShoesReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SHOES_REQUEST':
            console.log('FETCH_SHOES_REQUEST:', action);
            return { ...state, loading: true, success: false, failed: false };

        case 'FETCH_SHOES_SUCCESS':
            console.log('FETCH_SHOES_SUCCESS:', action);
            return {
                ...state,
                loading: false,
                success: true,
                data: action.payload.data,
            };

        case 'FETCH_SHOES_FAILURE':
            console.log('FETCH_SHOES_FAILURE:', action);
            return { ...state, loading: false, success: false, failed: true };

        // Charger les données à partir de l'API
        case 'LOAD_SHOES_DATA':
            console.log('LOAD_SHOES_DATA:', action);
            return {
                ...state,
                loading: true,
                success: false,
                failed: false,
            };

        case 'LOAD_SHOES_DATA_SUCCESS':
            console.log('LOAD_SHOES_DATA_SUCCESS:', action);
            return {
                ...state,
                loading: false,
                success: true,
                data: action.payload.data,
            };

        case 'LOAD_SHOES_DATA_FAILURE':
            console.log('LOAD_SHOES_DATA_FAILURE:', action);
            return {
                ...state,
                loading: false,
                success: false,
                failed: true,
            };

        default:
            return state;
    }
};
const ACCESSORIES_API_URL = 'http://localhost:3000/shoes';

export const loadShoesData = () => {
    return async (dispatch) => {
        dispatch({ type: 'LOAD_SHOES_DATA' });

        try {
            const response = await axios.get(ACCESSORIES_API_URL);
            console.log('API Response:', response);
            dispatch({ type: 'LOAD_SHOES_DATA_SUCCESS', payload: { data: response.data } });
        } catch (error) {
            console.error(error);
            dispatch({ type: 'LOAD_SHOES_DATA_FAILURE' });
        }
    };
};

export default ShoesReducers;