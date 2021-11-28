import {Types} from '../../actions'

const initialState = {
    products: [],
    brands: [],
    favoriteProducts: [],
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
        case Types.GET_FAVORITE_ITEMS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case Types.GET_FAVORITE_ITEMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                favoriteProducts: action.payload
            }
        case Types.ADD_FAVORITE_ITEM_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case Types.ADD_FAVORITE_ITEM_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                favoriteProducts: action.payload
            }
        case Types.REMOVE_FAVORITE_ITEM_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case Types.REMOVE_FAVORITE_ITEM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                favoriteProducts: action.payload
            }
        default: 
            return state;
    }
}