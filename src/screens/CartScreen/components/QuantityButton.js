import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity
 } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign'

export function QuantityButton({iconName, _handleEvent, UpdateProductQuantity}) {
    return (
        <TouchableOpacity 
            activeOpacity={0.7}
            onPress={() => {
                _handleEvent();
                // UpdateProductQuantity();
            }}
        >
            <View style={styles.container}>
                <AntDesign name={iconName} size={20}/>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    container: {

    }
})
