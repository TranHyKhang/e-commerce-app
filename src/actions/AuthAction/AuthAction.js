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

            dispatch({type: Types.GET_USER_INFO_SUCCESS, payload: data});
        } catch(err) {
            console.log(err);
        }
    }
}