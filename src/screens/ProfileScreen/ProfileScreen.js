import React, {useState, useEffect} from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Button,
    ScrollView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useSelector, useDispatch} from 'react-redux';

//Loading screen
import {LoadingScreen} from '../LoadingScreen'

//Component
import {
    HeaderDisplayInfo, 
    BodyTab, 
    ModalOrderSuccess,
    RenderBodyFavorites,
    RenderBodyTrackingOrder
} from './components';

//Actions
import {GetUserInfo} from '../../actions'

//Colors
import Colors from '../../utils/Colors';

export function ProfileScreen() {

    const user = useSelector(state => state.authReducer.user);
    const isLoading = useSelector(state => state.authReducer.isLoading);
    const isTabLeft = useSelector(state => state.bodyTabReducer.isTabLeft);
    const dispatch = useDispatch();
    

    

    useEffect(() => {
        dispatch(GetUserInfo());
        console.log('useEffect run')
    },[])
    
    return (
        isLoading ?

        <LoadingScreen/>
        
        :

        <ScrollView style={styles.container}>
            <HeaderDisplayInfo/>
            <BodyTab/>
            <ModalOrderSuccess/>

            {
                user !== null ?
                isTabLeft ?
                <RenderBodyFavorites/>
                :
                <RenderBodyTrackingOrder/>
                :
                null
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: Colors.white
    },

})
