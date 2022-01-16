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
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {useNavigation} from '@react-navigation/native'

import {useDispatch} from 'react-redux';
import {UnHideTabBar} from '../../../actions';

const {width, height} = Dimensions.get('screen');

export function ModelNotification({notification, isVisible, setIsVisible}) {

    const navigation = useNavigation();

    const dispatch = useDispatch();

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
                    {
                        notification !== null 
                        ?
                        <View 
                        style={{
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center'
                        }}
                        >
                            <MaterialIcon name='error' size={80} color={Colors.pink_fire}/>   
                            <Text 
                                style={[styles.notificationStyle, {color: Colors.pink_fire}]}
                            >
                                {notification}
                            </Text>
                        </View>
                        :
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
                                style={[styles.notificationStyle, {color: Colors.pink_fire}]}
                            >
                                Welcome!!!
                            </Text>
                        </View>
                        
                    }
                    

                    <View style={{width: '100%'}}>
                        <CustomButton 
                            title='Next' 
                            _handleEvent={() => {
                                if(notification !== null){
                                    setIsVisible(false)
                                } else {
                                    setIsVisible(false)
                                    navigation.navigate('ProfileScreen');
                                    dispatch(UnHideTabBar())
                                }
                            }}
                        />
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
        alignItems:'center',
    },
    wrapContent: {
        width: width/1.5,
        height: height/3,
        backgroundColor: Colors.white,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20
    },
    wrapIcon: {
        padding: 10,
        borderRadius: 100,
        borderWidth: 5
    },
    notificationStyle: {
        fontSize: 25,
        fontWeight: '600',
        padding: 10,
        textAlign: 'center'
    }
})