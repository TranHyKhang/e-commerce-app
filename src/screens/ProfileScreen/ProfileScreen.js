import React, {useState, useEffect} from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Button
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useSelector, useDispatch} from 'react-redux';

//Loading screen
import {LoadingScreen} from '../LoadingScreen'

//Component
import {HeaderDisplayInfo, BodyTab} from './components';

//Actions
import {GetUserInfo} from '../../actions'

//Colors
import Colors from '../../utils/Colors';

export function ProfileScreen() {

    const user = useSelector(state => state.authReducer.user);
    const isLoading = useSelector(state => state.authReducer.isLoading);
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    async function StoreToken() {
        try {
            await AsyncStorage.setItem('authToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MTZkODBmOWU0MzcyOGU0NDg1ZTY1OWEiLCJpYXQiOjE2MzQ2NTQ0NDd9.sy91zbq5p6UHcbsoMbFCsof8tPmYaRUtamfN_95lTFI');
        }
        catch(err) {
            console.log(err);
        }
    }

    async function GetToken() {
        try {
            let token = await AsyncStorage.getItem('authToken');
            setToken(token);
        }catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        dispatch(GetUserInfo());
        console.log('useEffect run')
    },[])
    
    return (
        isLoading ?
        <LoadingScreen/>
        :

        <View style={styles.container}>
            <HeaderDisplayInfo/>
            <BodyTab/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: Colors.white
    },

})
