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