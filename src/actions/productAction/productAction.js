//Import Types
import {Types} from '../actionTypes'

export const getProducts = (data) => {
    
    return async(dispatch) => {
        dispatch({type: Types.GET_ALL_PRODUCT_REQUEST});
        try {
            dispatch({
                type: Types.GET_ALL_PRODUCT_SUCCESS, 
                payload: data.productBrands,
                    
            });
        } 
        catch(err) {
            console.log(err);
        }
    }
}