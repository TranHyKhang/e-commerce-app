import React from 'react'
import { View, Text, Button } from 'react-native'

export function OrderScreen() {

    return (
        <View>
            <Text>OrderScreenm</Text>
            <Text>{item._id}</Text>
            <Button title="haha" onPress={() => console.log(item)}/>
        </View>
    )
}
