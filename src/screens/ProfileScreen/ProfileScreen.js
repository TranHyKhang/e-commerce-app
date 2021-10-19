import React, {useState} from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Button
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage'

import {useSelector, useDispatch} from 'react-redux'

import {GetUserInfo} from '../../actions'

import Colors from '../../utils/Colors';

export function ProfileScreen() {

    const user = useSelector(state => state.authReducer.user);
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
    
    return (
        <View style={styles.container}>
            <Text>ProfileScreen</Text>

            <Button title='Add token to async storage' onPress={() => StoreToken()}/>
            <Button title='Add token to async storage' onPress={() => GetToken()}/>
            <Button title="See token" onPress={() => console.log(token)}/>

            <Button title='Get User Info' onPress={() => dispatch(GetUserInfo())}/>

            <Button title='Log data' onPress={() => console.log(user)}/>
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
