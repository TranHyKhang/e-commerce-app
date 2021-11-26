import {Types} from '../../actions';

const initialState = {
    carts: null,
    order:{},
    isLoading: true,
    modalOrderSuccessVisible: false
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
            // let newArr = [
            //     ...state.carts
            // ]
            // newArr[action.payload.index].quantity = action.payload.quantity;
            return {
                ...state,
                isLoading: false,
                carts: action.payload
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
        
        case Types.MODAL_SUCCESS_VISIBLE: {
            return {
                ...state,
                modalOrderSuccessVisible: true
            }
        }
        case Types.MODAL_SUCCESS_INVISIBLE: {
            return {
                ...state,
                modalOrderSuccessVisible: false
            }
        }

        //Remove item
        case Types.REMOVE_CART_ITEM_REQUEST: 
            return {
                ...state,
                isLoading: true
            }
        case Types.REMOVE_CART_ITEM_SUCCESS: {
            // state.carts.splice(action.payload, 1);
            // let arr = [];
            // for(let x of state.carts) {
            //     if(state.carts.indexOf(x) !== action.payload)
            //         arr.push(x);
            // }
            // console.log(arr)
            return {
                ...state,
                isLoading: false,
                carts: action.payload
            }
        }
        default: 
            return state;
        
    }
}