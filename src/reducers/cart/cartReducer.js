import {Types} from '../../actions';

const initialState = {
    carts: [],
    order:{},
    isLoading: true,
}

export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.GET_CART_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case Types.GET_CART_SUCCESS:
            return {
                ...state,
                carts: action.payload,
                isLoading: false
            }
        case Types.ADD_TO_CART_REQUEST: 
            return {
                ...state,
                isLoading: true
            }
        case Types.ADD_TO_CART_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case Types.CREATE_ORDER_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case Types.CREATE_ORDER_SUCCESS:
            return {
                ...state,
                order: action.payload,
                isLoading: false
            }
        default: 
            return state;
        
    }
}