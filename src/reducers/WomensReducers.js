// womenReducer.js
import axios from 'axios';

const initialState = {
    data: [],
    loading: false,
    success: false,
    failed: false,
};

const WomenReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_WOMEN_REQUEST':
            console.log('FETCH_WOMEN_REQUEST:', action);
            return { ...state, loading: true, success: false, failed: false };

        case 'FETCH_WOMEN_SUCCESS':
            console.log('FETCH_WOMEN_SUCCESS:', action);
            return {
                ...state,
                loading: false,
                success: true,
                data: action.payload.data,
            };

        case 'FETCH_WOMEN_FAILURE':
            console.log('FETCH_WOMEN_FAILURE:', action);
            return { ...state, loading: false, success: false, failed: true };

        // Charger les données à partir de l'API
        case 'LOAD_WOMEN_DATA':
            console.log('LOAD_WOMEN_DATA:', action);
            return {
                ...state,
                loading: true,
                success: false,
                failed: false,
            };

        case 'LOAD_WOMEN_DATA_SUCCESS':
            console.log('LOAD_WOMEN_DATA_SUCCESS:', action);
            return {
                ...state,
                loading: false,
                success: true,
                data: action.payload.data,
            };

        case 'LOAD_WOMEN_DATA_FAILURE':
            console.log('LOAD_WOMEN_DATA_FAILURE:', action);
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

export const loadWomenData = () => {
    return async (dispatch) => {
        dispatch({ type: 'LOAD_WOMEN_DATA' });

        try {
            const response = await axios.get('http://localhost:3000/womens');
            console.log('API Response:', response);
            dispatch({ type: 'LOAD_WOMEN_DATA_SUCCESS', payload: { data: response.data } });
        } catch (error) {
            console.error(error);
            dispatch({ type: 'LOAD_WOMEN_DATA_FAILURE' });
        }
    };
};

export default WomenReducer;