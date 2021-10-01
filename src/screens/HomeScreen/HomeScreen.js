import React from 'react'
import { 
    View, 
    Text, 
    StatusBar, 
    StyleSheet,
} from 'react-native'


//Import component
import {WrapBannerAndCarousel} from './components'

export function HomeScreen() {
    return (
        <View style={styles.container}>
            <StatusBar hidden/>

            <WrapBannerAndCarousel/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        paddingTop: StatusBar.currentHeight
    }
})
