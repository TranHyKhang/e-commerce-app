import {Types} from '../../actions';

const initialState = {
    orders: null,
    isLoading: false
}

export const orderReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.TRACKING_ORDER_REQUEST: 
            return {
                ...state,
                isLoading: true
            }
        case Types.TRACKING_ORDER_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                orders: action.payload
            }
        default:
            return state
    }
}