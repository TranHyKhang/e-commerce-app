import {Types} from '../actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GetCart = () => {
    return async(dispatch) => {
        dispatch({type: Types.GET_CART_REQUEST})
        try {
            let arrProductID = await AsyncStorage.getItem('cart');
            dispatch({type: Types.GET_CART_SUCCESS, payload: JSON.parse(arrProductID)});
        } catch(err) {
            console.log(err);
        }
    }
}

export const AddToCart = (productID, productSize) => {
    return async(dispatch) => {
        let arrProductID = await AsyncStorage.getItem('cart');
        if(arrProductID === null) {
            dispatch({type: Types.ADD_TO_CART_REQUEST})
            console.log('cart null')
            try {
                let data = [
                    {
                        productID: productID,
                        productSize: productSize,
                        quantity: 1
                    }
                ];
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
                let obj = {
                    productID: productID,
                    productSize: productSize,
                    quantity: 1
                }
                arrProductID.push(obj);
                let jsonValue = JSON.stringify(arrProductID);
                await AsyncStorage.setItem('cart', jsonValue);
                dispatch({type: Types.ADD_TO_CART_SUCCESS});
            } catch(err) {
                console.log(err);
            }
        }
    }
}