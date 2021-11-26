import {Types} from '../actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Axios from 'axios';
import {API_URL} from '../../utils/config'

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

export const UpdateProductQuantity = (quantity, index) => {
    return async(dispatch) => {
        dispatch({type: Types.UPDATE_PRODUCT_QUANTITY_REQUEST})
        try {
            let arr = await AsyncStorage.getItem('cart')
            let newArr = JSON.parse(arr);
            newArr[index].quantity = quantity;
            await AsyncStorage.setItem('cart', JSON.stringify(newArr));
            console.log(newArr)

            let arrUpdated = await AsyncStorage.getItem('cart');
            let newArrUpdated = JSON.parse(arrUpdated)
            dispatch({type: Types.UPDATE_PRODUCT_QUANTITY_SUCCESS, payload: newArrUpdated})
        } catch(err) {
            console.log(err);
        }
    }
}

export const createOrder = ({userID, order, paymentMethod, paymentStatus}) => {
    return async (dispatch) => {
        dispatch({type: Types.CREATE_ORDER_REQUEST});
        try {
            await Axios.post(API_URL + '/api/order', {
                userID: userID,
                cartItem: order,
                paymentMethod: paymentMethod,
                paymentStatus: paymentStatus
            })
            dispatch({type: Types.CREATE_ORDER_SUCCESS});
            
        } catch(err) {
            console.log(err)
        }

    }
}

export const openModalOrderSuccess = () => {
    return (dispatch) => {
        try {
            dispatch({type: Types.MODAL_SUCCESS_VISIBLE});
        } catch(err) {
            console.log(err);
        }
    }
}

export const closeModalOrderSuccess = () => {
    return (dispatch) => {
        try {
            dispatch({type: Types.MODAL_SUCCESS_INVISIBLE});
        } catch(err) {
            console.log(err);
        }
    }
}

export const removeItemInCart = (index) => {
    return async(dispatch) => {
        dispatch({type: Types.REMOVE_CART_ITEM_REQUEST})
        try {
            let a = await AsyncStorage.getItem('cart');
            let b = JSON.parse(a);

            let arr = [];
            for(let x of b) {
                if(b.indexOf(x) !== index)
                    arr.push(x);
            }

            await AsyncStorage.setItem('cart', JSON.stringify(arr));

            let c = await AsyncStorage.getItem('cart');
            dispatch({type:Types.REMOVE_CART_ITEM_SUCCESS, payload: JSON.parse(c)})
        } catch(err) {
            console.log(err);
        }
    }
}