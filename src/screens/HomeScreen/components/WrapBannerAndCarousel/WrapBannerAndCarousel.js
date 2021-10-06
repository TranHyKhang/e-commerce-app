import React, {useEffect} from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    FlatList,
} from 'react-native'

//import Colors from utils
import Colors from '../../../../utils/Colors'

//Import component
import {FavoriteIcon, Carousel} from '../WrapBannerAndCarousel/components';

import {useSelector} from 'react-redux'

export function WrapBannerAndCarousel() {

    return (
        <View style={styles.container}>
            <FavoriteIcon/>
            <Text style={styles.screenName}>Discover</Text>

            <Carousel/>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    },
    screenName: {
        color: Colors.white,
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingTop: 10
    }
})