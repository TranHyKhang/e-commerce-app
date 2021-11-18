import React from 'react'
import { 
    View, 
    Text,
    FlatList
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {RenderOrderItem} from './components';

export  function RenderBodyTrackingOrder() {
    const orders = useSelector(state => state.orderReducer.orders);

    return (
        <View>
            <FlatList
                data={orders}
                renderItem={({item}) => <RenderOrderItem item={item}/>}
            />
        </View>
    )
}
