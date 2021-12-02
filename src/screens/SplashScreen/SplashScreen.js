import React from 'react'
import { View, Text, StatusBar, StyleSheet, Image } from 'react-native'

import Colors from '../../utils/Colors'
import Logo from '../../utils/Images/Logo.png'

export function SplashScreen() {
    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <Image source={Logo} style={styles.logoStyle}/>
            <Text style={styles.appName}>SNKRS</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.black,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoStyle: {
        width: 150,
        height: 150
    },
    appName: {
        fontSize: 32,
        color: Colors.white,
        fontWeight: '900'
    }
})