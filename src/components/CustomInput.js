import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';

import {TextInput} from 'react-native-paper';

import Colors from '../utils/Colors';

const {width} = Dimensions.get('screen');

export function CustomInput({label, text, setText, isPassword}) {
    return (
        <TextInput 
            style={styles.textInput} 
            label={label}
            mode='outlined'
            outlineColor={Colors.sub_title_color}
            selectionColor={Colors.pink_fire}
            theme={{ colors: {primary: Colors.pink_fire}}}
            value={text}
            secureTextEntry={isPassword ? true : false}
            onChangeText={(text) => setText(text)}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    textInput: {
        width: width/1.2,
        backgroundColor: Colors.white,

    }
})


