import {Types} from '../actionTypes'

export const TabToFavorite = () => {
    return (dispatch) => {
        try {
            dispatch({type: Types.TAB_TO_FAVORITE});
        } catch(err) {
            console.log(err);
        }
    }
}

export const TabToTrackingOrder = () => {
    return (dispatch) => {
        try {
            dispatch({type: Types.TAB_TO_TRACKING_ORDER});
        } catch(err) {
            console.log(err);
        }
    }
}