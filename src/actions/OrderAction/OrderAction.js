import Axios from 'axios';
import {Types} from '../actionTypes'
import {API_URL} from '../../utils/config';

export const getUserOrders = (userID) => {
    return async (dispatch) => {
        dispatch({type: Types.TRACKING_ORDER_REQUEST});
        try {
            console.log('go to dispathc')
            let orders = await Axios.post(API_URL + '/api/order/tracking/' + userID);
            dispatch({type: Types.TRACKING_ORDER_SUCCESS, payload: orders.data});
        } catch(err) {
            console.log(err);
        }
    }
}