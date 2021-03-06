import React from 'react'
import { 
    View, 
    Text,
    TouchableOpacity,
    Modal,
    StyleSheet,
    StatusBar
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {API_URL} from '../../../utils/config';

import {WebView} from 'react-native-webview';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {useSelector, useDispatch} from 'react-redux'; 
import {createOrder, openModalOrderSuccess} from '../../../actions';

import Colors from '../../../utils/Colors'

export function RenderPaypalView({TotalMoney, paymentStatus,setPaymentStatus, modalIsVisible, setModalIsVisible, paymentMethod}) {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const user = useSelector(state => state.authReducer.user);
    const carts = useSelector(state => state.cartReducer.carts);


    const handleResponse = data => {
        console.log(data)

        if(data.title === 'Success') {
            setPaymentStatus("Complete")
            dispatch(createOrder({userID: user._id, order: carts, paymentMethod: paymentMethod, paymentStatus: 1 }))
            setModalIsVisible(false);
            navigation.navigate('ProfileScreen');
            dispatch(openModalOrderSuccess());
            
            //clear cart after success
        } else if(data.title === 'cancel') {
            setPaymentStatus('Cancelled');
            setModalIsVisible(false)
        }
    }

    const obj = {
        carts: carts,
        TotalMoney: TotalMoney
    }

    return (
        <View>
            <Modal
                visible={modalIsVisible}
                onRequestClose={() => setModalIsVisible(false)}
            >
                <TouchableOpacity 
                    onPress={() => setModalIsVisible(false)}
                >
                    <View style={styles.headerContainer}>
                        <AntDesign name='close' size={30} color={Colors.black}/>
                    </View>
                </TouchableOpacity>
                <WebView
                    source={{
                        uri: API_URL + '/paypal', 
                        method: 'POST',
                        body: 'Data=' + JSON.stringify({carts: carts, TotalMoney: TotalMoney}),
                    }}
                    onNavigationStateChange={data => handleResponse(data)}
                />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        // backgroundColor: Colors.pink_fire,
        padding: 10,
        display: 'flex',
        alignItems:'flex-end'
    }
})