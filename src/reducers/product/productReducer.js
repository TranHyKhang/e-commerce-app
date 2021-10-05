import {Types} from '../../actions'

const initialState = {
    data: [],
    isLoading: false
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
                data: action.payload,
            }
        }
        default: 
            return state;
    }
}