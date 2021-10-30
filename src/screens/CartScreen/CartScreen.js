import React, {useEffect} from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Button, 
    FlatList
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Colors from '../../utils/Colors';

//Loading screen
import {LoadingScreen} from '../LoadingScreen';

//redux
import {useSelector, useDispatch} from 'react-redux';

import {GetCart} from '../../actions';

//Component
import {Header, RenderCartItem} from './components';
import {CustomButton} from '../../components';

export function CartScreen() {

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.cartReducer.isLoading);
    const carts = useSelector(state => state.cartReducer.carts);

    useEffect(() => {
        dispatch(GetCart());
        console.log(carts)
    }, [])

    async function clearCart() {
        await AsyncStorage.removeItem('cart');
    }

    return (
        isLoading ?

        <LoadingScreen/>

        :

        <View style={styles.container}>
            <Header/>
            <FlatList
                data={carts}
                renderItem={({item}) => <RenderCartItem item={item}/>}
            />
            <Button title='See cart' onPress={() => console.log(carts)}/>
            <Button title='Clear cart' onPress={() => clearCart()}/>
            <CustomButton title='Order'/>
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
