import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

export function FavoriteIcon() {
    return (
        <TouchableOpacity>
            <View style={styles.container}></View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        width: 50,
        height: 50,
        borderRadius: 100,
        marginLeft: 20,
        marginTop: 20
    }
})
