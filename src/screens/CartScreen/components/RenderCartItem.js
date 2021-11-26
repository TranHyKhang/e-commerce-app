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
    

    //Animation
    const scrollX = new Animated.Value(0);
    const scrollClick = useRef(null);

    return (
        isLoading ?

        <LoadingScreen/>

        :

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
                    backgroundColor: Colors.white,
                    borderBottomWidth: 1,
                    borderColor: Colors.sub_title_color,
                    width: width
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

                    <Animated.View>
                        <TouchableOpacity
                            style={styles.wrapTrashIcon}
                            onPress={() => dispatch(removeItemInCart(item.productID))}
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
    },

    wrapTrashIcon: {
        backgroundColor: 'red',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        padding: 20
    }
})
