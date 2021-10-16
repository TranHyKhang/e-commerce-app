import {Types} from '../../actions'

const initialState = {
    isHide: false,
}



export const tabNavigatorReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.SCROLL_DOWN: 
            return {
                ...state,
                isHide: true
            }
        case Types.SCROLL_UP: {
            return {
                ...state,
                isHide: false
            }
        }
        case Types.HIDE_TAB_BAR:
            return {
                ...state,
                isHide: action.payload
            }
        case Types.UN_HIDE_TAB_BAR:
            return {
                ...state,
                isHide: action.payload
            }
        default: 
            return state;
    }
}