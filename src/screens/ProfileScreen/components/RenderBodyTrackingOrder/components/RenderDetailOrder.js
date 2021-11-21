import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    FlatList,
    Button
} from 'react-native';

import {useSelector} from 'react-redux';

import Colors from '../../../../../utils/Colors';

import {RenderProductItem} from './RenderProductItem';

export function RenderDetailOrder({item}) {

    const user = useSelector(state => state.authReducer.user);
    const products = useSelector(state => state.productReducer.products);

    function getProduct(productID) {
        let product = null;

        for(let x of products) {
            if(x._id === productID) 
                product = x;
        }

        return product;
    }

    function TotalMoney() {
        let total = 0;
        for(let i = 0; i < item.cartItem.length; i++) {
            for(let j = 0; j < products.length; j++) {
                if(item.cartItem[i].productID == products[j]._id) {
                    total += products[j].productPrice * item.cartItem[i].quantity
                }
            }
        }

        return total;
    }

    return (
        <View>
            <View style={styles.wrapUserInfo}>
                <View style={styles.wrapLabelValue}>
                    <Text style={styles.labelStyle}>User name: </Text>
                    <Text style={styles.valueStyle}>{user.userName}</Text>
                </View>
                <View style={styles.wrapLabelValue}>
                    <Text style={styles.labelStyle}>User phone: </Text>
                    <Text style={styles.valueStyle}>{user.userPhoneNumber}</Text>
                </View>
                <View style={styles.wrapLabelValue}>
                    <Text style={styles.labelStyle}>Address: : </Text>
                    <Text style={styles.valueStyle}>{user.userAddress}</Text>
                </View>
            </View>

            <View style={styles.wrapOrderDetail}>
                <FlatList
                    data={item.cartItem}
                    renderItem={({item}) => <RenderProductItem item={getProduct(item.productID)} order={item}/>}
                />
            </View>

            <View 
                style={[
                    styles.wrapLabelValue, 
                    {
                        justifyContent: 'space-between',
                        padding: 10
                    }
                ]}
            >
                <Text style={{fontWeight: '700', fontSize: 18}}>Total:</Text>
                <Text style={{fontWeight: '700', fontSize: 18}}>{TotalMoney() + '$'}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    wrapUserInfo: {
        backgroundColor: Colors.tab_button_focused_blue,
        padding: 10
    },
    wrapLabelValue: {
        display: 'flex',
        flexDirection: 'row'
    },
    labelStyle: {
        color: Colors.white,
        fontWeight: '700'
    },
    valueStyle: {
        fontWeight: '700',
        color: Colors.white
    },
    wrapOrderDetail: {
        padding: 10
    }
})