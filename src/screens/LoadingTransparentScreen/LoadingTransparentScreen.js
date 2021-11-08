import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, } from 'react-native'

import Colors from '../../utils/Colors';

export function LoadingTransparentScreen() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' color={Colors.tab_button_focused_blue}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)'
    }
})

