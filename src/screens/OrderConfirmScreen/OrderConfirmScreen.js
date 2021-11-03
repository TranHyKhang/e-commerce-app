import React, {useState} from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Button,
} from 'react-native';

import {RadioButton} from 'react-native-paper';

import Colors from '../../utils/Colors';

import {useSelector} from 'react-redux';

import {
    RenderUserInfo,
    Header,
    RenderCart,
    RenderPaymentMethodItem
} from './components';

import {CustomButton} from '../../components'

export function OrderConfirmScreen() {

    const products = useSelector(state => state.productReducer.products);
    const carts = useSelector(state => state.cartReducer.carts)

    //Radio button state
    const [checked, setChecked] = useState('Paypal')

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
            <View>
                <Header/>
                <RenderUserInfo/>
                <RenderCart/>

                <View style={{
                    padding: 10
                }}>
                    <Text
                        style={{
                            fontWeight: '800',
                            fontSize: 16
                        }}
                    >
                        Payment method: 
                    </Text>
                    <RenderPaymentMethodItem
                        checked={checked}
                        value='Paypal'
                        _handleRadioButtonOnPress={() => setChecked('Paypal')}
                        label='Paypal'
                        iconName='cc-paypal'
                    />
                    <RenderPaymentMethodItem
                        checked={checked}
                        value='COD'
                        _handleRadioButtonOnPress={() => setChecked('COD')}
                        label='COD'
                        iconName='money'
                    />
                </View>

            </View>
            
            <View style={styles.wrapButton}>
                <View style={styles.wrapTotalMoney}>
                    <Text style={styles.label}>Total: </Text>
                    <Text style={styles.value}>{TotalMoney()}</Text>
                    <Text style={styles.value}>$</Text>
                </View>

                <CustomButton title="Next"/>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between'
    },
    wrapButton: {
    
    },
    wrapTotalMoney: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 15
    },
    label: {
        fontSize: 18,
        fontWeight: '800'
    },
    value: {
        fontSize: 18,
        fontWeight: '800'
    }
})
