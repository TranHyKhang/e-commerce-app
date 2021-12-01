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
import {useSelector, useDispatch} from 'react-redux';
import {HideTabBar} from '../../../../actions'

import {useNavigation} from '@react-navigation/native';

// Get width, height of screen
const {width, height} = Dimensions.get('screen')

export function FamousProduct({item}) {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <TouchableOpacity
        activeOpacity={0.95}
        onPress={() => {
            navigation.navigate('ProductDetailScreen', {item});
            dispatch(HideTabBar());
            // console.log(favoriteProducts)
        }}
        >
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
