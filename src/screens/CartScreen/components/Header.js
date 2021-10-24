import React from 'react';
import { 
    View, 
    Text,
    StyleSheet, TouchableOpacity
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {useNavigation} from '@react-navigation/native';

export function Header() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Cart</Text>
            <TouchableOpacity 
                onPress={() => navigation.goBack()}
                style={styles.headerIcon}
            >
                <AntDesign 
                    name='close' 
                    size={30}
                /> 
            </TouchableOpacity>
             
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: '700'
    },
    headerIcon: {
        position: 'absolute',
        right: 20
    }
})
