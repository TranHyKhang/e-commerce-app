import {Types} from '../../actions';

const initialState = {
    carts: [],
    order:{},
    isLoading: true,
}

//If userid null -> type info user else binding user info

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
        case Types.UPDATE_PRODUCT_QUANTITY_REQUEST: 
            return {
                ...state,
                isLoading: true
            }
        case Types.UPDATE_PRODUCT_QUANTITY_SUCCESS: {
            let newArr = [
                ...state.carts
            ]
            newArr[action.payload.index].quantity = action.payload.quantity;
            return {
                ...state,
                isLoading: false,
                carts:newArr
            }
        }
            
        case Types.CREATE_ORDER_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case Types.CREATE_ORDER_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        default: 
            return state;
        
    }
}