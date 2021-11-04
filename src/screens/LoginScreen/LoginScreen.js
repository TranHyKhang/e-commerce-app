import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Dimensions,
    ImageBackground
} from 'react-native';

import Colors from '../../utils/Colors';

import background from '../../utils/Images/background.jpg'

const {width, height} = Dimensions.get('screen');

export function LoginScreen() {
    return (
        <View style={styles.container}>
                
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: Colors.background_gray
    }
})
