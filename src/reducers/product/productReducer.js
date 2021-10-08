import {Types} from '../../actions'

const initialState = {
    products: [],
    brands: [],
    isLoading: true
}



export const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.GET_ALL_PRODUCT_REQUEST: 
            return {
                ...state,
                isLoading: true
            }
        case Types.GET_ALL_PRODUCT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                products: action.payload.products,
                brands: action.payload.brands
            }
        }
        default: 
            return state;
    }
}