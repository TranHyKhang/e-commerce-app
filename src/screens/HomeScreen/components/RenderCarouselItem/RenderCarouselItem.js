import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export function RenderCarouselItem() {
    return (
        <View style={styles.container}>
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
