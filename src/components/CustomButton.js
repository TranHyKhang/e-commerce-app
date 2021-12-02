import React from 'react';
import { 
    View, 
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';

import Colors from '../utils/Colors';

export function CustomButton({title, _handleEvent, color, textColor}) {
    return (
        <TouchableOpacity
            onPress={_handleEvent}
            activeOpacity={0.8}
        >
            <View style={[styles.container, {backgroundColor: color ? color : Colors.pink_fire}]}>
                <Text style={[styles.title, {color: textColor ? textColor : Colors.white}]}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: Colors.pink_fire,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 5
    },
    title: {
        // color: Colors.white,
        fontWeight: '900',
        fontSize: 18
    }
})
