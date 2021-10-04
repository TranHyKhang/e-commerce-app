import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export function RenderCarouselItem({item}) {
    return (
        <View style={styles.container}>
            <Image
                source={{uri: item.productImageUrl}}
                style={{width: '100%', height: '100%'}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 120, 
        height: 180, 
        backgroundColor: 'red', 
        margin: 10,
        borderRadius: 20
    }
})
