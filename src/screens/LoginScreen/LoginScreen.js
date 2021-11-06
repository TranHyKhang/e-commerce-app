import React, {useState} from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {API_URL} from '../../utils/config'

import axios from 'axios';

import Colors from '../../utils/Colors';

import {useNavigation} from '@react-navigation/native';

//Components
import {CustomInput, CustomButton} from '../../components'
import {Header} from './components'



const {width, height} = Dimensions.get('screen');

export function LoginScreen() {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function postLogin() {
        try {
            let token = await axios.post(API_URL + '/auth/login', {userEmail: email, userPassword: password});
            try {
                await AsyncStorage.setItem('authToken', token.data);
            } catch(err) {
                console.log(err)
            }
        } catch(err) {
            //login fail
            console.log('haha');
        }
    }

    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.wrapBody}>
                <Text style={styles.screenTitle}>Sign in</Text>
                <View style={styles.wrapTextInput}>
                    <CustomInput 
                        label='Email' 
                        text={email} 
                        setText={setEmail}
                    />
                </View>
                <View style={styles.wrapTextInput}>
                    <CustomInput 
                        label='Password'
                        text={password}
                        setText={setPassword}
                    />
                </View>
                <View style={{
                    width: width/1.13,
                    margin: 10
                }}>
                    {/* Push login in here */}
                    <CustomButton title='Login' _handleEvent={() => postLogin()}/>
                </View>

                <View style={styles.wrapSignUpOption}>
                    <Text style={styles.signUpOtionLabel}>Don't have an account? </Text>
                    <TouchableOpacity
                        //navigate to sign up screen in here
                        onPress={() => navigation.navigate('SignUpScreen')}
                    >
                        <Text style={styles.signUpOptionLink}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: Colors.background_gray,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    wrapBody: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingBottom: 110
    },
    screenTitle: {
        color: Colors.pink_fire,
        fontSize: 40,
        fontWeight: '900',
    },
    wrapTextInput: {
        margin: 10
    },
    wrapSignUpOption: {
        display: 'flex',
        flexDirection: 'row'
    },
    signUpOtionLabel: {
        color: Colors.white
    },
    signUpOptionLink: {
        color: Colors.tab_button_focused_blue
    }
})
