import React, {useState} from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image
} from 'react-native';

import Colors from '../../utils/Colors';

import {useNavigation} from '@react-navigation/native';

//Components
import {CustomInput, CustomButton} from '../../components'
import {Header, ModelNotification} from './components'

//redux
import {useDispatch, useSelector} from 'react-redux';
import {postLogin} from '../../actions';

import Logo from '../../utils/Images/Logo.png'

const {width} = Dimensions.get('screen');

export function LoginScreen() {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const error = useSelector(state => state.authReducer.error);

    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.wrapBody}>
                <Image source={Logo} style={{width: 80, height: 80}}/>
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
                    <CustomButton title='Login' _handleEvent={() => {
                        dispatch(postLogin(email, password));
                        setIsVisible(true)
                        
                    }}/>
                </View>
                <View style={styles.wrapSignUpOption}>
                    <Text style={styles.signUpOtionLabel}>Don't have an account? </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen')}
                    >
                        <Text style={styles.signUpOptionLink}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>

            
            <ModelNotification notification={error} isVisible={isVisible} setIsVisible={setIsVisible}/>


            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: Colors.black,
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
        color: Colors.white,
        fontWeight: '800'

    },
    signUpOptionLink: {
        color: Colors.tab_button_focused_blue,
        fontWeight: '800'
    }
})
