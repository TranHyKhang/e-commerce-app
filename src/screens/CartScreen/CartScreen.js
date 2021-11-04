import React, {useEffect, useState} from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Button, 
    FlatList,
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

import {CustomButton} from '../../components';

export function CartScreen() {

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.cartReducer.isLoading);
    const carts = useSelector(state => state.cartReducer.carts);
    const user = useSelector(state => state.authReducer.user);

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
            setIsVisible(true)
        }
    }

    return (
        isLoading ?

        <LoadingScreen/>

        :

        <View style={styles.container}>
            <Header/>
            <FlatList
                data={carts}
                renderItem={({item, index}) => <RenderCartItem item={item} index={index}/>}
            />
            {/* <Button title='See cart' onPress={() => console.log(carts)}/>
            <Button title='Clear cart' onPress={() => clearCart()}/> */}

            {/* <Button title="haha" onPress={() => console.log(user !== null)}/> */}

            <UserInfoModal isVisible={isVisible} setIsVisible={setIsVisible}/>
            
            <CustomButton title='Order' _handleEvent={() => verifyToNavigate()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        display: 'flex',
        flex: 1
    }
})