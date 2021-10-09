import React from 'react';
import { 
    View, 
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions 
} from 'react-native';

//Import redux hook
import {useSelector} from 'react-redux';

// Get width, height of screen
const {width, height} = Dimensions.get('screen')

export function FamousProduct({item}) {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image 
                    source={{uri: item.productImageUrl}} 
                    style={styles.itemImage}
                />
                <View style={styles.wrapItemInfo}>
                    <Text style={styles.itemBrandName}>{item.productBrandName}</Text>
                    <Text style={styles.itemName}>{item.productName.toUpperCase()}</Text>
                </View>
                
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: height/2,
        // backgroundColor: 'red',
    },
    itemImage: {
        width: "100%",
        height: "100%",
        position: 'absolute'
    },
    wrapItemInfo: {
        display: 'flex',
        alignItems: 'center',
        marginTop: height/2.3
    },
    itemBrandName: {
        fontWeight: '700',
        fontSize: 25
    },
    itemName: {
        fontSize: 20
    }
})
