import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native'

import Modal from 'react-native-modal';

import Colors from '../../../utils/Colors';

import {CustomButton} from '../../../components';

import {useNavigation} from '@react-navigation/native';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('screen');

export function ModalNotification({ isVisible, setIsVisible, item}) {

    const navigation = useNavigation();

    return (
        <Modal 
            isVisible={isVisible}
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
                        <View style={[styles.wrapIcon, {borderColor: Colors.tab_button_focused_blue}]}>
                            <Entypo name='check' size={50} color={Colors.tab_button_focused_blue}/>   
                        </View>
                        <View>
                            <Text 
                                style={[styles.notificationStyle, {color: Colors.black}]}
                            >
                                {item.productName + ' has been added to cart'}
                            </Text>
                        </View>
                    </View>

                    <View style={{width: '100%'}}>
                        <CustomButton title='Go to cart' _handleEvent={() => {navigation.navigate('ProfileStack', {screen: 'CartScreen'})}}/>
                        <TouchableOpacity
                            onPress={() => setIsVisible(false)}
                        >
                            <Text 
                                style={{
                                    fontSize: 16, 
                                    fontWeight: '800',
                                    alignSelf: 'center',
                                    marginBottom: 10
                                }}
                            >
                                Close
                            </Text>
                        </TouchableOpacity>
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
        borderWidth: 5,
    },
    notificationStyle: {
        fontSize: 20,
        fontWeight: '700',
        padding: 10,
        textAlign: 'center'
    }
})
