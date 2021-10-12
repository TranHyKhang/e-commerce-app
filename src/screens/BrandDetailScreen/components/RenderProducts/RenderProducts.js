import React from 'react';
import { View, Text, FlatList } from 'react-native';

import {RenderProductItem} from '../../components'

export function RenderProducts({products}) {
    return (
        <View>
            <FlatList
                numColumns={2}
                nestedScrollEnabled
                data={products}
                renderItem={({item}) => <RenderProductItem item={item}/>}
                keyExtractor={(item) => item._id}
            />
        </View>
    )
}
