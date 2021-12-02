import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'

import Logo from '../../../../../../utils/Images/Logo.png'

export function FavoriteIcon() {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image source={Logo} style={styles.LogoStyle}/>
            </View>
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
    },
    LogoStyle: {
        width: '100%',
        height: '100%'
    }
})
