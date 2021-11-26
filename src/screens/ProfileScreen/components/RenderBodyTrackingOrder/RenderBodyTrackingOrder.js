import React from 'react'
import { 
    View, 
    Text,
    FlatList,
    LogBox
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {RenderOrderItem} from './components';

export  function RenderBodyTrackingOrder() {
    const orders = useSelector(state => state.orderReducer.orders);
    const user = useSelector(state => state.authReducer.user)

    //Ignore warning flatlist inside scroll view
    LogBox.ignoreLogs([
        'VirtualizedLists should never be nested'
    ])

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
