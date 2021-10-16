import {Types} from '../../actions';


export const ScrollDownEvent = () => {
    return (dispatch) => {
        try {
            dispatch({
                type: Types.SCROLL_DOWN,
                payload: true
            })
        } 
        catch(err) {
            console.log(err)
        }
    }
}

export const ScrollUpEvent = () => {
    return (dispatch) => {
        try {
            dispatch({
                type: Types.SCROLL_UP,
                payload: false
            })
        } 
        catch(err) {
            console.log(err);
        }
    }
}

export const HideTabBar = () => {
    return (dispatch) => {
        try {
            dispatch({
                type: Types.HIDE_TAB_BAR,
                payload: true
            })
        }
        catch(err) {
            console.log(err);
        }
    }
}

export const UnHideTabBar = () => {
    return (dispatch) => {
        try {
            dispatch({
                type: Types.HIDE_TAB_BAR,
                payload: false
            })
        }
        catch(err) {
            console.log(err);
        }
    }
}