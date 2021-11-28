import React from 'react'
import { View, Text, Button } from 'react-native'


//Redux
import {useDispatch, useSelector} from 'react-redux';
import {GetFavoriteProducts} from '../../../../actions'

//Loading Screen
import {LoadingScreen} from '../../../LoadingScreen'

import AsyncStorage from '@react-native-async-storage/async-storage'

export function RenderBodyFavorites() {


    const dispatch = useDispatch();
    let favoriteProducts = useSelector(state => state.productReducer.favoriteProducts);
    const isLoading = useSelector(state => state.productReducer.isLoading);


    async function getData() {
        dispatch(GetFavoriteProducts());
        // let arr = await AsyncStorage.getItem('favorites');
        // console.log(JSON.parse(arr))
    }

    function doSomeThing() {
        console.log(favoriteProducts)
    }

    return (
        isLoading ?
        <LoadingScreen/>
        :
        
        <View>
            <Text>RenderBodyFavorites</Text>
            <Button title='Get data' onPress={() => getData()}/>
            <Button title='See data' onPress={() => doSomeThing()}/>
        </View>
    )
}
