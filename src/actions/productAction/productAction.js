//Import Types
import {Types} from '../actionTypes';
import axios from 'axios';
import {API_URL} from '../../utils/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getProducts = () => {
    
    return async(dispatch) => {
        dispatch({type: Types.GET_ALL_PRODUCT_REQUEST});
        try {
            let data = await axios.get(API_URL + '/api/products');
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

export const GetFavoriteProducts = () => {
    return async(dispatch) => {

        dispatch({type: Types.GET_FAVORITE_ITEMS_REQUEST});

        try {
            let arr = await AsyncStorage.getItem('favorites');
            dispatch({type: Types.GET_FAVORITE_ITEMS_SUCCESS, payload: JSON.parse(arr)});
        } catch(err) {
            console.log(err);
        }


    }
}

export const AddFavoriteItem = (item) => {
    return  async(dispatch) => {
        dispatch({type: Types.ADD_FAVORITE_ITEM_REQUEST})
        try {
            let arr = await AsyncStorage.getItem('favorites');
            if(arr !== null) {
                let newArr = JSON.parse(arr);

                newArr.push(item);
    
                await AsyncStorage.setItem('favorites', JSON.stringify(newArr));

                let data = await AsyncStorage.getItem('favorites');
                dispatch({
                    type: Types.ADD_FAVORITE_ITEM_SUCCESS,
                    payload: JSON.parse(data)
                })
            } 
            else {
                let arr = [];
                arr.push(item);
                await AsyncStorage.setItem('favorites', JSON.stringify(arr));

                let data = await AsyncStorage.getItem('favorites');
                dispatch({type: Types.ADD_FAVORITE_ITEM_SUCCESS, payload: JSON.parse(data)})
            }
            
        }
        catch(err) {
            console.log(err);
        }
    }
}

export const RemoveFavoriteItem = (item) => {
    return async(dispatch) => {
        dispatch({type: Types.REMOVE_CART_ITEM_REQUEST});
        try {
            let arr = await AsyncStorage.getItem('favorites');
            let newArr = JSON.parse(arr);

            let filterArr = newArr.filter(x => x._id !== item._id);

            await AsyncStorage.setItem('favorites', JSON.stringify(filterArr));
            

            let data = await AsyncStorage.getItem('favorites');
            dispatch({type: Types.REMOVE_FAVORITE_ITEM_SUCCESS, payload: JSON.parse(data)})
        }
        catch(err) {
            console.log(err);
        }
    }
}