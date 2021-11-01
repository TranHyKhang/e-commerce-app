import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Button,
    FlatList
} from 'react-native'

import {useSelector} from 'react-redux';

import {RenderCartItem} from '../components';

export function RenderCart() {
    
    const cart = useSelector(state => state.cartReducer.carts);

    return (
        <View>
            <FlatList
                data={cart}
                renderItem={({item}) => <RenderCartItem item={item}/>}
            />
        </View>
    )
}
