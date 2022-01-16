import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'

import Modal from 'react-native-modal';

import Colors from '../../../utils/Colors';

import {CustomButton} from '../../../components';

import Entypo from 'react-native-vector-icons/Entypo';

//redux
import {useSelector, useDispatch} from 'react-redux';
import {closeModalOrderSuccess} from '../../../actions'

const {width, height} = Dimensions.get('screen');

export function ModalOrderSuccess() {

    const dispatch = useDispatch();
    const modalOrderSuccessVisible = useSelector(state => state.cartReducer.modalOrderSuccessVisible);

    return (
        <Modal 
            isVisible={modalOrderSuccessVisible}
            statusBarTranslucent
            animationIn='slideInUp'
        >
            <View style={styles.container}>
                <View style={styles.wrapContent}>
                    <View>
                    </View>

                    <View 
                    style={{
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center'
                    }}
                    >
                        <View style={[styles.wrapIcon, {borderColor: Colors.pink_fire}]}>
                            <Entypo name='check' size={50} color={Colors.pink_fire}/>   
                        </View>
                        <Text 
                            style={[
                                styles.notificationStyle, 
                                {
                                    color: Colors.pink_fire, 
                                    fontWeight: '900',
                                    fontSize: 25
                                }
                            ]}
                        >
                            Thank You
                        </Text>
                        <Text 
                            style={[
                                styles.notificationStyle, 
                                {
                                    color: Colors.pink_fire, 
                                    fontWeight: '700',
                                    fontSize: 18,
                                    textAlign: 'center'
                                }
                            ]}
                        >
                            Your order has been places successfully
                        </Text>
                    </View>
                    
                    <View style={{width: '100%'}}>
                        <CustomButton title='Close' _handleEvent={() => dispatch(closeModalOrderSuccess())}/>
                    </View>
                    
                </View>
            </View>
        </Modal>
        
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'
    },
    wrapContent: {
        width: width/1.2,
        height: height/2,
        backgroundColor: Colors.white,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    wrapIcon: {
        padding: 10,
        borderRadius: 100,
        borderWidth: 3,
        marginBottom: 10
    },
    notificationStyle: {
        padding: 10,
    }
})