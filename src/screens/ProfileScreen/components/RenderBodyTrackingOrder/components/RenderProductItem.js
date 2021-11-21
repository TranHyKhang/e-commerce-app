import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export function RenderProductItem({item, order}) {

    
    return (
        <View style={styles.container}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Image source={{uri: item.productImageUrl}} style={styles.ImageStyle}/>
                <View>
                    <Text style={styles.textStyle}>{item.productName}</Text>
                    <Text style={styles.textStyle}>{ 'Size: ' + order.productSize}</Text>
                </View>
            </View>
            
            <Text style={styles.textStyle}>{'x' + order.quantity}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textStyle: {
        fontWeight: '700'
    },
    ImageStyle: {
        width: 100,
        height: 100,
        marginRight: 10
    }
})