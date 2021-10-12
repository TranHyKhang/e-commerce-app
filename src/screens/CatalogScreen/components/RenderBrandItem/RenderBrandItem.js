import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity 
} from 'react-native'

import Colors from '../../../../utils/Colors'

import {useNavigation} from '@react-navigation/native'

export function RenderBrandItem({item}) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('BrandDetailScreen', {item})}
        >
            <View style={styles.container}>
                <Image 
                    source={{uri: item.productBrandIconImage}}
                    style={styles.imageStyle}
                />
                <Text style={styles.brandStyle}>{item.productBrand}</Text>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 35,
        paddingRight: 20,
        borderTopWidth: 1,
        borderTopColor: '#ddd'
        // backgroundColor: 'red',
    },
    imageStyle: {
        width: 35,
        height: 35
    },
    brandStyle: {
        marginLeft: 15,
        fontSize: 18,

        fontWeight: '900'
    }
})
