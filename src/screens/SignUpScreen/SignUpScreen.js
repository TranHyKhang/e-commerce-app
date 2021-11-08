import React, {useState} from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Button
} from 'react-native';

import Colors from '../../utils/Colors';

import {useNavigation} from '@react-navigation/native';

import {LoadingTransparentScreen} from '../LoadingTransparentScreen';

//Components
import {CustomInput, CustomButton} from '../../components'
import {Header, ModelNotification} from './components'

//Redux
import {useDispatch, useSelector} from 'react-redux';
import {SignUp} from '../../actions'

const {width, height} = Dimensions.get('screen');

export function SignUpScreen() {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const error = useSelector(state => state.authReducer.error);
    const isLoading = useSelector(state => state.authReducer.isLoading);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userAddress, setUserAddress] = useState('');

    const [isVisible, setIsVisible] = useState(false);


    return (
        <ScrollView>
            <View style={styles.container}>
                <Header/>
                <View style={styles.wrapBody}>
                    <Text style={styles.screenTitle}>Sign Up</Text>
                    <View style={styles.wrapTextInput}>
                        <CustomInput 
                            label='Full name' 
                            text={userName} 
                            setText={setUserName}
                        />
                    </View>
                    <View style={styles.wrapTextInput}>
                        <CustomInput 
                            label='Phone number' 
                            text={userPhone} 
                            setText={setUserPhone}
                        />
                    </View>
                    <View style={styles.wrapTextInput}>
                        <CustomInput 
                            label='Address' 
                            text={userAddress} 
                            setText={setUserAddress}
                        />
                    </View>
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
                    <View style={styles.wrapTextInput}>
                        <CustomInput 
                            label='Confirm password'
                            text={confirmPassword}
                            setText={setConfirmPassword}
                        />
                    </View>
                    <View style={{
                        width: width/1.13,
                        margin: 10
                    }}>
                        {/* Push Sign up in here */}
                        <CustomButton 
                            title='Sign Up' 
                            _handleEvent={() => {
                                dispatch(SignUp({email, password, confirmPassword, userName, userAddress, userPhone}));
                                setIsVisible(true)
                            }}
                        />
                    </View>

                    <View style={styles.wrapSignUpOption}>
                        <Text style={styles.signUpOtionLabel}>Already have an account? </Text>
                        <TouchableOpacity
                            //navigate to sign up screen in here
                            onPress={() => navigation.navigate('LoginScreen')}
                        >
                            <Text style={styles.signUpOptionLink}>SIGN IN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                {
                    isLoading ?
                    <LoadingTransparentScreen/>
                    :
                    <ModelNotification notification={error} isVisible={isVisible} setIsVisible={setIsVisible}/>

                }
            </View>
        </ScrollView>
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
