import React from 'react'
import { View, Text, Button } from 'react-native'

export function OrderScreen({route}) {

    const {item} = route.params;

    return (
        <View>
            <Text>OrderScreenm</Text>
            <Text>{item._id}</Text>
            <Button title="haha" onPress={() => console.log(item)}/>
        </View>
    )
}
