import Axios from 'axios';
import {Types} from '../actionTypes'
import {API_URL} from '../../utils/config';

export const getUserOrders = (user) => {
    return async (dispatch) => {
        dispatch({type: Types.TRACKING_ORDER_REQUEST});
        try {
            console.log('go to dispathc')
            if(user !== null) {
                let orders = await Axios.post(API_URL + '/api/order/tracking/' + user._id);
                dispatch({type: Types.TRACKING_ORDER_SUCCESS, payload: orders.data});
            } else {
                dispatch({type: Types.TRACKING_ORDER_SUCCESS, payload: null});
            }
            
        } catch(err) {
            console.log(err);
        }
    }
}