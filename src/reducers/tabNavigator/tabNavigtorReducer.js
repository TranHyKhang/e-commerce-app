import {Types} from '../../actions'

const initialState = {
    isScrollDown: false
}



export const tabNavigatorReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.SCROLL_DOWN: 
            return {
                ...state,
                isScrollDown: true
            }
        case Types.SCROLL_UP: {
            return {
                ...state,
                isScrollDown: false
            }
        }
        default: 
            return state;
    }
}