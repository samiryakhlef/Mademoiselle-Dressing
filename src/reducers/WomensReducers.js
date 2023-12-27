// womenReducer.js
import axios from 'axios';

const initialState = {
    loading: false,
    failed: false,
    success: false,
    data: []
};



const WomenReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_WOMEN_REQUEST':
          
            return { ...state, loading: true, success: false, failed: false };

        case 'FETCH_WOMEN_SUCCESS':
           
            return {
                ...state,
                loading: false,
                success: true,
                data: action.payload.data,
            };

        case 'FETCH_WOMEN_FAILURE':
            
            return { ...state, loading: false, success: false, failed: true };

        // Charger les données à partir de l'API
        case 'LOAD_WOMEN_DATA':
           
            return {
                ...state,
                loading: true,
                success: false,
                failed: false,
            };

        case 'LOAD_WOMEN_DATA_SUCCESS':
            
            return {
                ...state,
                loading: false,
                success: true,
                data: action.payload.data,
            };

        case 'LOAD_WOMEN_DATA_FAILURE':
            
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
const ACCESSORIES_API_URL = 'http://localhost:3000/womens';

export const loadWomenData = () => {
    return async (dispatch) => {
        dispatch({ type: 'LOAD_WOMEN_DATA' });

        try {
            const response = await axios.get(ACCESSORIES_API_URL);
            console.log('API Response:', response);
            dispatch({ type: 'LOAD_WOMEN_DATA_SUCCESS', payload: { data: response.data } });
        } catch (error) {
            console.error(error);
            dispatch({ type: 'LOAD_WOMEN_DATA_FAILURE' });
        }
    };
};

export default WomenReducer;