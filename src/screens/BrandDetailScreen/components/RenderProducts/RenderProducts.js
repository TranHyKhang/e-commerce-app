import React from 'react';
import { View, Text, FlatList, LogBox, SafeAreaView } from 'react-native';

import {RenderProductItem} from '../../components'


import { YellowBox } from 'react-native';

import {useSelector} from 'react-redux'



// LogBox.ignoreLogs([
//   'VirtualizedLists should never be nested', // TODO: Remove when fixed
// ])

import {LoadingScreen} from '../../../LoadingScreen'

export function RenderProducts({products}) {

    const isLoading = useSelector(state => state.productReducer.isLoading)

    return (
        <View
            style={{ flex: 1}}
        >
            <FlatList
                numColumns={2}
                data={products}
                renderItem={({item}) => <RenderProductItem item={item}/>}
                keyExtractor={(item) => item._id}
            />
            <FlatList
                numColumns={2}
                data={products}
                renderItem={({item}) => <RenderProductItem item={item}/>}
                keyExtractor={(item) => item._id}
            />
        </View>
    )
}
