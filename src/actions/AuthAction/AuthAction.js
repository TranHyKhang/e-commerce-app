import {Types} from '../../actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import {API_URL} from '../../utils/config'


//get user
export const GetUserInfo = () => {
    return async(dispatch) => {
        dispatch({type: Types.GET_USER_INFO_REQUEST});
        try {
            let token = await AsyncStorage.getItem('authToken');
            if(token !== null) {
                let data = await axios.get(API_URL + '/user', {
                    headers: {
                        authorization: 'Bearer ' + token
                    }
                });
    
                dispatch({type: Types.GET_USER_INFO_SUCCESS, payload: data.data});
            } else {
                dispatch({type: Types.GET_USER_INFO_SUCCESS, payload: null});
                
            }
            
        } catch(err) {
            console.log(err);
        }
    }
}

//Login
export const postLogin = (email, password, navigation) => {
    return async(dispatch) => {
        dispatch({type: Types.LOG_OUT_REQUEST});
        // navigation.navigate('ProfileScreen')
        try {
            let token = await axios.post(API_URL + '/auth/login', {userEmail: email, userPassword: password});
            await AsyncStorage.setItem('authToken', token.data);
            dispatch({type: Types.LOGIN_SUCCESS})

            if(token !== null) {
                let data = await axios.get(API_URL + '/user', {
                    headers: {
                        authorization: 'Bearer ' + token.data
                    }
                });
    
                dispatch({type: Types.GET_USER_INFO_SUCCESS, payload: data.data});
            } else {
                dispatch({type: Types.GET_USER_INFO_SUCCESS, payload: null});
                
            }
        } catch(err) {
            console.log(err);
        }
    }
}

//Logout
export const LogOut = () => {
    return async(dispatch) => {
        dispatch({type: Types.LOGIN_REQUEST});
        try {
            await AsyncStorage.removeItem('authToken');
            dispatch({type: Types.LOG_OUT_SUCCESS, payload: null});
        } catch(err) {
            console.log(err);
        }
    }
}

//store user if user don't want to register
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

//Create new user account
export const SignUp = (user) => {
    return async(dispatch) => {
        dispatch({type: Types.SIGN_UP_REQUEST})
        if(user.password !== user.confirmPassword) {
            dispatch({type: Types.SIGN_UP_FAILED, payload: 'Password and confirm password not match!'});
            return;
        }
        try {
            console.log('o day')

            let res = await axios.post(API_URL + '/auth/register', {
                userName: user.userName,
                userEmail: user.email,
                userPassword: user.password,
                userPhoneNumber: user.userPhone,
                userAddress: user.userAddress
            });
            console.log(res)
            dispatch({type: Types.SIGN_UP_SUCCESS})
        } catch(err) {
            console.log(err);
        }
    }
}