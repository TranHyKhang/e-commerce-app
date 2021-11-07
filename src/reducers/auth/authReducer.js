import {Types} from '../../actions'

const initialState = {
    user: null,
    userTemp: null,
    isLoading: true,
    error: null
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {

        //Get user
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
        
        //Store user doesn't have an account
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

        //Logout
        case Types.LOG_OUT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case Types.LOG_OUT_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false
            }

        //Login
        case Types.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case Types.LOGIN_FAILED: 
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case Types.LOGIN_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                error: null
            }

        //Sign up
        case Types.SIGN_UP_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case Types.SIGN_UP_FAILED: 
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case Types.SIGN_UP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null
            }
        default:
            return state;
    }
}