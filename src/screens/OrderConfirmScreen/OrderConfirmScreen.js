import React, {useState} from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Button,
    ScrollView
} from 'react-native';


import Colors from '../../utils/Colors';

import {useNavigation} from '@react-navigation/native';

import {useSelector, useDispatch} from 'react-redux';
import {createOrder, openModalOrderSuccess} from '../../actions';

import {
    RenderUserInfo,
    Header,
    RenderCart,
    RenderPaymentMethodItem,
    RenderPaypalView
} from './components';

import {CustomButton} from '../../components'

export function OrderConfirmScreen() {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const products = useSelector(state => state.productReducer.products);
    const carts = useSelector(state => state.cartReducer.carts)
    const user = useSelector(state => state.authReducer.user);

    //Radio button state
    const [checked, setChecked] = useState('Paypal')

    //Paypal state
    const [paymentStatus, setPaymentStatus] = useState('');
    const [modalIsVisible, setModalIsVisible] = useState(false);

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

    function handleSelectOption() {
        if(checked === 'Paypal') {
            setModalIsVisible(true);
        } else if(checked === 'COD') {
            dispatch(createOrder({userID: user._id, paymentMethod: checked, paymentStatus: 0, order: carts}));
            navigation.navigate('ProfileScreen')
            dispatch(openModalOrderSuccess());

            //Clean cart after order
        }
    }

    return (
        <ScrollView style={{display: 'flex', flex: 1, backgroundColor: 'white'}}>
            <View style={styles.container}>
                <View>
                    <Header modalIsVisible={modalIsVisible} setModalIsVisible={setModalIsVisible}/>
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

                    <CustomButton title="Next" _handleEvent={() => handleSelectOption()}/>

                </View>

                <RenderPaypalView 
                    paymentStatus={paymentStatus} 
                    setPaymentStatus={setPaymentStatus}
                    modalIsVisible={modalIsVisible}
                    setModalIsVisible={setModalIsVisible}
                    paymentMethod={checked}
                    TotalMoney={TotalMoney()}
                />
            </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white'
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
