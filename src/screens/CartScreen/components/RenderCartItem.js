import React, {useEffect, useState} from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Button, Image
} from 'react-native';

import {LoadingScreen} from '../../LoadingScreen';

import {QuantityButton} from '../components';

//redux
import {useSelector, useDispatch} from 'react-redux';
import {UpdateProductQuantity} from '../../../actions';

import Colors from '../../../utils/Colors';

export function RenderCartItem({item, index}) {

    const products = useSelector(state => state.productReducer.products);
    const dispatch = useDispatch();

    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [quantity, setQuantity] = useState(item.quantity);

    function GetProductByID(id) {
        for(let item of products) {
            if(item._id == id)
                return item;
        }
    }

    function increaseQuantity() {
        setQuantity(quantity + 1);
        dispatch(UpdateProductQuantity(quantity + 1, index))
    }

    function decreaseQuantity() {
        setQuantity(quantity - 1);
        dispatch(UpdateProductQuantity(quantity - 1, index))

    }

    useEffect(() => {
        setProduct(GetProductByID(item.productID));
        setIsLoading(false)
    },[product])
    
    return (
        isLoading ?

        <LoadingScreen/>

        :

        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
            backgroundColor: Colors.white,
            borderBottomWidth: 1,
            borderColor: Colors.sub_title_color
        }}>
            <View style={styles.container}>
                <Image source={{uri: product.productImageUrl}} style={styles.productImage}/>
                
                <View style={styles.wrapOrderInfo}>
                    <Text style={styles.productName}>{product.productName}</Text>
                    <View style={styles.wrapSubInfo}>
                        <Text>Size: </Text>
                        <Text style={styles.valueStyle}>{item.productSize}</Text>
                    </View>
                    <View style={styles.wrapSubInfo}>
                        <Text>Price: </Text>
                        <Text style={styles.valueStyle}>{product.productPrice}</Text>
                        <Text style={styles.valueStyle}>$</Text>
                    </View>
                    
                </View>
            </View>
            <View style={styles.wrapQuantity}>
                <QuantityButton 
                    iconName="minus"
                    _handleEvent={decreaseQuantity}
                    UpdateProductQuantity={() => dispatch(UpdateProductQuantity(quantity, index))}
                />
                <View style={styles.quantity}>
                    <Text style={styles.valueStyle}>{quantity}</Text>
                </View>
                <QuantityButton 
                    iconName="plus"
                    _handleEvent={increaseQuantity}
                    UpdateProductQuantity={() => dispatch(UpdateProductQuantity(quantity, index))}

                />
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {    
        display: 'flex',
        flexDirection:'row',
        backgroundColor: Colors.white
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
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantity: {
        borderWidth: 0.9,
        padding: 8,
        marginLeft: 10,
        marginRight: 10
    },
    valueStyle: {
        fontSize: 16,
        fontWeight: '700'
    }
})
