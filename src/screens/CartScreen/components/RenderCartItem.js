import React, {useEffect, useState, useRef} from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Button, Image,
    Animated,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import {LoadingScreen} from '../../LoadingScreen';

import {QuantityButton} from '../components';

//redux
import {useSelector, useDispatch} from 'react-redux';
import {UpdateProductQuantity, removeItemInCart} from '../../../actions';

import Colors from '../../../utils/Colors';

import Entypo from 'react-native-vector-icons/Entypo'

const {width} = Dimensions.get('screen')

export function RenderCartItem({item, index, product}) {

    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(item.quantity);


    function increaseQuantity() {
        setQuantity(quantity + 1);
        dispatch(UpdateProductQuantity(quantity + 1, index))
    }

    function decreaseQuantity() {
        setQuantity(quantity - 1);
        dispatch(UpdateProductQuantity(quantity - 1, index))

    }
    
    
    //Animation
    const scrollX = new Animated.Value(0);
    const scrollClick = useRef(null);

    return (

        <Animated.ScrollView
            ref={scrollClick}
            horizontal
            snapToInterval={width}
            scrollTo={{ x: scrollClick, animated: true }}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
            )}
        >
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
                // backgroundColor: Colors.white,
                // borderBottomWidth: 3,
                // borderColor: Colors.sub_title_color,
                // shadowColor: "#000",
                // shadowOffset: {
                //     width: 0,
                //     height: 1,
                // },
                // shadowOpacity: 0.20,
                // shadowRadius: 1.41,
                
                // elevation: 2,
                // // background color must be set
                // backgroundColor : "#0000", // invisible color
                width: width
            }}>
                <View style={styles.container}>
                    <Image source={{uri: product.productImageUrl}} style={styles.productImage}/>
                    
                    <View style={styles.wrapOrderInfo}>
                        <Text style={styles.productName}>{product.productName}</Text>
                        <View style={styles.wrapSubInfo}>
                            <Text style={styles.valueStyle}>Size: </Text>
                            <Text style={styles.valueStyle}>{item.productSize}</Text>
                        </View>
                        <View style={styles.wrapSubInfo}>
                            <Text style={styles.valueStyle}>Price: </Text>
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

                <Animated.View>
                    <TouchableOpacity
                        style={styles.wrapTrashIcon}
                        onPress={() => dispatch(removeItemInCart(index))}
                    >
                        <Entypo name='trash' size={30} color={Colors.white}/>
                    </TouchableOpacity>
                </Animated.View>
            
        </Animated.ScrollView>

        
        
    )
}

const styles = StyleSheet.create({
    container: {    
        display: 'flex',
        flexDirection:'row',
        backgroundColor: Colors.white,
        
    },
    productImage: {
        width: 100,
        height: 100,
        marginRight: 5
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
        // borderWidth: 2,
        justifyContent: 'space-evenly'
    },
    quantity: {
        borderWidth: 2,
        padding: 8,
        marginLeft: 10,
        marginRight: 10
    },
    valueStyle: {
        fontSize: 16,
        fontWeight: '700'
    },

    wrapTrashIcon: {
        backgroundColor: 'red',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        padding: 20
    }
})
