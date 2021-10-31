import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';

import {TextInput} from 'react-native-paper';

import Colors from '../../../utils/Colors';

const {width} = Dimensions.get('screen');

export function CustomTextInput({label, text, setText}) {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.textInput} 
                label={label}
                mode='outlined'
                outlineColor={Colors.sub_title_color}
                selectionColor={Colors.pink_fire}
                theme={{ colors: {primary: Colors.pink_fire}}}
                value={text}
                onChangeText={(text) => setText(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        width: width/1.2,
        margin: 10
    },
    textInput: {

    }
})


