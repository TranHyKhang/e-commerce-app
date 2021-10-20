import {Types} from '../../actions';

const initialState = {
    isTabLeft: true
}

export const bodyTabReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.TAB_TO_FAVORITE:
            return {
                ...state,
                isTabLeft: true
            }
        case Types.TAB_TO_TRACKING_ORDER:
            return {
                ...state,
                isTabLeft: false
            }
        default: 
            return state
    }
}