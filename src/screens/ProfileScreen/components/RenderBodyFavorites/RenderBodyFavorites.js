import React from 'react'
import { 
    View, 
    Text, 
    Button,
    FlatList, 
    ScrollView
} from 'react-native'


//Redux
import {useDispatch, useSelector} from 'react-redux';
import {GetFavoriteProducts} from '../../../../actions'

//Loading Screen
import {LoadingScreen} from '../../../LoadingScreen'
import {RenderProductItem} from './components'

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
        
        <ScrollView>
            <FlatList
                numColumns={2}
                data={favoriteProducts}
                renderItem={({item}) => <RenderProductItem item={item}/>}
            />
        </ScrollView>
    )
}
