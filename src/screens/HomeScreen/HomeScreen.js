import React from 'react'
import { 
    View, 
    Text, 
    StatusBar, 
    StyleSheet,
    ScrollView
} from 'react-native'


//Import component
import {WrapBannerAndCarousel} from './components'

export function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <StatusBar hidden/>

            <WrapBannerAndCarousel/>
            {/* <WrapBannerAndCarousel/> */}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        // paddingTop: StatusBar.currentHeight
    }
})
