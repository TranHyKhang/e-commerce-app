import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

//import icon
import FeatherIcon from 'react-native-vector-icons/Feather';

export function RenderTabBarItem({name, color, title}) {
    return (
        <View style={styles.container}>
            <FeatherIcon style={styles.icon} name={name} color={color} size={30}/>
            <Text style={[styles.title, {color: color }]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        padding: 0,
        margin: 0,
        fontSize: 10,
        fontWeight:'bold'
    },
    icon: {
        padding: 0,
        margin: 0
    }
})