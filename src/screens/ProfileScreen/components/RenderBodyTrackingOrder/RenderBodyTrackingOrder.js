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
    const user = useSelector(state => state.authReducer.user)

    return (
        <View>
            {
                orders === null ?
                <Text>No login</Text>
                :
                <FlatList
                    data={orders}
                    renderItem={({item}) => <RenderOrderItem item={item}/>}
                />
            }
            
        </View>
    )
}
