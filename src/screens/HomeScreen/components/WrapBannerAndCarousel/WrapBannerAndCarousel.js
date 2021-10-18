import React, {useEffect} from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    FlatList,
    ImageBackground
} from 'react-native'

//import Colors from utils
import Colors from '../../../../utils/Colors'

import background from '../../../../utils/Images/background.jpg'

//Import component
import {FavoriteIcon, Carousel} from '../WrapBannerAndCarousel/components';

import {useSelector} from 'react-redux'

export function WrapBannerAndCarousel() {

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={background} 
                style={styles.backgroundImage}
                resizeMode='cover'
            />
            <FavoriteIcon/>
            <Text style={styles.screenName}>Discover</Text>
            <Carousel/>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'black'
    },
    screenName: {
        color: Colors.white,
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingTop: 10
    },
    backgroundImage: {
        display: 'flex',
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
})