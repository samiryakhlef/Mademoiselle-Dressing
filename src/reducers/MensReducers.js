// MENSReducer.js
import axios from 'axios';

const initialState = {
    loading: false,
    failed: false,
    success: false,
    data: []
};



const MensReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MENS_REQUEST':
            console.log('FETCH_MENS_REQUEST:', action);
            return { ...state, loading: true, success: false, failed: false };

        case 'FETCH_MENS_SUCCESS':
            console.log('FETCH_MENS_SUCCESS:', action);
            return {
                ...state,
                loading: false,
                success: true,
                data: action.payload.data,
            };

        case 'FETCH_MENS_FAILURE':
            console.log('FETCH_MENS_FAILURE:', action);
            return { ...state, loading: false, success: false, failed: true };

        // Charger les données à partir de l'API
        case 'LOAD_MENS_DATA':
            console.log('LOAD_MENS_DATA:', action);
            return {
                ...state,
                loading: true,
                success: false,
                failed: false,
            };

        case 'LOAD_MENS_DATA_SUCCESS':
            console.log('LOAD_MENS_DATA_SUCCESS:', action);
            return {
                ...state,
                loading: false,
                success: true,
                data: action.payload.data,
            };

        case 'LOAD_MENS_DATA_FAILURE':
            console.log('LOAD_MENS_DATA_FAILURE:', action);
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
const ACCESSORIES_API_URL = 'http://localhost:3000/mens';

export const loadMensData = () => {
    return async (dispatch) => {
        dispatch({ type: 'LOAD_MENS_DATA' });

        try {
            const response = await axios.get(ACCESSORIES_API_URL);
            console.log('API Response:', response);
            dispatch({ type: 'LOAD_MENS_DATA_SUCCESS', payload: { data: response.data } });
        } catch (error) {
            console.error(error);
            dispatch({ type: 'LOAD_MENS_DATA_FAILURE' });
        }
    };
};

export default MensReducers;