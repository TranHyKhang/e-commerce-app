import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {useNavigation} from '@react-navigation/native';

export function Header() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Ionicons name='close' size={30} color='white'/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 15,
        paddingTop: 40,
        paddingBottom: 20,
        alignSelf: 'flex-end'
    }
})
