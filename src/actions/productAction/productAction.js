//Import Types
import {Types} from '../actionTypes';
import axios from 'axios';
import {API_URL} from '../../utils/config';

export const getProducts = () => {
    
    return async(dispatch) => {
        dispatch({type: Types.GET_ALL_PRODUCT_REQUEST});
        try {
            let data = await axios.get(API_URL);
            dispatch({
                type: Types.GET_ALL_PRODUCT_SUCCESS, 
                payload: data.data,
                    
            });
        } 
        catch(err) {
            console.log(err);
        }
    }
}