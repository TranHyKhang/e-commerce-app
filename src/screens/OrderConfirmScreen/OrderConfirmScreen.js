import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Button
} from 'react-native';

import Colors from '../../utils/Colors';

import {useSelector} from 'react-redux';

import {
    RenderUserInfo,
    Header,
    RenderCart
} from './components';
import { cartReducer } from '../../reducers/cart/cartReducer';

export function OrderConfirmScreen() {

    const products = useSelector(state => state.productReducer.products);
    const carts = useSelector(state => state.cartReducer.carts)

    function TotalMoney() {
        let total = 0;
        for(let i = 0; i < carts.length; i++) {
            for(let j = 0; j < products.length; j++) {
                if(carts[i].productID == products[j]._id) {
                    total += products[j].productPrice * carts[i].quantity
                }
            }
        }

        return total;
    }

    return (
        <View style={styles.container}>
            <Header/>
            <RenderUserInfo/>
            <RenderCart/>
            <Button title="haha" onPress={() => console.log(TotalMoney())}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    }
})
