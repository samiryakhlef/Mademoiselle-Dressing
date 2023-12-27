// womenReducer.js
import axios from 'axios';

const initialState = {
    loading: false,
    failed: false,
    success: false,
    data: [],
};

const accessoriesReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'FETCH_ACCESSOIRES_REQUEST':
            return { ...state, loading: true, success: false, failed: false };

        case 'FETCH_ACCESSOIRES_SUCCESS':
            return {
                ...state,
                loading: false,
                success: true,
                data: payload.data,
            };

        case 'FETCH_ACCESSOIRES_FAILURE':
            return { ...state, loading: false, success: false, failed: true };

        case 'LOAD_ACCESSOIRES_DATA':
            return { ...state, loading: true, success: false, failed: false };

        case 'LOAD_ACCESSOIRES_DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                success: true,
                data: payload.data,
            };

        case 'LOAD_ACCESSOIRES_DATA_FAILURE':
            return { ...state, loading: false, success: false, failed: true };

        default:
            return state;
    }
};

const ACCESSORIES_API_URL = 'http://localhost:3000/accessories';

export const loadAccessoriesData = () => {
    return async (dispatch) => {
        dispatch({ type: 'LOAD_ACCESSOIRES_DATA' });

        try {
            const response = await axios.get(ACCESSORIES_API_URL);
            dispatch({ type: 'LOAD_ACCESSOIRES_DATA_SUCCESS', payload: { data: response.data } });
        } catch (error) {
            console.error(error);
            dispatch({ type: 'LOAD_ACCESSOIRES_DATA_FAILURE' });
        }
    };
};

export default accessoriesReducer;