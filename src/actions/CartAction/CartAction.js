import {Types} from '../actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GetCart = () => {
    return async(dispatch) => {
        dispatch({type: Types.GET_CART_REQUEST})
        try {
            let arrProductID = await AsyncStorage.getItem('cart');
            dispatch({type: Types.GET_CART_SUCCESS, payload: arrProductID});
        } catch(err) {
            console.log(err);
        }
    }
}

export const AddToCart = (productID) => {
    return async(dispatch) => {
        let arrProductID = await AsyncStorage.getItem('cart');
        if(arrProductID === null) {
            dispatch({type: Types.ADD_TO_CART_REQUEST})
            console.log('cart null')
            try {
                let data = [productID];
                let jsonValue = JSON.stringify(data);
                await AsyncStorage.setItem('cart', jsonValue);
                dispatch({type: Types.ADD_TO_CART_SUCCESS});
            } catch(err) {
                console.log(err);
            }
        } else {
            dispatch({type: Types.ADD_TO_CART_REQUEST})
            try {
                let data = await AsyncStorage.getItem('cart');
                let arrProductID = JSON.parse(data);
                arrProductID.push(productID);
                let jsonValue = JSON.stringify(arrProductID);
                await AsyncStorage.setItem('cart', jsonValue);
                dispatch({type: Types.ADD_TO_CART_SUCCESS});
            } catch(err) {
                console.log(err);
            }
        }
    }
}