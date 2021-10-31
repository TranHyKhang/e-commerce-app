import React, {useState} from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    StatusBar,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import {TextInput} from 'react-native-paper'; 

import AntDesign from 'react-native-vector-icons/AntDesign';

import Modal from 'react-native-modal';

import {CustomTextInput} from '../components';
import {CustomButton} from '../../../components';
import Colors from '../../../utils/Colors';

export function UserInfoModal({isVisible, setIsVisible}) {

    const [name, setName] = useState('');
    const[phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    return (
        <Modal isVisible={isVisible} statusBarTranslucent>
            <View style={styles.container}>
                <View style={styles.wrapHeader}>
                    <Text style={styles.title}>User info</Text>
                    <TouchableOpacity 
                        onPress={() => setIsVisible(false)}
                    >
                        <AntDesign name='close' size={20} style={styles.closeIcon}/>
                    </TouchableOpacity>
                </View>
                <CustomTextInput label='User name' text={name} setText={setName}/>
                <CustomTextInput label='Phone number' text={phone} setText={setPhone}/>
                <CustomTextInput label='Address' text={address} setText={setAddress}/>
                
                <CustomButton title='Next' _handleEvent={() => console.log(name, phone, address)}/>
            </View>
        </Modal>
        
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        borderRadius: 10
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        alignSelf: 'flex-start',
        margin: 10,
        marginLeft: 15
    },
    wrapHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    closeIcon: {
        marginRight: 15
    }
})
