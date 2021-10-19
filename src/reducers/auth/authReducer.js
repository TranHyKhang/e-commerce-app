import {Types} from '../../actions'

const initialState = {
    user: null,
    isLoading: false
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.GET_USER_INFO_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case Types.GET_USER_INFO_SUCCESS: 
            return {
                ...state,
                user: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}