import React, {useEffect, useState} from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Button, 
    FlatList,
    Image
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {useNavigation} from '@react-navigation/native'

import Colors from '../../utils/Colors';

//Loading screen
import {LoadingScreen} from '../LoadingScreen';

//redux
import {
    useSelector, 
    useDispatch
} from 'react-redux';

import {GetCart} from '../../actions';

//Component
import {
    Header, 
    RenderCartItem,
    UserInfoModal
} from './components';

import EmptyCart from '../../utils/Images/empty-cart.png'

import {CustomButton} from '../../components';

export function CartScreen() {

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.cartReducer.isLoading);
    const carts = useSelector(state => state.cartReducer.carts);
    const user = useSelector(state => state.authReducer.user);
    const products = useSelector(state => state.productReducer.products);

    const navigation = useNavigation();

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        dispatch(GetCart());
        console.log(carts)
    }, [])

    async function clearCart() {
        await AsyncStorage.removeItem('cart');
    }

    function verifyToNavigate() {
        if(user !== null) {
            navigation.navigate('OrderConfirmScreen');
        } else {
           navigation.navigate('LoginScreen')
        }
    }

    function GetProductByID(id) {
        for(let item of products) {
            if(item._id == id)
                return item;
        }
    }

    return (
        isLoading ?

        <LoadingScreen/>

        :

        <View style={styles.container}>
            <Header/>

            {
                carts === null || carts.length === 0 ?
                <View style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image source={EmptyCart} style={{width: '80%', height: '80%'}}/>
                </View>
                :
                <FlatList
                    data={carts}
                    renderItem={
                        ({item, index}) => <RenderCartItem 
                            item={item} 
                            product={GetProductByID(item.productID)} 
                            index={index}
                        />
                    }
                />
            }
            
            {/* <Button title='See cart' onPress={() => console.log(carts)}/>
            <Button title='Clear cart' onPress={() => clearCart()}/> */}

            {/* <Button title="haha" onPress={() => console.log(carts)}/> */}

            <UserInfoModal isVisible={isVisible} setIsVisible={setIsVisible}/>
            
            <CustomButton title='Order' _handleEvent={() => verifyToNavigate()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        display: 'flex',
        flex: 1,
        paddingBottom: 10
    }
})
