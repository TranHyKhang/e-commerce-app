import {Types} from '../../actions'

const initialState = {
    user: null,
    userTemp: null,
    isLoading: true
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
        case Types.STORE_USER_TEMP_REQUREST:
            return {
                ...state,
                isLoading: true
            }
        case Types.STORE_USER_TEMP_SUCCESS:
            return {
                ...state,
                userTemp: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}