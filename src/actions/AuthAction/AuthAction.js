import {Types} from '../../actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import {API_URL} from '../../utils/config'

export const GetUserInfo = () => {
    return async(dispatch) => {
        dispatch({type: Types.GET_USER_INFO_REQUEST});
        try {
            let token = await AsyncStorage.getItem('authToken');
            let data = await axios.get(API_URL + '/user', {
                headers: {
                    authorization: 'Bearer ' + token
                }
            });

            dispatch({type: Types.GET_USER_INFO_SUCCESS, payload: data.data});
        } catch(err) {
            console.log(err);
        }
    }
}

export const StoreUserTempInfo = (userInfo) => {
    return (dispatch) => {
        dispatch({type: Types.STORE_USER_TEMP_REQUREST})
        try {
            dispatch({type: Types.STORE_USER_TEMP_SUCCESS, payload: userInfo})
        } catch(err) {
            console.log(err);
        }
    }
}