import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'

import Colors from '../../../../../../utils/Colors'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export function RenderCarouselItem({item}) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons 
                color={Colors.pink_fire} 
                size={30} 
                name="fire"
                style={styles.fireIcon}
            />
            <ImageBackground 
                source={{uri: item.productImageUrl}}
                style={styles.imageStyle}
                resizeMode='cover'
            />
            <View style={styles.wrapTitle}>
                <Text style={styles.productBrandName}>
                    {item.productBrandName}
                </Text>
                <Text style={styles.productName}>
                    {item.productName}
                </Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 150, 
        height: 180, 
        backgroundColor: Colors.white, 
        margin: 10,
        borderRadius: 15,
        display: 'flex',
        padding: 10
    },
    fireIcon: {
        position: 'absolute',
        left: 10,
        top: 10
    },
    imageStyle: {
        // display: 'flex',
        // flex: 1,
        // backgroundColor: 'red',
        position:'absolute',
        width: 150,
        height: 150,
        left: 0,
        top: -10
    },
    wrapTitle: {
        position: 'absolute',
        bottom: 20,
        left: 10
    },
    productBrandName: {
        fontWeight: '900',
        fontSize: 16,
    },
    productName: {
        // marginBottom: 15,
        color: Colors.sub_title_color,
        fontWeight: '600'
    }
})
