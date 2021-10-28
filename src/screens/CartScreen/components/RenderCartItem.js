import React, {useEffect, useState} from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Button, Image
} from 'react-native';

import {LoadingScreen} from '../../LoadingScreen';

import {useSelector} from 'react-redux';

export function RenderCartItem({item}) {

    const products = useSelector(state => state.productReducer.products);

    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    function GetProductByID(id) {
        for(let item of products) {
            if(item._id == id)
                return item;
        }
    }

    useEffect(() => {
        setProduct(GetProductByID(item.productID))
        setIsLoading(false);
    },[])
    
    return (
        isLoading ?

        <LoadingScreen/>

        :

        <View style={styles.container}>
            <Image source={{uri: product.productImageUrl}} style={styles.productImage}/>
            <View style={styles.wrapOrderInfo}>
                <Text style={styles.productName}>{product.productName}</Text>
                <View style={styles.wrapSubInfo}>
                    <Text>Size: </Text>
                    <Text>{item.productSize}</Text>
                </View>
                <View style={styles.wrapSubInfo}>
                    <Text>Price: </Text>
                    <Text>{product.productPrice}</Text>
                    <Text>$</Text>
                </View>
                <View style={styles.wrapQuantity}>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {    
        display: 'flex',
        flexDirection:'row'
    },
    productImage: {
        width: 100,
        height: 100
    },
    wrapOrderInfo: {
        display: 'flex',
        justifyContent: 'center'
    },
    productName: {
        fontSize: 18,
        fontWeight: '600'
    },
    wrapSubInfo: {
        display: 'flex',
        flexDirection: 'row'
    },
    wrapQuantity: {

    }
})
