import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native'

const {width} = Dimensions.get('screen')

export function RenderProductItem({item}) {
    return (
        <View style={styles.container}>
            <Image 
                source={{uri: item.productImageUrl}}
                style={styles.productImage}
            />
            <Text style={styles.productName}>{item.productName}</Text>
            <Text>{item.productDescription}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width/2
    },
    productImage: {
        width: 100,
        height: 100
    },
    productName: {
        fontSize: 20
    },
    productDescription: {

    }
})
